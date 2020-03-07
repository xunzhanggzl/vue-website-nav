<template>
  <div class="categories-wrapper">
    <div v-for="(category, index) in categories" :key="category.id" class="category-wrapper" :id="category.id">
      <div class="title">
        <!-- <span class="iconfont icon-test4"></span> -->
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='`#icon-test${index+1}`'></use>
        </svg>
        {{category.title}}
      </div>
      <div class="website-wrapper row">
        <div class="website col-xs-12 col-sm-6 col-md-3" v-for="website in category.websites" :key="website.name">
          <div class="every" @click="openUrl(website.url)">
            <div class="img-wrapper">
              <img :src="website.imageSvg">
            </div>
            <div class="info-wrapper">
              <div class="name">{{website.name}}</div>
              <div class="describe">{{website.describe}}</div>
            </div>
            <div class="hint-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { categories } from '../common/js/data'

  export default {
    name: 'website',
    data () {
      return {
        categories
      }
    },
    methods: {
      openUrl(url) {
        window.open(url)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .categories-wrapper
    padding 1.5rem
    .category-wrapper
      .title
        padding-top 1rem
        padding-left 1.25rem
      .website-wrapper
        .website
          .every
            display flex
            border 1px solid #e4ecf3
            padding 1rem
            background #fff
            border-radius .25rem
            cursor pointer
            &:hover
              box-shadow 0 10px 10px 0 rgba(168, 182, 191, 0.6)
              transform translateY(-1px)
              transition all 0.3s ease-out
            .img-wrapper
              flex 0 0 2.5rem
              width 2.5rem
              height 2.5rem
              margin-right .5rem
              img
                width 100%
                height 100%
                border-radius 50%
            .info-wrapper
              font-size .9rem
              overflow hidden
              .name
                font-weight bolder
                margin-bottom .3rem
              .describe
                font-size .8rem
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
</style>
