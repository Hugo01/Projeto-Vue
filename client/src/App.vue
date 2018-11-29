<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/canvas">Canvas</router-link>
       
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
   
  },

  data () {
    return {
      chartValues: [
        {val: 24, color: 'red'},
        {val: 32, color: '#0f0'},
        {val: 66, color: 'rebeccapurple'},
        {val: 1, color: 'green'},
        {val: 28, color: 'blue'},
        {val: 60, color: 'rgba(150, 100, 0, 0.2)'},
      ]
    }
  },

  // Randomly selects a value to randomly increment or decrement every 16 ms.
  // Not really important, just demonstrates that reactivity still works.
  mounted () {
    let dir = 1;
    let selectedVal = Math.floor(Math.random() * this.chartValues.length);

    setInterval(() => {
      if (Math.random() > 0.995) dir *= -1;
      if (Math.random() > 0.99) selectedVal = Math.floor(Math.random() * this.chartValues.length);

      this.chartValues[selectedVal].val = Math.min(Math.max(this.chartValues[selectedVal].val + dir * 0.5, 0), 100);
    }, 16);
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
