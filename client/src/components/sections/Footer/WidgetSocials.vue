<script setup>
import SocialsItem from '@/components/sections/Footer/SocialsItem.vue'
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()

const { mogoApi } = storeToRefs(store)
</script>
<template>
	<div class="widget-socials">
		<h5><b>{{ mogoApi.footerFollowersInfo.amount }}</b> {{ mogoApi.footerFollowersInfo.text }}</h5>
			<div class="socials-row">
					<div style="margin-right: 15px;">{{ mogoApi.footerFollowersInfo.followUs }}</div>
					<SocialsItem />
			</div>
	</div>
</template>
<style lang="scss" scoped>
.widget-socials {
	h5 {
		font-family: 'Montserrat', 'sans-serif';
		color: var(--vt-c-dark);
		font-size: 14px;
		margin-top: 40px;
		padding-bottom: 15px;
		border-bottom: 1px solid #e5e5e5;
		b {
			font-size: 18px;
			font-weight: bold;
		}
	}
	.socials-row {
		display: flex;
		align-items: center;
		color: var(--color-indigo);
		font-style: italic;
		font-size: 15px;
	}
}
</style>
