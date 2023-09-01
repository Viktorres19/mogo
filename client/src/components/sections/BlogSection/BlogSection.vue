<template>
	<section id="blog-section" class="blog-section">
	  <HeadersTextBlock :textBlock="mogoApi.blogTextBlock" />
			<div class="blogs">
				<BlogItem />
			</div>
	</section>
</template>
<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import BlogItem from '@/components/sections/BlogSection/BlogItem.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.blog-section {
	@include container;
	background-color: var(--vt-c-white);
	padding-top: 90px;
	padding-bottom: 90px;
	@media (max-width: 1200px) {
		@include adaptive-padding-top(90, 40);
		@include adaptive-padding-bottom(90, 40);
	}
	.blogs {
		display: flex;
		justify-content: space-around;
		gap: 30px;
		flex-wrap: wrap;
		@media (max-width: 991px) {
			gap: 25px;
		}
		@media (max-width: 768px) {
			gap: 20px;
		}
		@media (max-width: 479px) {
			gap: 0;
		}
	}
}
</style>
