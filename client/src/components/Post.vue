<template>
 <div class="container">
   <h1>Ultimos posts</h1>
  <div class="create-post">
    <label for="criar-posts">Diga algo...</label>
    <input type="text" id="create-post" v-model="texto" placeholder="Criar um post">
    <button v-on:click="createpost" >"Postar!"</button>
  </div>
  <hr>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="posts-container">
      
      <div class="post"
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
    v-on:dblclick="deletar(post._id)"
    >
    {{`${post.data.getDate()}/${post.data.getMonth()}/${post.data.getFullYear()}`}}
  <p class="text">{{ post.texto }}</p>
    </div>
  </div>
   </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'PostsComp',
  data(){
    return {
      posts: [],
      error: '',
      texto: ''
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createpost(){
      await PostService.inserir(this.texto)
      this.posts = await PostService.getPosts()
    },
      async deletar(id){
      await PostService.deletar(id)
      this.posts = await PostService.getPosts()
    }

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
