import Vue from 'vue'
import Router from 'vue-router'
import Post from './components/Post.vue'
import Canvas from './components/Canvas.vue'
import ListView from  './components/listview.vue'


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
      component: Canvas
    },
    {
      path: '/list',
      name: 'list',
      component: ListView,
    
    },
  ]
})

