<template>
	<section id="story-section" class="story-section">
	  <HeadersTextBlock :textBlock="mogoApi.storyTextBlock" />
		<PhotoBlock />
	</section>
</template>
<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import PhotoBlock from '@/components/sections/StorySection/PhotoBlock.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.story-section {
	@include container;
	background-color: var(--vt-c-white);
	padding-top: 83px;
	padding-bottom: 100px;
	text-align: center;
	@media (max-width: 1200px) {
		@include adaptive-padding-top(90, 40);
		@include adaptive-padding-bottom(90, 40);
	}
}
</style>
