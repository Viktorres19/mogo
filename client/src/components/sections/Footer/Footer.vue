<script setup>
import FooterWidgets from '@/components/sections/Footer/FooterWidgets.vue'
import FooterCopyright from '@/components/sections/Footer/FooterCopyright.vue'
</script>
<template>
	<footer id="footer" class="footer">
			<FooterWidgets />
			<FooterCopyright />
	</footer>
</template>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
	.footer {
		@include container;
		padding-top: 70px;
		background-color: var(--vt-c-white);
		@media (max-width: 1200px) {
			@include adaptive-padding-top(70, 40);
		}
	}
</style>
