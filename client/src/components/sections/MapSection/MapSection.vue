<template>
	<section class="map-section">
		<div class="map-cursor">
			<picture>
				<source type="image/webp" :srcset="mogoApi.mapSection.mapCursor.imgSrc" :width="mogoApi.mapSection.mapCursor.imgWidth" :height="mogoApi.mapSection.mapCursor.imgHeight">
				<source type="image/jpeg" :srcset="mogoApi.mapSection.mapCursor.imgSrc" :width="mogoApi.mapSection.mapCursor.imgWidth" :height="mogoApi.mapSection.mapCursor.imgHeight">
				<img :src="mogoApi.mapSection.mapCursor.imgSrc" :alt="mogoApi.mapSection.mapCursor.imgAlt" :width="mogoApi.mapSection.mapCursor.imgWidth" :height="mogoApi.mapSection.mapCursor.imgHeight">
			</picture>
				<h3>{{ mogoApi.mapSection.mapText }}</h3>
		</div>
	</section>
</template>
<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<style lang="scss" scoped>
.map-section {
	height: 187px;
	position: relative;
	background: url('@/assets/img/map_holder_bg.jpg') center center/100% 100% no-repeat;
	@media (max-width: 1200px) {
		background-size: 1200px 100%;
	}
	.map-cursor {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		h3 {
			color: var(--vt-c-danger);
			font-size: 24px;
			font-family: 'Montserrat', sans-serif;
			text-transform: uppercase;
			font-weight: bold;
			margin-top: 5px;
			padding-bottom: 18px;
			&:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				height: 3px;
				width: 60px;
				background-color: var(--vt-c-danger);
			}
		}
	}
}
</style>
