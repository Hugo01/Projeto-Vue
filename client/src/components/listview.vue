<template>
 <div class="container">
   <h1>{{ titulo }}</h1>
   
    <div class="create-post">
   <div class="div"></div>
   

     
  
  </div>
  <hr>
  <p class="error" v-if="error">{{ error }}</p>
  
      <div class="div">
     </div>     

    <div class ="list"
     v-for="(post, index) in posts"
    v-bind:comment="comentario"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    >
    </div>

    <v-select label="texto" :options="posts"></v-select>
        
        <button @click="remove()" >Remover!</button>
    </div>
    

    

</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostService from '../PostService';
import dropdown from 'vue-dropdowns';


export default {
  name: 'ListView',


  computed: {
  ...mapState({
   titulo: 'listitle',
   posts: 'POSTS',
   text_post: 'texto',
   coment_post: 'com',
   data_atual : 'data',
   
   
  })
},
  methods: {
   
    ...mapActions({
      getposts: 'getposts',
      createposts: 'createposts',
      createText: 'createTEXT',
      createComment: 'createComment',
      getdata : 'getdata',
      remove: 'remove'
      }),


      async del(id){
        
        await PostService.deletar(id)
      
    },

    
  },
    async created(){
        this.getposts()
     },
     getID(post){
         PostService.getPosts

     }

  
}
</script>

<!-- CSS  -->
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
  border: 1px solid #d2d435;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
position: absolute;
top: 0;
left: 0;
padding: 5px 15px 5px 15px;
background-color: rgb(124, 196, 10);
color: white;
font-size: 13px;
}

p.texto{
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
