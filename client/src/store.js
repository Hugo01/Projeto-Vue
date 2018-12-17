import Vue from 'vue'
import Vuex from 'vuex'
import PostService from './PostService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Mini Projeto VueJS', 
    listitle: 'ListView',
    POSTS: [],
    texto: '',
    com: '',
    data: new Date(),
    selected_text: '',
    selected_comment: '',
    selected_ID: ''

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
      state.com = comentario
    },
    
    UPDATESELECTED:(state, selecionado) => {
      state.selected_text = selecionado
    },

    UPDATECOMMENT: (state,comentario) => {
      state.selected_comment= comentario
    },

    UPDATEID: (state,id) => {
      state.selected_ID = id
    },
    
    DELETE_POST: async (id) => {
      await PostService.deletar(id)
    }
   
 },
  actions: {

    updateSelected_Text: ({commit}, selecionado) => {
        commit('UPDATESELECTED', selecionado)
    },

    updateSelected_com: ({commit}, comentario) => {
      commit('UPDATECOMMENT', comentario)
  },

  
    updateSelected_id: ({commit}, id) =>{
      commit('UPDATEID', id)
    },

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

      remove: async ({dispatch}, id) => {
         await PostService.deletar(id)
         dispatch('getposts')
       }
     
  }
    
})
