<template>
	<section class="logos-section">
	  <div class="logos-block">
			  <div v-for="logo in mogoApi.logos" :key="logo.id" class="logos-block__logo">
			    <picture>
				    <source type="image/webp" :srcset="logo.src">
				    <source type="image/jpeg" :srcset="logo.src">
				    <img :src="logo.src" :alt="logo.alt" width="100%" height="100%">
			    </picture>
			  </div>
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
@import '@/assets/mixins.scss';
.logos-section {
	background: #f8f8f8;
	padding-top: 70px;
	padding-bottom: 70px;
	@include adaptive-padding-top(70, 40);
	@include adaptive-padding-bottom(70, 40);
	.logos-block {
		@include container;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		@media (max-width: 1200px) {
			gap: 10px;
		}
		&__logo {
			width: 16.666%;
			display: flex;
			justify-content: center;
			@media (max-width: 1200px) {
				width: calc(33.333% - 10px);
			}
			@media (max-width: 1200px) {
				width: calc(50% - 10px);
			}
			picture {
				display: block;
				width: 128px;
				height: 128px;
				position: relative;
				overflow: hidden;
				img, source {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}
	}
}
</style>
