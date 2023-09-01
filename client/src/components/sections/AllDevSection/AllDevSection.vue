<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<section class="devices-section">
			<HeadersTextBlock :textBlock="mogoApi.allDevTextBlock" />
			<div class="devices-wrapper" v-if="!isLoading">
				<div class="device-big">
					<picture>
						<source type="image/webp" :srcset="mogoApi.allDevBigImage.src" width="100%" height="100%">
						<source type="image/jpeg" :srcset="mogoApi.allDevBigImage.src" width="100%" height="100%">
						<img :src="mogoApi.allDevBigImage.src" :alt="mogoApi.allDevBigImage.alt" width="100%" height="100%">
					</picture>
					<div class="device-small">
						<picture>
							<source type="image/webp" :srcset="mogoApi.allDevSmallImage.src" width="100%" height="100%">
							<source type="image/jpeg" :srcset="mogoApi.allDevSmallImage.src" width="100%" height="100%">
							<img :src="mogoApi.allDevSmallImage.src" :alt="mogoApi.allDevSmallImage.alt" width="100%" height="100%">
						</picture>
					</div>
				</div>
			</div>
	</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.devices-section {
	background: url('@/assets/img/alldev_main_picture.jpg') center center/100% 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 94px;
	@media (max-width: 1200px) {
		background-size: 1200px 100%;
		@include adaptive-padding-top(94, 50);
	}
}
.devices-wrapper {
	@include container;
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: -43px;
}
.device-big {
	max-width: 477px;
	width: 100%;
	position: relative;
	picture {
		display: block;
		width: 100%;
		height: 0;
		padding-bottom: 122%;
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
.device-small {
	position: absolute;
	bottom: -65px;
	right: -122px;
	max-width: 211px;
	width: 100%;
	picture {
		display: block;
		width: 100%;
		height: 0;
		padding-bottom: 212%;
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
	@media (max-width: 1200px) {
		right: 0;
	}
}
</style>
