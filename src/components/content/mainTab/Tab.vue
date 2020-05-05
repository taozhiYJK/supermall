<template>
	<div>
		<tabbar>
      <tabbaritem path="/home" activeColor="blue">
        <img slot="item_icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="item_icon_active" src="@/assets/img/tabbar/home_active.png" alt="">
        <div slot="item_text">首页</div>
      </tabbaritem>
      <tabbaritem path="/category">
        <img slot="item_icon" src="@/assets/img/tabbar/category.png" alt="">
        <img slot="item_icon_active" src="@/assets/img/tabbar/category_active.png" alt="">
        <div slot="item_text">分类</div>
      </tabbaritem>
      <tabbaritem path="/shoppingCart">
        <img slot="item_icon" src="@/assets/img/tabbar/shoppingcart.png" alt="">
        <img slot="item_icon_active" src="@/assets/img/tabbar/shoppingcart_active.png" alt="">
        <div slot="item_text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile">
        <img slot="item_icon" src="@/assets/img/tabbar/profile.png" alt="">
        <img slot="item_icon_active" src="@/assets/img/tabbar/profile_active.png" alt="">
        <div slot="item_text">我的</div>
      </tabbaritem>
    </tabbar>
	</div>
</template>

<script>
import tabbar from '@/components/common/tabbar/TabBar'
import tabbaritem from '@/components/common/tabbar/TabBarItem'

export default {
	name: 'Tab',
	components: {
		tabbar,
		tabbaritem
	}
}
</script>

<style>


</style>
