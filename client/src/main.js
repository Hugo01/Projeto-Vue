import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
Vue.config.productionTip = false


/*
new Vue({
  render: h => h(App,App2)
  
}).$mount('#app', '#app2')
*/

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
})


  
