import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


import day from 'dayjs'
Vue.prototype.$day=day

import * as filters from './filters'
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key])
})

Vue.config.productionTip=false

new Vue({
  render:h=>h(App),
  router,
  store
}).$mount('#app')
