import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

import './common/styles/style.styl'
import './common/js/iconfont/iconfont'

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
