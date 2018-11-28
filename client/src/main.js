import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import router from 'vue-router'

Vue.config.productionTip = false

const NotFound = { 
  template: '<p>Página não encontrada</p>'
 }
const Home = {
   template: '<p>Página Inicial</p>',
   render: h => h(App2)
   }
const About = { 
  template: '<p>Sobre</p>'
 }

const routes = {
  '/': Home,
  '/sobre': About
}
/*
new Vue({
  render: h => h(App,App2),
  
}).$mount('#app', '#app2')
*/

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { 
    return h(this.ViewComponent)
   }
})