<script setup>
import {defineProps, toRefs} from 'vue'
const props = defineProps({
	buttonText: String
})
const { buttonText } = toRefs(props)
</script>
<template>
	<a href="#" class="button-outlined">{{ buttonText }}</a>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
	.button-outlined {
		color: var(--vt-c-white);
		display: inline-block;
		padding: 9px 27px;
		border: 3px solid var(--vt-c-white);
		text-decoration: none;
		font-size: 14px;
		font-weight: 600;
		font-family: 'Montserrat', sans-serif;
		transition: all .3s ease;
		text-transform: uppercase;
		&:hover {
			color: var(--vt-c-yellow);
			border: 3px solid var(--vt-c-yellow);
		}
		@media (max-width: 1200px) {
			@include adaptive-padding-top(9, 7.2);
			@include adaptive-padding-right(27, 21.6);
			@include adaptive-padding-bottom(9, 7.2);
			@include adaptive-padding-left(27, 21.6);
			@include adaptive-font(14, 12);
		}
		@media (max-width: 768px) {
			border-width: 2px;
		}
	}
</style>
