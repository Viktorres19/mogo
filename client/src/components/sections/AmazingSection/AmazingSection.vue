<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import AmazingServices from '@/components/sections/AmazingSection/AmazingServices.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<section id="amazing-section" class="amazing-section">
	  <HeadersTextBlock :textBlock="mogoApi.amazingTextBlock" />
		<AmazingServices />
	</section>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.amazing-section {
	@include container;
	padding-top: 90px;
	padding-bottom: 90px;
	@media (max-width: 1200px) {
		@include adaptive-padding-top(90, 40);
		@include adaptive-padding-bottom(90, 40);
	}
}
</style>
