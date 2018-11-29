import Vue from 'vue'
import router from './router'
import App from './App'
Vue.config.productionTip = false


/*
new Vue({
  render: h => h(App,App2)
  
}).$mount('#app', '#app2')
*/
//TESTE
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})


  
