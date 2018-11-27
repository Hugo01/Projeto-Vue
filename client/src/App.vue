<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Post />
  </div>
</template>

<script>
import Post from './components/Post2.vue'

export default {
  name: 'app',
  components: {
  Post
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e30;
  margin-top: 60px;
}
</style>
