<script setup>
import ClientCard from '@/components/sections/PeopleSaySection/ClientCard.vue'
</script>
<template>
	<div class="clients-block">
		<ClientCard />
	</div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.clients-block {
	display: flex;
	flex-wrap: wrap;
	margin-top: 80px;
	@media (max-width: 1200px) {
		@include adaptive-margin-top(80, 40);
	}
}
</style>
