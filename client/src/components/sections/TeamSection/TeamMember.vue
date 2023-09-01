<template>
	<div class="team-member">
	  <div class="player-cover">
		  <div class="descr">
			  <nav class="player-social">
				  <ul>
					  <li class="facebook"><a :href="member.socials.facebook"></a></li>
					  <li class="twitter"><a :href="member.socials.twitter"></a></li>
					  <li class="pinterest"><a :href="member.socials.pinterest"></a></li>
					  <li class="instagram"><a :href="member.socials.instagram"></a></li>
				  </ul>
			  </nav>
		  </div>
	    <picture>
			    <source type="image/webp" :srcset="member.img" width="100%" height="100%">
			    <source type="image/jpeg" :srcset="member.img" width="100%" height="100%">
			    <img :src="member.img" :alt="member.name" width="100%" height="100%">
	    </picture>
	  </div>
	  <div class="player-inf">
		  <h4>{{ member.name }}</h4>
		  <h5>{{ member.position }}</h5>
	  </div>
	</div>
</template>
<script setup>
import {defineProps, toRefs} from 'vue'

const props = defineProps({
	member: {}
})
let { member } = toRefs(props)
</script>
<style lang="scss" scoped>
@import '@/assets/mixins.scss';
.team-member {
	width: 33.33%;
	min-width: 250px;
	box-sizing: border-box;
	.player-cover {
		max-width: 379px;
		position: relative;
		overflow: hidden;
		transition: box-shadow .1s ease;
		.descr {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(243,129,129,0.9), rgba(252,227,138,0.9));
			color: var(--color-white);
			text-align: center;
			z-index: 2;
			transform: translateX(-10000px);
			transition: transform .1s ease;
			display: flex;
			justify-content: center;
			align-items: center;
			ul {
				@include reset-list;
				display: flex;
				justify-content: center;
				align-items: center;
				li {
					border-left: 1px solid #f9bd87;
					a {
						display: block;
						height: 55px;
						width: 55px;
						box-sizing: border-box;
						background-position: center center;
						background-repeat: no-repeat;
						background-size: 100% 100%;
					}
					&.facebook {
						a {
							background-image: url('@/assets/img/team_icon_fb.jpg');
							&:hover {
								background-image: url('@/assets/img/team_icon_fb_hov.jpg');
							}
						}
					}
					&.twitter {
						a {
							background-image: url('@/assets/img/team_icon_tweeter.jpg');
							&:hover {
								background-image: url('@/assets/img/team_icon_tweeter_hov.jpg');
							}
						}
					}
					&.pinterest {
						a {
							background-image: url('@/assets/img/team_icon_ro.jpg');
							&:hover {
								background-image: url('@/assets/img/team_icon_ro_hov.jpg');
							}
						}
					}
					&.instagram {
						a {
							background-image: url('@/assets/img/team_icon_ins.jpg');
							&:hover {
								background-image: url('@/assets/img/team_icon_ins_hov.jpg');
							}
						}
					}
				}
			}
		}
		&:hover {
			box-shadow: 10px 10px 0px #95e1d3;
			.descr {
				transform: translateX(0);
			}
		}
		picture {
			display: block;
			width: 100%;
			height: 0;
			padding-bottom: 123.68%;
			position: relative;
			overflow: hidden;
			source, img {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	.player-inf {
		margin-top: 40px;
		text-align: center;
		h4 {
			font-size: 14px;
			font-family: 'Montserrat', sans-serif;
			color: var(--color-dark);
			padding-bottom: 10px;
			text-transform: uppercase;
			@media (max-width: 1200px) {
				@include adaptive-font(14, 12);
			}
		}
		h5 {
			font-size: 15px;
			font-family: 'Roboto', sans-serif;
			font-style: italic;
			color: var(--color-indigo);
		}
	}
}
</style>
