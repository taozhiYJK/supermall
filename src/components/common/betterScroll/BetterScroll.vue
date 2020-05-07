<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BetterScroll",
  props: {
    // 0, 1 滚动的时候会派发scroll事件，会截流。2 滚动的时候实时派发scroll事件，不会截流。3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
    probeType: {
      type: Number,
      default: 0
    },
    // 是否派发滚动到底部的事件，用于上拉加载
    pullup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      BScroll: null
    };
  },
  // 模板加载完成调用方法
  mounted() {
    // 1.创建BScroll对象
    this.BScroll = new BScroll(this.$refs.wrapper, {
      click: true, //是否允许插槽的click事件
      probeType: this.probeType,
      pullup: this.pullup
    })
    // 监听滚动位置并返回坐标()
    this.BScroll.on("scroll", pos => {
      this.$emit("scroll", pos);
    })
    this.BScroll.on('pullingUp', () => { // 滚动到底部
      this.$emit('pullingUp')
    })
  },
  methods: {
    backTop(x = 0, y = 0, time = 500) {
      this.BScroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      console.log('下拉加载完成');
      this.BScroll.finishPullUp()
    },
    scrollRefresh() {
      console.log('重新计算 better-scroll');
      this.BScroll.refresh()
    }
  }
};
</script scoped>

<style>
</style>
