<template>
	<div class="tabControl">
		<div v-for="(title, index, key) in titles" :key="key"
			class="tabControl-item"
			:class="{active: index === currentIndex}"
			@click="itemClick(index)">
			<span>{{title}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabControl',
	props: {
		titles: {
			type: Array,
			default(){
				return []
			}
		}
	},
	data () {
		return {
			currentIndex: 0
		}
	},
	methods: {
		itemClick(index){
			if(this.currentIndex === index) {
				return
			}
			this.currentIndex = index
			this.$emit('tabClick', index)
		}
	},

}
</script>

<style>
.tabControl {
	display: flex;
	text-align: center;
	height: 40px;
	background-color: var(--color-background);
}

.tabControl-item {
	flex: 1;
	margin-top: 10px;
}

.tabControl-item span{
	padding: 5px;
}

.active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
