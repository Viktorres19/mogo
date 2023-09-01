<template>
	<div class="counter-item" v-for="item in mogoApi.counterData" :key="item.id" :item="item">
		<div class="number">{{ item.number }}</div>
	  <div class="text">{{ item.text }}</div>
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
.counter-item {
	box-sizing: border-box;
	color: var(--vt-c-white);
	width: 20%;
	border-right: 1px solid #b5eae0;
	padding: 70px 10px 60px;
	text-align: center;
	border-left: 1px solid #b5eae0;
	.number {
		font-weight: 700;
		font-family: 'Montserrat', sans-serif;
		font-size: 72px;
		@media (max-width: 1200px) {
			@include adaptive-font(72, 57.6);
		}
	}
	.text {
		font-size: 14px;
		text-transform: uppercase;
		@media (max-width: 1200px) {
			@include adaptive-font(14, 12);
		}
	}
	@media (max-width: 1200px) {
		@include adaptive-padding-top(70, 40);
		@include adaptive-padding-bottom(60, 35);
	}
	@media (max-width: 768px) {
		width: 33.3%;
		border-bottom: 1px solid #b5eae0;
	}
	@media (max-width: 479px) {
		width: 50%;
		&:last-of-type {
			border-bottom: none;
		}
	}
}
</style>
