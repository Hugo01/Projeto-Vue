import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Mini Projeto VueJS', 
    dados: PostService.getPosts()

  },

  mutations: {
   

  },
  actions: {
   
  }
})
