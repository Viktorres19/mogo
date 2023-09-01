<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="widget-about">
		<h3>{{ mogoApi.footerWidgetAbout.title }}</h3>
		<p>{{ mogoApi.footerWidgetAbout.text }}</p>
	</div>
</template>
<style lang="scss" scoped>
.widget-about {
	h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 46px;
		font-weight: bold;
		color: #cccccc;
		margin-bottom: 25px;
	}
	p {
		color: var(--color-indigo);
		font-size: 15px;
		line-height: 1.6;
	}
}
</style>
