<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		const prev = ref(null)
		const next = ref(null)
		const sliderData = ref([
			{
				id: '1',
				src: '/img/slider_1_1.png',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
				author: 'Jon Doe'
			},
			{
				id: '2',
				src: '/img/slider_1_1.png',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
				author: 'Jon Doe'
			},
			{
				id: '3',
				src: '/img/slider_1_1.png',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
				author: 'Jon Doe'
			}
		])
		return {
			modules: [Autoplay, Pagination, Navigation],
			prev,
			next,
			sliderData
		}
	}
}
</script>
<template>
		<section class="slider-one-section">
				<div class="slider-one-section__container">
			<swiper
				:direction="'vertical'"
				:spaceBetween="0"
				:loop="true"
				:centeredSlides="true"
				:auto-height="true"
				:autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
				:pagination="false"
				:navigation="{
		      prevEl: prev,
		      nextEl: next,
		    }"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide v-for="slide in sliderData" :key="slide.id">
						<div class="image-wrapper">
						<picture>
							<source type="image/webp" :srcset="slide.src" width="100%" height="100%">
							<source type="image/jpeg" :srcset="slide.src" width="100%" height="100%">
							<img :src="slide.src" :alt="slide.author" width="100%" height="100%">
						</picture>
						</div>
					<div class="text-wrapper">
							<cite>“{{ slide.text }}”</cite>
							<h3>{{ slide.author }}</h3>
					</div>
				</swiper-slide>
			</swiper>
				</div>
		<div ref="prev" class="swiper-button-prev"></div>
		<div ref="next" class="swiper-button-next"></div>
		</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.slider-one-section {
	position: relative;
	margin-top: 75px;
	margin-bottom: 75px;
	&__container {
		@include container;
	}
	.swiper-button-next, .swiper-button-prev {
		position: absolute;
		width: 12px;
		height: 22px;
		background-color: transparent;
		background-position: left center;
		background-size: 12px 22px;
		background-repeat: no-repeat;
		top: 50%;
		transform: translateY(-50%);
		opacity: 1;
		transition: opacity .3s ease;
		&:hover {
			opacity: .7;
		}
		@media (max-width: 1200px) {
			bottom: 0;
			transform: translateY(100%);
			top: auto;
		}
		&:after {
			display: none;
		}
		@media (max-width: 768px) {
			display: none;
		}
	}
	.swiper-button-next {
		right: 10px;
		background-image: url('@/assets/img/arrow_next.png');
	}
	.swiper-button-prev {
		left: 10px;
		background-image: url('@/assets/img/arrow_prev.png');
	}
}
.swiper {
	width: 100%;
	.swiper-slide {
		margin-bottom: 0;
		display: flex;
		align-items: center;
		height: auto !important;
		@media (max-width: 479px) {
			flex-direction: column;
			align-items: flex-start;
		}
		.image-wrapper {
			width: 150px;
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
		div.text-wrapper {
			padding-left: 70px;
			@media (max-width: 479px) {
				padding-left: 0;
				padding-top: 20px;
			}
			cite {
				margin-top: 30px;
				color: var(--color-indigo);
				font-style: italic;
				font-size: 24px;
			}
			h3 {
				display: block;
				margin-top: 10px;
				padding-left: 65px;
				font-size: 24px;
				color: var(--color-dark);
				font-family: 'Kaushan Script', cursive;
				text-decoration: none;
				position: relative;
				&:after {
					content: '';
					position: absolute;
					bottom: 50%;
					left: 0;
					transform: translateY(-50%);
					height: 3px;
					width: 60px;
					background-color: var(--vt-c-danger);
				}
			}
		}
	}
}
</style>
