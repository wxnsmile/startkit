import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}

// 将api挂载到vue的原型上
Vue.prototype.$api = api

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
