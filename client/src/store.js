import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Mini Projeto VueJS', 
    POSTS: [],
    texto: '',
    com: '',
    data: new Date()

  },

  mutations: {
    GET_POST: (state, posts) => {
      
      state.POSTS = posts
      //console.log(state)
    
    },
    
    GET_DATA:(state,posts) => {
      state.data = [posts.data]
    },
    ADD_TEXTO: (state,texto) => {
      state.texto = texto
      
      //console.log(state)
    },
    ADD_COMENTARIO:(state,comentario) => {
      state.com = comentario;
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
      },

      getdata: async ({commit}) => {
        try{
          const posts = await PostService.getPosts();
          commit('GET_DATA', posts)
        }catch(err){
          error = err.message;
        }
      },

      createposts: async({state, dispatch}) => {
      await PostService.inserir(state.texto,state.com)
      dispatch('getposts')
       },
 
       createTEXT: function f_create ({commit}, texto) {
          commit('ADD_TEXTO', texto)
        },

      createComment : function createComment({commit}, comentario){
        commit('ADD_COMENTARIO', comentario)
      },

      remove: async (id) => {
         await PostService.deletar(id)
         await PostService.getPosts()
      
      }
     
  }
    
})
