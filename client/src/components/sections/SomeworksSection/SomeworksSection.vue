<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import SomeworksPhotos from '@/components/sections/SomeworksSection/SomeworksPhotos.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<section id="someworks-section" class="someworks-section">
			<div class="someworks-block">
		    <HeadersTextBlock :textBlock="mogoApi.someworksTextBlock" />
			</div>
			<SomeworksPhotos />
	</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.someworks-block {
	@include container;
	padding-top: 90px;
	padding-bottom: 100px;
	@media (max-width: 1200px) {
		@include adaptive-padding-top(90, 40);
		@include adaptive-padding-bottom(100, 50);
	}
}
</style>
