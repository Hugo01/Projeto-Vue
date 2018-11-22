<template>
  <div id="teste">
    <img alt="Vue logo" src="./assets/logo.png">
    <Post />
  </div>
</template>

<script>
import post from './components/Post2.vue'

export default {
  name: 'teste',
  components: {
    post
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: bottom;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
