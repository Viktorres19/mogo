<script setup>
import { ref } from 'vue'
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'

const textBlock = {
	subtitle: 'Who we are',
	title: 'WHAT WE DO',
	paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

const image = {
	src: '/img/service_read_pic_1.jpg',
	alt: 'alt'
}
const accordion = ref([
	{
		id: '1',
		imgSrc: '/img/service_read_icon_1.png',
		title: 'PHOTOGRAPHY',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		isOpened: true
	},
	{
		id: '2',
		imgSrc: '/img/service_read_icon_2.png',
		title: 'CREATIVITY',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		isOpened: false
	},
	{
		id: '3',
		imgSrc: '/img/service_read_icon_3.png',
		title: 'WEB DESIGN',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		isOpened: false
	}
])
const toggleAccordion = (id) => {
	accordion.value.forEach(item => {
		if(item.id !== id && item.isOpened === true) {
			item.isOpened = false
		} else if(item.id === id && item.isOpened === false) {
			item.isOpened = true
		}  else if(item.id === id && item.isOpened === true) {
			item.isOpened = false
		}
	})
}
</script>
<template>
	<section class="do-section">
		<HeadersTextBlock :textBlock="textBlock"/>
		<div class="do-block">
			<div class="do-image">
				<picture>
					<source type="image/webp" :srcset="image.src" width="100%" height="100%">
					<source type="image/jpeg" :srcset="image.src" width="100%" height="100%">
					<img :src="image.src" :alt="image.alt" width="100%" height="100%">
				</picture>
			</div>
			<div class="do-content">
				<div
						class="do-accordion"
				>
					<div
			      v-for="item in accordion"
			      :key="item.id"
			      :class="[item.isOpened ? 'active': '', 'do-accordion__item']"
					>
						<header
							@click="toggleAccordion(item.id)"
						>
							<div class="image">
								<picture>
									<source type="image/webp" :srcset="item.imgSrc" width="100%" height="100%">
									<source type="image/jpeg" :srcset="item.imgSrc" width="100%" height="100%">
									<img :src="item.imgSrc" :alt="item.text" width="100%" height="100%">
								</picture>
							</div>
							<div class="text">{{ item.title }}</div>
						</header>
						<div class="content">
								<p>{{ item.text }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.do {
	&-section {
		@include container;
		padding-top: 90px;
		padding-bottom: 100px;
		@media (max-width: 1200px) {
			@include adaptive-padding-top(90, 70);
			@include adaptive-padding-bottom(100, 30);
		}
	}

	&-block {
		display: flex;
		flex-wrap: wrap;
		padding-top: 90px;
		@media (max-width: 1200px) {
			@include adaptive-padding-top(90, 40);
		}
		> * {
			box-sizing: border-box;
		}
	}

	&-image {
		width: 47.5%;
		@media (max-width: 768px) {
			width: 100%;
			padding-bottom: 20px;
		}
		picture {
			display: block;
			width: 100%;
			max-width: 570px;
			height: 0;
			padding-bottom: 66.66%;
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

	&-content {
		width: 52.5%;
		padding-left: 30px;
		box-sizing: border-box;
		@media (max-width: 768px) {
			width: 100%;
			padding-left: 0px;
		}
	}

	&-accordion {
		&__item {
			header {
				border: 1px solid #e5e5e5;
				padding: 12px 32px 12px 12px;
				display: flex;
				align-items: center;
				position: relative;
				cursor: pointer;
				&:after {
					content: '';
					position: absolute;
					right: 10px;
					top: 50%;
					transform: translateY(-50%);
					width: 22px;
					height: 12px;
					background-image: url('@/assets/img/service_read_arrow_down.png');
					background-color: transparent;
					background-position: left center;
					background-size: 100% 100%;
					background-repeat: no-repeat;
				}
				picture {
					display: block;
					width: 32px;
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
				.text {
					margin-left: 10px;
					text-transform: uppercase;
				}
			}
			.content {
				margin-bottom: 10px;
				color: var(--color-indigo);
				font-size: 15px;
				text-align: left;
				font-style: italic;
				line-height: 1.6;
				overflow: hidden;
				height: 0;
				transition: all .3s ease;
				p {
					padding: 18px;
					border: 1px solid #e5e5e5;
					border-top: none;
				}
			}
			&.active {
				.content {
					height: auto;
				}
				header {
					&:after {
						transform: rotate(180deg) translateY(50%);
					}
				}
			}
		}
	}
}
</style>
