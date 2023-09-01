<script setup>
import { useMogoStore } from '@/stores/mogo'
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
const store = useMogoStore()

const { mogoApi } = storeToRefs(store)

const appData = reactive({
	isMenuOpened: false
})
const toggleMenu = () => {
	appData.isMenuOpened = !appData.isMenuOpened
}
const closeMenu = () => {
	appData.isMenuOpened = false
}
</script>
<template>
	<div class="navigation-top">
		<div class="navigation-top__logo">
			{{ mogoApi.headerNavigationTop.navigationTopLogo.logoText }}
		</div>
		<div class="navigation-top__wrapper">
			<div @click="toggleMenu" :class="['header-burger', appData.isMenuOpened ? 'active' : '']">
			<span></span></div>
			<nav :class="['header-navigation', appData.isMenuOpened ? 'active' : '']">
				<ul class="navigation-top__menu">
					<li v-for="item in mogoApi.headerNavigationTop.navigationTopMenu" :key="item.id">
						<a @click="closeMenu" :href="`#${item.link}`">{{ item.text }}</a>
					</li>
				</ul>
				<ul class="navigation-top__links">
						<li v-for="item in mogoApi.headerNavigationTop.navigationTopLinks" :key="item.id">
							<a :href="item.link">
								<img :alt="item.alt" :src="item.img" :width="item.width" :height="item.height"/>
							</a>
						</li>
				</ul>
			</nav>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.navigation-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	@include container;
	padding-top: 20px;
	padding-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
	}
	&__logo {
		font-weight: 700;
		font-size: 30px;
		@media (max-width: 768px) {
			text-align: center;
		}
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		position: relative;
	}

	nav {
		display: flex;
		margin-left: 10px;
		gap: 2.6vw;
		@media (max-width: 768px) {
			position: absolute;
			z-index: 2;
			right: 0;
			top: 30px;
			margin-top: 10px;
			padding: 10px 40px;
			flex-grow: 2;
			display: none;
			background-color: var(--vt-c-yellow-lighten);
			flex-direction: column;
			align-items: center;
			&.active {
				display: flex;
			}
		}
	}

	&__menu, &__links {
		display: flex;
		@include reset-list;
		gap: 2.6vw;
		@media (max-width: 768px) {
			flex-direction: column;
			align-items: center;
		}
	}

	&__menu {
		li {
			a {
				color: inherit;
				text-decoration: none;
				text-transform: uppercase;
				position: relative;
				transition: color .3s ease;
				&:after {
					content: '';
					position: absolute;
					bottom: -5px;
					left: 0;
					height: 3px;
					width: 100%;
					background-color: var(--vt-c-yellow);
					opacity: 0;
					transition: opacity .3s ease;
				}
				&:hover {
					color: var(--vt-c-yellow);
					&:after {
						display: block;
						opacity: 1;
					}
				}
			}
		}
	}

	&__links {

	}
}
.header-burger {
	display: none;
	width: 30px;
	height: 30px;
	position: relative;
	cursor: pointer;
	@media (max-width: 768px) {
		display: block;
	}
	span {
		width: 100%;
		height: 4px;
		background-color: var(--vt-c-white);
		position: absolute;
		left: 0;
		border-radius: 4px;
		display: block;
		top: 50%;
		transform: translateY(-50%);
	}
	&:before, &:after {
		content: "";
		transition: all 0.3s ease;
		width: 100%;
		height: 4px;
		background-color: var(--vt-c-white);
		position: absolute;
		left: 0;
		border-radius: 4px;
	}
	&:before {
		bottom: 0;
	}
	&:after {
		top: 0;
	}
	&.active span {
		display: none;
	}
	&.active:before, &.active:after {
		top: 50%;
		left: 50%;
	}
	&.active:before {
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&.active:after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
}
</style>
