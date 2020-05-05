<template>
	<div class="tab_bar_item" @click="itemClick">
		<div v-if="!isActive"><slot name="item_icon"></slot></div>
		<div v-else><slot name="item_icon_active"></slot></div>
		<div :style="activeStyle"><slot name="item_text"></slot></div>
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props: {
		path: String,
		activeColor: {
			Type: String,
			default: "red"
		}
	},
	data() {
    return {
    }
	},
	computed: {
		isActive() {
			return this.$route.path == this.path
		},
		activeStyle(){
			return this.isActive ? {color: this.activeColor} : {}
		}
	},
	methods: {
		itemClick() {
			if(this.$route.path == this.path) {
				return
			}
			this.$router.push(this.path)
		}
	}
}
</script>

<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab_bar_item img {
  width: 25px;
  height: 25px;
}
.active {
	color: red;
}
</style>
