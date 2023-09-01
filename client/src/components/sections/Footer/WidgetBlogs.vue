<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="widget-blogs">
		<h4>{{ mogoApi.footerBlogsInfo.blogsTitle }}</h4>
	  <div class="widget-blogs__row">
      <a v-for="blog in mogoApi.footerBlogsInfo.blogs" :key="blog.id" :href="blog.href">
	      <picture>
		      <source type="image/webp" :srcset="blog.imgSrc" width="100%" height="100%">
		      <source type="image/jpeg" :srcset="blog.imgSrc" width="100%" height="100%">
		      <img :src="blog.imgSrc" :alt="blog.imgAlt" width="100%" height="100%">
	      </picture>
      </a>
	  </div>
	</div>
</template>
<style lang="scss" scoped>
.widget-blogs {
	h4 {
		color: var(--color-dark);
		margin-top: 10px;
		text-transform: uppercase;
		margin-bottom: 30px;
	}
}
.widget-blogs__row {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	a {
		display: block;
		margin-bottom: 40px;
		width: 100%;
		max-width: 120px;
		picture {
			display: block;
			width: 100%;
			height: 0;
			padding-bottom: 66.67%;
			position: relative;
			overflow: hidden;
			source, img {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>
