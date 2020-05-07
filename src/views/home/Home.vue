<template>
  <div id="home">
    <nar-bar class="home-nav">
      <div slot="center">购物街</div>
    </nar-bar>
    <better-scroll class="content" 
                   ref="scroll" 
                   :probeType="3" 
                   @scroll="contentScroll" 
                   :pullup="true"
                   @pullingUp="loadMore">
      <home-swiper :banner="banner" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[checkType].list" />
    </better-scroll>
    <back-top @click.native="backClick" v-show="isShow_BackTop" />
  </div>
</template>

<script>
import { Debounce } from "@/common/common";

import NarBar from "@/components/common/navbar/NavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/good/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import BetterScroll from "@/components/common/betterScroll/BetterScroll";

import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      types: ["pop", "new", "sell"],
      checkType: "pop",
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      isShow_BackTop: false
    }
  },
  components: {
    NarBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
    BetterScroll
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeGoods("pop"),
    this.getHomeGoods("new"),
    this.getHomeGoods("sell")
  },
  mounted() {
    //图片加载完成的监听
    let fn = this.debounce(this.$refs.scroll.scrollRefresh, 1000) 
    this.$bus.$on('goodsItemLoad', () => {
      fn()
    })
  },
  methods: {
    debounce(fn, delay) {
      let timer;
      return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        }, delay)
      }
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //console.log(this.goods[type].page)
        setTimeout(() => {
          this.$nextTick(this.$refs.scroll.finishPullUp())
        }, 1500);
      });
    },
    tabClick(index) {
      this.checkType = this.types[index]
    },
    // 返回顶部的方法
    backClick() {
      this.$refs.scroll.backTop(0, 0, 500)
    },
    // 回调:滚动位置
    contentScroll(pos) {
      this.isShow_BackTop = -(pos.y) > 500
    },
    // 回调:加载更多商品
    loadMore() {
      console.log('回调:加载更多商品')
      this.getHomeGoods(this.checkType)
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
}

.home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tabControl {
  position: sticky;
  top: 40px;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
