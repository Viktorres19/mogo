<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="widget-blogs">
		<h4>{{ mogoApi.footerInstagramInfo.instaTitle }}</h4>
		<div class="widget-blogs__row">
			<a v-for="post in mogoApi.footerInstagramInfo.posts" :key="post.id" :href="post.href">
				<picture>
					<source type="image/webp" :srcset="post.imgSrc" width="100%" height="100%">
					<source type="image/jpeg" :srcset="post.imgSrc" width="100%" height="100%">
					<img :src="post.imgSrc" :alt="post.imgAlt" width="100%" height="100%">
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
	flex-wrap: wrap;
	gap: 2px;
	a {
		display: block;
		width: calc(33.33% - 2px);
		picture {
			display: block;
			width: 100%;
			height: 0;
			padding-bottom: 100%;
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
