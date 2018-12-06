import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'

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
    ADD_POST: (state,{texto,comentario}) => {

      state.POSTS = [...state.POSTS,{texto,comentario}]
      //console.log(state)
    },

    ADD_TEXTO: (state,texto) => {
      state.texto = texto
      
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
      await PostService.inserir(state.texto, state.comentario)
      commit('ADD_POST', {
        texto: state.texto,
        comentario: state.comentario})
      
  
      },

      createTEXT: function createText ({commit,state}, texto) {
          commit('ADD_TEXTO', texto)
        
    
        }
  }
    
})
