import Vue from 'vue'
import Router from 'vue-router'
import Post from './components/Post2.vue'
import Canvas from './components/Canvas.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Post,
    
    },
    {
      path: '/canvas',
      name: 'canvas',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Canvas
    }
  ]
})

