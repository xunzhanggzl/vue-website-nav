import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import BackToTop from 'vue-backtotop'

import './common/styles/style.styl'
import './common/js/iconfont/iconfont'

Vue.use(VueScrollTo)
Vue.use(BackToTop)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
