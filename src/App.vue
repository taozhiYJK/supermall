<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <tab/>
  </div>
</template>

<script>
import Tab from '@/components/content/mainTab/Tab'

export default {
  name: 'App',
  components: {
    Tab
  }

}
</script>

<style>
@import "./assets/css/base.css";
</style>
