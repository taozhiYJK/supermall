<template>
	<div id="home">
		<nar-bar class="homo-nav"><div slot="center">购物街</div></nar-bar>
		<home-swiper :banner="banner" />
	</div>
</template>

<script>
import NarBar from '@/components/common/navbar/NavBar'
import { getHomeMultidata } from '@/network/home'
import HomeSwiper from './childComps/HomeSwiper'

export default {
	name: 'Home',
	data() {
		return {
			banner: [],
			dKeyword: [],
			Keywords: [],
			recommend: []
		}
	},
	components: {
		NarBar,
		HomeSwiper
	},
	created() {
		getHomeMultidata().then(
			res => {
				// console.log(res.data)
				this.banner = res.data.banner.list
				this.dKeyword = res.data.dKeyword.list
				this.Keywords = res.data.keywords.list
				this.recommend = res.data.recommend.list
			}
		)
	},
}
</script>

<style>
.homo-nav {
	background-color: var(--color-tint);
	color: white;
}

</style>
