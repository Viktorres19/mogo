<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="photo-block">
	  <a v-for="item in mogoApi.storyPhotoBlock" :key="item.id" :href="item.link" class="photo-item">
	    <div class="descr">
			  <div class="descr__img">
			    <picture>
				    <source type="image/webp" :srcset="item.icon" width="100%" height="100%">
				    <source type="image/jpeg" :srcset="item.icon" width="100%" height="100%">
				    <img :src="item.icon" :alt="item.iconAlt" width="100%" height="100%">
			    </picture>
			  </div>
		    <p>{{ item.text }}</p>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="item.image" width="100%" height="100%">
		    <source type="image/jpeg" :srcset="item.image" width="100%" height="100%">
		    <img :src="item.image" :alt="item.imageAlt" width="100%" height="100%">
	    </picture>
	  </a>
	</div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.photo-block {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 30px;
	margin-top: 80px;
	@media (max-width: 1200px) {
		@include adaptive-margin-top(80, 40);
		@include adaptive-gap(30, 24);
	}
	.photo-item {
		box-sizing: border-box;
		flex-grow: 2;
		min-width: 250px;
		max-width: 380px;
		position: relative;
		overflow: hidden;
		transition: box-shadow .1s ease;
		.descr {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(243,129,129,0.9), rgba(252,227,138,0.9));
			color: var(--color-white);
			text-align: center;
			transform: translateX(-10000px);
			transition: trasform .1s ease;
			z-index: 2;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			&__img {
				position: relative;
				width: 32px;
				height: 23px;
				margin: 0 auto;
				picture {
					overflow: hidden;
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
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
			p {
				font-size: 18px;
				font-weight: bold;
				color: var(--vt-c-white);
				margin-top: 5px;
			}
		}
		&:hover {
			box-shadow: 10px 10px 0px var(--vt-c-success);
			.descr {
				transform: translateX(0);
			}
		}
		picture {
			width: 100%;
			height: 0;
			padding-bottom: 65.8%;
			position: relative;
			overflow: hidden;
			display: block;
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
