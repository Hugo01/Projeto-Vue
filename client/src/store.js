import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'
import VuePost from './components/Post2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Mini Projeto VueJS', 
    POSTS: [],
    texto: '',
    comentario: ''

  },

  mutations: {
    GET_POST: (state, posts) => {
      state.POSTS.push(...posts)
      //console.log(state)
    },
    ADD_POST: (state) => {
      state.POSTS.push(state.texto)
      //console.log(state)
    },

    ADD_TEXTO: (state) => {

        state.POSTS.push(state.texto)
      //console.log(state)
    }

  },
  actions: {
    getposts: async ({commit, state}) => {
        try{
          const posts = await PostService.getPosts();
          commit('GET_POST', posts)
        }catch(err){
          error = err.message;
        }
      },

      createposts: async({commit, state }) => {

      await PostService.getPosts()
      const inserir = await PostService.inserir(state.texto, state.comentario)
      commit('ADD_POST', inserir)
      
  
      },

      createText: ({commit,state}, texto) => {
        
        texto = 'a'

        const change = state.texto = texto
          commit('ADD_TEXTO', texto)
        
    
        }
  }
    
})
