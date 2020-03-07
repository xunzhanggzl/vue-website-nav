<template>
  <div id="app">
    <div class="sidebar-wrapper">
      <side-bar></side-bar>
    </div>
    <div class="content-wrapper">
      <website-list></website-list>
    </div>
    <back-to-top bottom="50px" right="10px" visibleoffset="500">
      <div class="top-wrapper">
        <svg class="icon" aria-hidden="true">
          <use xlink:href='#icon-test'></use>
        </svg>
      </div>
    </back-to-top>
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
  .top-wrapper
    width 30px
    height 30px
    svg
      width 100%
      height 100%
</style>
