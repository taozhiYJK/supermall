<template>
	<div class="goods">
		<div v-for="(item, key) in goods" :key="key" class="goods-item">
			<!-- <a :href="item.link"> -->
				<img :src="item.show.img" alt="" @load="imgLoad">
				<p>{{item.title}}</p>
				<span>{{item.price}}</span>
				<span>{{item.cfav}}</span>
			<!-- </a> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'GoodsList',
	props: {
		goods: {
			type: Array,
			default(){
				return []
			}
		}
	},
	methods: {
		// 利用事件总线监听每张图片加载的监听,并发送出去
		imgLoad() {
			//console.log("imgLoad")
			this.$bus.$emit('goodsItemLoad')
		}
	}
}
</script>

<style>
.goods {
	display: flex;
	flex-wrap: wrap;
}

.goods-item {
	padding: 20px;
	width: 50%;
	text-align: center;
}

.goods-item img {
	width: 100%;
	padding: -10px;
}



</style>
