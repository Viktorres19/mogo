<template>
	<section class="counters-section">
			<div class="counters-block">
		    <CounterItem />
			</div>
	</section>
</template>
<script setup>
import CounterItem from '@/components/sections/CountersSection/CounterItem.vue'
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.counters-section {
	background-color: var(--vt-c-success);
}
.counters-block {
	@include container;
	display: flex;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
}
</style>
