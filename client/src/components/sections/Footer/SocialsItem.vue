<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="socials-item">
	  <a v-for="link in mogoApi.footerSocialItems" :key="link.id" :href="link.href">
	    <picture>
		    <source type="image/webp" :srcset="link.imgSrc" :width="link.width" :height="link.height">
		    <source type="image/jpeg" :srcset="link.imgSrc" :width="link.width" :height="link.height">
	      <img :src="link.imgSrc" :alt="link.imgAlt" :width="link.width" :height="link.height">
	    </picture>
	  </a>
	</div>
</template>
<style lang="scss" scoped>
.socials-item {
	display: flex;
	gap: 15px;
	align-items: center;
	flex-wrap: wrap;
	padding: 13px 0;
	a {
		display: block;
	}
}
</style>
