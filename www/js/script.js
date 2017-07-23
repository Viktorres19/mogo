/* BX SLIDER */
	$(document).ready(function(){
	  $('.bxslider').bxSlider({
			pager: false
	  });
	});
 /* UNSLIDER */
 	jQuery(document).ready(function($) {
		$('.my-slider').unslider({
			autoplay:false,
			arrows:true,
			animation:'vertical',
			nav:false
		});
	});
 /*DROPDOWN_MENU*/	
function toggle(el) {
el.style.display = (el.style.display == 'block') ? '' : 'block';
}