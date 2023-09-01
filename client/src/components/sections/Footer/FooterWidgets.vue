<script setup>

import WidgetAbout from '@/components/sections/Footer/WidgetAbout.vue'
import WidgetSocials from '@/components/sections/Footer/WidgetSocials.vue'
import WidgetEmail from '@/components/sections/Footer/WidgetEmail.vue'
import WidgetBlogs from '@/components/sections/Footer/WidgetBlogs.vue'
import WidgetInsta from '@/components/sections/Footer/WidgetInsta.vue'
</script>
<template>
	<div class="footer-widgets">
		<div class="footer-col--50">
				<WidgetAbout />
				<WidgetSocials />
				<WidgetEmail />
		</div>
	  <div class="footer-col--25">
		  <WidgetBlogs />
	  </div>
	  <div class="footer-col--25">
		  <WidgetInsta />
	  </div>
	</div>
</template>
<style lang="scss" scoped>
.footer-widgets {
	display: flex;
	flex-wrap: wrap;
	gap: 25px;
	padding-bottom: 60px;
	@media (max-width: 768px) {
		gap: 20px;
	}
	@media (max-width: 479px) {
		gap: 0;
	}
}
.footer-col--50 {
	width: calc(50% - 25px);
	@media (max-width: 768px) {
		width: calc(100% - 20px);
	}
	@media (max-width: 479px) {
		width: 100%;
	}
}
.footer-col--25 {
	width: calc(25% - 25px);
	@media (max-width: 768px) {
		width: calc(50% - 20px);
	}
	@media (max-width: 479px) {
		width: 100%;
	}
}
</style>
