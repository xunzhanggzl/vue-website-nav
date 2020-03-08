<template>
  <div class="sidebar">
    <div class="sidebar-control" @click="toggle">
      <div class="sidebar-img">
        <img src="../common/img/vue.svg">
      </div>
      <div class="code">Code By gzl</div>
      <div class="menu">
        <svg class="icon add" aria-hidden="true">
          <use xlink:href='#icon-test12'></use>
        </svg>
      </div>
    </div>
    <transition name="fade">
      <div v-show="toggleShow" class="sidebar-item-wrapper">
        <div class="sidebar-item" v-for="(category, index) in categories" :key="category.id" v-scroll-to='`#${category.id}`'>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href='`#icon-test${index+1}`'></use>
          </svg>
          <span class="sidebar-item-name">{{category.title}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { categories } from '../common/js/data'

  export default {
    name: 'sidebar',
    data() {
      return {
        toggleShow: false,
        categories
      }
    },
    methods: {
      toggle() {
        this.toggleShow = !this.toggleShow
      }
    },
    created() {
      const wid = document.body.clientWidth
      this.toggleShow = wid >= 1024
    }
  }
</script>

<style lang="stylus" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .sidebar
    padding 1rem 2.5rem
    .sidebar-control
      display flex
      justify-content space-between
      align-items center
      .sidebar-img
        width 3rem
        height 3rem
        img
          width 100%
          height 100%
          border-radius 50%
      .code
        font-size 1.1rem
      .menu
        width 2rem
        height 2rem
        .add
          width 100%
          height 100%
    .sidebar-item-wrapper
      margin-top 1rem
      .sidebar-item
        margin .5rem 0
        padding-bottom .5rem
        border-bottom 1px solid #313437
        &:last
          margin-bottom 0
        .sidebar-item-name
          padding-left .5rem

  @media only screen and (min-width: 64rem)
    .sidebar
      padding .5rem
      margin-top 1.5rem
      .sidebar-item-wrapper
        .sidebar-item
          text-align center
          margin 1rem 0
</style>
