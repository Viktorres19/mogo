<script setup>
import ButtonOutlined from '@/components/ui/ButtonOutlined.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="hero">
		<h3>{{ mogoApi.heroTexts.creativeTemplateText }}</h3>
		<h2>{{ mogoApi.heroTexts.welcomeMogoText }}</h2>
		<ButtonOutlined href="#story-section" :buttonText="mogoApi.heroTexts.buttonOutlinedText" />
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.hero {
	@include container;
	padding-top: 20px;
	padding-bottom: 20px;
	text-align: center;
	max-width: 1000px;
	h2 {
		font-size: 150px;
		/*Adaptive font from Andrikanich: https://www.youtube.com/watch?v=HJZP5QsrpXs*/
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
		line-height: 1;
		margin-top: 12px;
		margin-bottom: 61px;
		position: relative;
		text-transform: uppercase;
		@media (max-width: 1200px) {
			@include adaptive-margin-bottom(61, 40)
		}
		&:after {
			content: '';
			position: absolute;
			bottom: -23px;
			left: 50%;
			transform: translateX(-50%);
			height: 3px;
			width: 60px;
			background-color: var(--vt-c-white);
			@media (max-width: 1200px) {
				bottom: calc(-16px + (-23 - -16) * ((100vw - 320px) / (1200 - 320)));
			}
		}
		@media (max-width: 1200px) {
			@include adaptive-font(150, 52)
		}
	}
	h3 {
		font-size: 72px;
		font-family: 'Kaushan Script', cursive;
		@media (max-width: 1200px) {
			@include adaptive-font(72, 25)
		}
	}
}
</style>
