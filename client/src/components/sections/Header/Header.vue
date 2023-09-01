<script setup>
	import NavigationTop from '@/components/sections/Header/NavigationTop.vue'
	import Hero from '@/components/sections/Header/Hero.vue'
	import NavigationBottom from '@/components/sections/Header/NavigationBottom.vue'
</script>
<template>
	<header
			class="header"
	>
			<NavigationTop />
			<Hero />
			<NavigationBottom />
	</header>
</template>

<style lang="scss" scoped>
	.header {
		color: var(--vt-c-white);
		min-height: 100vh;
		background: url('@/assets/img/head_main_picture.jpg') center center/100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1200px) {
			background-size: 1200px 100%;
		}
	}
</style>
