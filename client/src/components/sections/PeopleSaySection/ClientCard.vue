<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div v-for="client in mogoApi.peopleClients" :key="client.id" class="clients-card">
	  <picture>
		  <source type="image/webp" :srcset="client.imgSrc" width="100%" height="100%">
		  <source type="image/jpeg" :srcset="client.imgSrc" width="100%" height="100%">
		  <img :src="client.imgSrc" :alt="client.imgAlt" width="100%" height="100%">
	  </picture>
			<div class="content">
					<h4>{{ client.title }}</h4>
					<h5>{{ client.subtitle }}</h5>
					<p>{{ client.text }}</p>
			</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.clients-card {
	display: flex;
	width: 50%;
	align-items: flex-start;
	box-sizing: border-box;
	padding-bottom: 50px;
	padding-right: 40px;
	@media (max-width: 1200px) {
		@include adaptive-padding-bottom(50, 30);
	}
	@media (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}
	@media (max-width: 479px) {
		flex-direction: column;
		align-items: center;
	}
	picture {
		width: 110px;
		height: 110px;
		min-width: 110px;
		min-height: 110px;
		position: relative;
		overflow: hidden;
		display: block;
		source, img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		padding-top: 11px;
		padding-left: 35px;
		@media (max-width: 479px) {
			padding-left: 0;
		}
		h4 {
			text-transform: uppercase;
			font-family: 'Montserrat', sans-serif;
			font-size: 14px;
			color: var(--color-dark);
			padding-bottom: 10px;
			@media (max-width: 479px) {
				text-align: center;
			}
		}
		h5 {
			font-style: italic;
			color: var(--color-dark);
			padding-bottom: 14px;
			margin-bottom: 9px;
			position: relative;
			font-size: 15px;
			@media (max-width: 479px) {
				margin: 0 auto 9px;
				text-align: center;
			}
			&:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				height: 3px;
				width: 60px;
				background-color: var(--vt-c-danger);
				@media (max-width: 479px) {
					left: 50%;
					transform: translateX(-50%);
				}
			}
		}
		p {
			line-height: 1.6;
			@media (max-width: 479px) {
				text-align: center;
			}
		}
	}
}
</style>
