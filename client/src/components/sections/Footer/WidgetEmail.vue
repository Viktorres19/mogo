<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<form class="widget-email">
		<input type="email" :placeholder="`${mogoApi.footerWidgetEmail.placeholder}...`" />
		<button type="submit">{{ mogoApi.footerWidgetEmail.buttonSubscribe }}</button>
	</form>
</template>
<style lang="scss" scoped>
.widget-email {
	display: flex;
	align-items: stretch;
	margin-top: 17px;
	width: 100%;
	max-width: 350px;
	input {
		border: 1px solid #e7e7e7;
		border-right: none;
		float: left;
		padding: 15px 12px 14px 12px;
		color: var(--vt-c-dark);
		font-style: italic;
		font-size: 15px;
		outline: none;
		width: 59%;
		&:focus-visible {
			outline: none;
		}
	}
	button {
		background: var(--vt-c-success);
		color: var(--vt-c-white);
		padding: 15px 10px;
		border: none;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		opacity: 1;
		transition: opacity .3s ease;
		width: 41%;
		text-align: center;
		text-transform: uppercase;
		&:hover {
			opacity: .8;
		}
	}
}
</style>
