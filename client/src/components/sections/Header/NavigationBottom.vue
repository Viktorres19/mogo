<script setup>
import { useMogoStore } from '@/stores/mogo'
import { storeToRefs } from 'pinia'
const store = useMogoStore()
const { mogoApi } = storeToRefs(store)
</script>
<template>
	<nav class="navigation-bottom">
		<ul>
			<li v-for="item in mogoApi.navigationBottomData" :key="item.id"><a :href="`#${item.href}`"><b>{{ item.id }}</b> <span>{{ item.text }}</span></a></li>
		</ul>
	</nav>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.navigation-bottom {
	@include container;
	ul {
		display: flex;
		justify-content: space-between;
		gap: 27px;
		@media (max-width: 768px) {
			flex-wrap: wrap;
			flex-direction: row;
			box-sizing: border-box;
		}
		@include reset-list;
		@media (max-width: 1200px) {
			@include adaptive-gap(27, 21.6)
		}
		@media (max-width: 479px) {
			gap: 0;
		}
		li {
			flex-grow: 2;
			box-sizing: border-box;
			@media (max-width: 768px) {
				flex-grow: 1;
				width: calc(50% - 21.6px);
			}
			@media (max-width: 479px) {
				width: 100%;
			}
			a {
				width: 100%;
				color: var(--color-white);
				text-decoration: none;
				padding: 14px 0;
				border-top: 3px solid #f7eac5;
				transition: all .3s ease;
				font-family: 'Montserrat', sans-serif;
				font-size: 14px;
				display: flex;
				align-items: center;
				text-transform: uppercase;
				@media (max-width: 1200px) {
					@include adaptive-padding-top(14, 12);
					@include adaptive-padding-bottom(14, 12);
					@include adaptive-font(14, 12);
				}
				@media (max-width: 768px) {
					border-width: 2px;
				}
				&:hover {
					color: var(--vt-c-danger);
					border-top-color: var(--vt-c-danger);
				}
				span, b {
					line-height: 1;
				}
				b {
					font-size: 18px;
					font-weight: 700;
					padding-right: 3px;
					@media (max-width: 1200px) {
						@include adaptive-font(14, 12);
					}
				}
			}
		}
	}
}
</style>
