<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
		<div class="footer-copyright">
			<a :href="mogoApi.footerCopyright.linkHref">&copy; {{ mogoApi.footerCopyright.linkText }} <span>{{ mogoApi.footerCopyright.spanText }}</span></a>
		</div>
</template>
<style lang="scss" scoped>
	.footer-copyright {
		padding: 25px 0;
		text-align: center;
		border-top: 1px solid #e5e5e5;
		a {
			margin: 0 auto;
			color: var(--vt-c-dark);
			font-family: 'Montserrat', sans-serif;
			font-size: 13px;
			text-decoration: none;
			span {
				color: var(--vt-c-danger);
			}
			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
