<template>
	<div class="headers-text">
			<h4>{{ subtitle }}</h4>
			<h3>{{ title }}</h3>
			<p v-if="paragraph">{{ paragraph }}</p>
	</div>
</template>
<script setup>
import {defineProps, toRefs} from 'vue';

const props = defineProps({
	textBlock: {}
})
const { textBlock } = toRefs(props)
const { subtitle, title, paragraph } = textBlock.value

</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.headers-text {
	text-align: center;
	h4, h3 {
		color: var(--vt-c-dark);
	}
	h4 {
		font-size: 24px;
		font-family: 'Kaushan Script', cursive;
		@media (max-width: 1200px) {
			@include adaptive-font(24, 19.2);
		}
	}
	h3 {
		font-size: 30px;
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
		margin: 18px auto 50px;
		position: relative;
		display: inline-block;
		padding-bottom: 32px;
		text-transform: uppercase;
		@media (max-width: 1200px) {
			@include adaptive-font(30, 24);
			@include adaptive-padding-bottom(32, 25.6);
			@include adaptive-margin-top(18, 14.4);
			@include adaptive-margin-bottom(50, 40);
		}
		&:after {
			content: '';
			position: absolute;
			bottom: -5px;
			left: 50%;
			transform: translateX(-50%);
			height: 3px;
			width: 60px;
			background-color: var(--vt-c-danger);
		}
	}
	p {
		font-size: 15px;
		@media (max-width: 1200px) {
			@include adaptive-font(15, 14);
		}
	}
}
</style>
