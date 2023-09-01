<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import TeamMember from '@/components/sections/TeamSection/TeamMember.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<section class="team-section">
		<HeadersTextBlock :textBlock="mogoApi.teamTextBlock" />
		<div class="team-block">
			<TeamMember v-for="member in mogoApi.teamBlockList" :key="member.id" :member="member" />
		</div>
	</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.team-section {
	@include container;
	padding-top: 90px;
	padding-bottom: 90px;
	@media (max-width: 1200px) {
		@include adaptive-padding-top(90, 50);
		@include adaptive-padding-bottom(90, 50);
	}
}
.team-block {
	display: flex;
	justify-content: space-around;
	gap: 31px;
	margin-top: 80px;
	@media (max-width: 1200px) {
		@include adaptive-gap(31, 20);
		@include adaptive-margin-top(80, 40);
	}
	@media (max-width: 991px) {
		flex-wrap: wrap;
	}
}
</style>
