<template>
	<div class="amazing-service" v-for="service in mogoApi.amazingServicesBlock">
	    <div class="amazing-service__img">
	      <picture>
		      <source type="image/webp" :srcset="service.img" width="100%" height="100%">
		      <source type="image/jpeg" :srcset="service.img" width="100%" height="100%">
		      <img :src="service.img" :alt="service.header" width="100%" height="100%">
	      </picture>
	    </div>
			<div class="amazing-service__unit">
					<h3>{{ service.header }}</h3>
					<p>{{ service.text }}</p>
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
.amazing-service {
	width: 33.33%;
	box-sizing: border-box;
	padding: 45px 40px 50px 25px;
	&__img {
		float: left;
		margin-bottom: 30px;
		margin-right: 20px;
		width: 32px;
		picture {
			width: 100%;
			height: 0;
			padding-bottom: 100%;
			position: relative;
			overflow: hidden;
			display: block;
			@media (max-width: 1200px) {
				@include adaptive-padding-right(30, 24);
				@include adaptive-padding-bottom(20, 16);
			}
			source, img {
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
	h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		color: var(--vt-c-dark);
		text-transform: uppercase;
	}
	p {
		font-size: 15px;
	}
	&:nth-child(1) {
		border-bottom: 1px solid #e5e5e5;
	}
	&:nth-child(2) {
		border-bottom: 1px solid #e5e5e5;
	}
	&:nth-child(3) {
		border-bottom: 1px solid #e5e5e5;
	}
	@media (max-width: 1200px) {
		@include adaptive-padding-top(45, 36);
		@include adaptive-padding-right(40, 32);
		@include adaptive-padding-bottom(50, 40);
		@include adaptive-padding-left(25, 20);
	}
	@media (max-width: 768px) {
		width: 50%;
		&:nth-child(4) {
			border-bottom: 1px solid #e5e5e5;
		}
	}
	@media (max-width: 479px) {
		width: 100%;
		&:nth-child(5) {
			border-bottom: 1px solid #e5e5e5;
		}
	}
}
</style>
