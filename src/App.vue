<template>
  <div id="app">
    <screen msg="A Song of Ice and Bags" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Screen from './components/Screen.vue'

export default defineComponent({
  name: 'App',
  components: {
    Screen
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Ubuntu Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  height: 100vh;
  width: 100vw;
}

* {
  font-family: 'Ubuntu Mono', Helvetica, Arial, sans-serif;
}

ul {
  padding-left: 1rem;
}
</style>
