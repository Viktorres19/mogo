<template>
	<div v-if="!isLoading" class="blog-item" v-for="blog in mogoApi.blogItems" :key="blog.id">
		<div class="image-wrapper">
			<picture>
				<source type="image/webp" :srcset="blog.imgSrc" width="100%" height="100%">
				<source type="image/jpeg" :srcset="blog.imgSrc" width="100%" height="100%">
				<img :src="blog.imgSrc" :alt="blog.imgAlt" width="100%" height="100%">
			</picture>
			<div class="blog-data">
					<b>{{blog.postData}}</b>
					<i>{{blog.postMonth}}</i>
			</div>
		</div>
			<h4>{{blog.title}}</h4>
			<p>{{blog.text}}</p>
			<div class="blog-info">
					<div class="blog-views">
							{{blog.viewsCount}}
					</div>
				  <div class="blog-comments">
					  {{blog.commentsCount}}
				  </div>
			</div>
	</div>
</template>
<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.blog-item {
	width: calc(33.333% - 30px);
	@media (max-width: 991px) {
		width: calc(50% - 25px);
	}
	@media (max-width: 768px) {
		width: calc(50% - 20px);
	}
	@media (max-width: 479px) {
		width: 100%;
	}
	.image-wrapper {
		position: relative;
		.blog-data {
			position: absolute;
			left: -8px;
			bottom: 8px;
			background-color: var(--vt-c-success);
			color: var(--vt-c-white);
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			@media (max-width: 991px) {
				left: -4px;
				bottom: 4px;
			}
			b {
				font-size: 30px;
				font-family: 'Montserrat', sans-serif;
				font-weight: bold;
			}
			i {
				font-size: 15px;
			}
		}
		picture {
			display: block;
			width: 100%;
			height: 0;
			padding-bottom: 63.32%;
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
	h4, p {
		text-align: center;
	}
	h4 {
		margin: 20px 0 7px;
		color: var(--vt-c-dark);
		font-size: 14px;
		font-family: 'Montserrat', sans-serif;
		text-transform: uppercase;
	}
	p {
		font-size: 15px;
		line-height: 1.6;
	}
	.blog-info {
		display: flex;
		margin-top: 20px;
		padding: 20px 0;
		border-top: 1px solid #e5e5e5;
		.blog-views, .blog-comments {
			padding-left: 26px;
			margin-right: 15px;
			font-size: 15px;
			font-style: italic;
		}
		.blog-views {
			background: url('@/assets/img/blog_icon_1.png') left center/20px 12px no-repeat;
		}
		.blog-comments {
			background: url('@/assets/img/blog_icon_2.png') left center/16px 14px no-repeat;
		}
	}
}
</style>
