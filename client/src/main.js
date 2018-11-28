import Vue from 'vue'
import router from './router'
import App from './App'
import App2 from './App2'
Vue.config.productionTip = false


/*
new Vue({
  render: h => h(App,App2)
  
}).$mount('#app', '#app2')
*/

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


  
