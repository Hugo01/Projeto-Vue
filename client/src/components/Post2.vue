<template>
 <div class="container">
   <h1>{{ titulo }}</h1>
   <div class="create-post">
    <label for="criar-posts">Diga algo...  </label>
    <input type="text" id="createtexto" :value="text_post" @change="createText($event.target.value)" placeholder="Criar um post">
    <input type="text" id="create-com"  placeholder="Criar um comentario">
    <button v-on:click="createposts()" >"Postar!"</button>
  </div>
  <hr>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="posts-container">
      <div class="div">
        {{posts.length}}
        {{text_post}}
     
      </div>

      <div class="post"
    v-for="(post, index) in posts"
    v-bind:comment="comentario"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    v-on:dblclick="deletar(post._id)"
    >
    
    {{`Data : ${post.data.getDate()}/${post.data.getMonth()}/${post.data.getFullYear()}`}}
    
  <p class="text">{{`Texto : ${post.texto}`}}</p>
  <p class="text">{{`Comentario: ${post.com}`}}</p>
    </div>
  </div>
   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostService from '../PostService';
export default {
  name: 'PostsComp',

  computed: {
  ...mapState({
   titulo: 'title',
   posts: 'POSTS',
   text_post: 'texto',
   coment_post: 'comentario'
  })
},
  
  methods: {
   
    ...mapActions({
      getposts: 'getposts',
      createposts: 'createposts',
      createText: 'createTEXT',
       
       
    }),

   
      async deletar(id){
        await PostService.getPosts()
        await PostService.deletar(id)
      
    },

    
  },
    async created(){
        this.getposts()
     }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container{
  max-width: 800px;
  margin: 0 auto;
}
p.error{
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post{
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
position: absolute;
top: 0;
left: 0;
padding: 5px 15px 5px 15px;
background-color: darkgreen;
color: white;
font-size: 13px;
}

p.texto{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
