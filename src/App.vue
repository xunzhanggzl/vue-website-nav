<template>
  <div id="app">
    <div class="sidebar-wrapper">
      <side-bar></side-bar>
    </div>
    <div class="content-wrapper">
      <website-list></website-list>
    </div>
  </div>
</template>

<script>
  import WebsiteList from './components/WebsiteList.vue'
  import SideBar from './components/SideBar.vue'

  export default {
    name: 'App',
    components: {
      WebsiteList,
      SideBar
    }
  }
</script>

<style lang="stylus">
  @import './common/styles/flexbox'
  .sidebar-wrapper
    background rgb(44, 46, 47)
    color #cccccc
</style>
