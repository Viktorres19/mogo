<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()

const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="someworks-photos">
	  <div class="photo first">
			<div class="content">
					<div>
					  <picture>
						  <source type="image/webp" :srcset="mogoApi.someworksPhotos[0].iconSrc">
						  <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[0].iconSrc">
						  <img :src="mogoApi.someworksPhotos[0].iconSrc" :alt="mogoApi.someworksPhotos[0].iconAlt" width="100%" height="100%">
					  </picture>
						<h4>{{ mogoApi.someworksPhotos[0].header }}</h4>
						<h5>{{ mogoApi.someworksPhotos[0].text }}</h5>
					</div>
			</div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[0].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[0].imgSrc">
		    <img :src="mogoApi.someworksPhotos[0].imgSrc" :alt="mogoApi.someworksPhotos[0].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo second">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[2].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[2].iconSrc">
				    <img :src="mogoApi.someworksPhotos[2].iconSrc" :alt="mogoApi.someworksPhotos[2].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[2].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[2].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[2].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[2].imgSrc">
		    <img :src="mogoApi.someworksPhotos[2].imgSrc" :alt="mogoApi.someworksPhotos[2].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo photo--large third">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[4].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[4].iconSrc">
				    <img :src="mogoApi.someworksPhotos[4].iconSrc" :alt="mogoApi.someworksPhotos[4].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[4].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[4].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[4].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[4].imgSrc">
		    <img :src="mogoApi.someworksPhotos[4].imgSrc" :alt="mogoApi.someworksPhotos[4].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo six">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[5].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[5].iconSrc">
				    <img :src="mogoApi.someworksPhotos[5].iconSrc" :alt="mogoApi.someworksPhotos[5].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[5].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[5].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[5].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[5].imgSrc">
		    <img :src="mogoApi.someworksPhotos[5].imgSrc" :alt="mogoApi.someworksPhotos[5].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo fifth">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[1].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[1].iconSrc">
				    <img :src="mogoApi.someworksPhotos[1].iconSrc" :alt="mogoApi.someworksPhotos[1].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[1].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[1].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[1].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[1].imgSrc">
		    <img :src="mogoApi.someworksPhotos[1].imgSrc" :alt="mogoApi.someworksPhotos[1].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo fourth">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[3].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[3].iconSrc">
				    <img :src="mogoApi.someworksPhotos[3].iconSrc" :alt="mogoApi.someworksPhotos[3].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[3].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[3].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[3].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[3].imgSrc">
		    <img :src="mogoApi.someworksPhotos[3].imgSrc" :alt="mogoApi.someworksPhotos[3].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="photo seven">
	    <div class="content">
		    <div>
			    <picture>
				    <source type="image/webp" :srcset="mogoApi.someworksPhotos[6].iconSrc">
				    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[6].iconSrc">
				    <img :src="mogoApi.someworksPhotos[6].iconSrc" :alt="mogoApi.someworksPhotos[6].iconAlt" width="100%" height="100%">
			    </picture>
			    <h4>{{ mogoApi.someworksPhotos[6].header }}</h4>
			    <h5>{{ mogoApi.someworksPhotos[6].text }}</h5>
		    </div>
	    </div>
	    <picture>
		    <source type="image/webp" :srcset="mogoApi.someworksPhotos[6].imgSrc">
		    <source type="image/jpeg" :srcset="mogoApi.someworksPhotos[6].imgSrc">
		    <img :src="mogoApi.someworksPhotos[6].imgSrc" :alt="mogoApi.someworksPhotos[6].imgAlt" width="100%" height="100%">
	    </picture>
	  </div>
	</div>
</template>
<style lang="scss" scoped>
.someworks-photos {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
	@media (max-width: 470px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(8, 1fr);
	}
	.photo, .photo--large {
		position: relative;
	}
	.photo:not(.photo--large) {
		height: 0;
		padding-bottom: 81.3%;
	}
	.photo {
		position: relative;
		overflow: hidden;
		> picture {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
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
		.content {
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(243,129,129,0.9), rgba(252,227,138,0.9));
			color: var(--color-white);
			text-align: center;
			transform: translateX(-10000px);
			transition: transform .1s ease;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			h4 {
				text-transform: uppercase;
				font-family: 'Montserrat', sans-serif;
				font-size: 14px;
				color: var(--vt-c-white);
				margin-top: 5px;
			}
			h5 {
				font-family: 'Roboto', sans-serif;
				font-weight: 200;
				font-style: italic;
				font-size: 15px;
				color: var(--vt-c-white);
				margin-top: 5px;
			}
			picture {
				display: block;
				width: 30px;
				height: 30px;
				position: relative;
				overflow: hidden;
				margin: 0 auto;
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
		&:hover {
			.content {
				transform: translateX(0);
			}
		}
	}
	.third {
		grid-column: 3 ;
		grid-row: 1 / 3;
		@media (max-width: 1200px) {
			grid-column: 1;
			grid-row: 3 / 5;
		}
	}
}
</style>
