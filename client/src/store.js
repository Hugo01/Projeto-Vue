import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Mini Projeto VueJS', 
    POSTS: []
    

  },

  mutations: {
    GET_POST: (state, posts) => {
      state.POSTS.push(...posts)
      console.log(state)
    },

  },
  actions: {
    getposts: async ({commit}) => {
        try{
          const posts = await PostService.getPosts();
          commit('GET_POST', posts)
        }catch(err){
          error = err.message;
        }
      
 
    }
  }
    
})
