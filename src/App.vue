<template>
  <div id="app">
    <router-view/>
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

</style>
