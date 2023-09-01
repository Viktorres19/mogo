<template>
	<section class="peoplesay-section">
	  <div class="peoplesay-block">
	    <HeadersTextBlock :textBlock="mogoApi.peopleTextBlock" />
			  <ClientsBlock />
	  </div>
	</section>
</template>
<script setup>
import HeadersTextBlock from '@/components/ui/HeadersTextBlock.vue'
import ClientsBlock from '@/components/sections/PeopleSaySection/ClientsBlock.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.peoplesay-section {
	background: url('@/assets/img/pep_say_bg.jpg') center center/100% 100%;
	padding-top: 90px;
	padding-bottom: 70px;
	@media (max-width: 1200px) {
		background-size: 1200px 100%;
		@include adaptive-padding-top(90, 50);
		@include adaptive-padding-bottom(70, 40);
	}
	.peoplesay-block {
		@include container;
	}
}
</style>
