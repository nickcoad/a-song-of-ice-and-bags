<template>
  <div id="app">
    <div class="display">
      <loading v-if="loading" />
      <sign-in-or-register v-if="!isSignedIn" />
      <screen v-else msg="A Song of Ice and Bags" />
    </div>
    <debug />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isSignedIn } from './services/user'
import { loading } from './services/game'

import Screen from './components/Screen.vue'
import Debug from './components/Debug.vue'
import SignInOrRegister from './components/account/SignInOrRegister.vue'
import Loading from './components/common/Loading.vue'

export default defineComponent({
  name: 'App',
  components: {
    Screen,
    Debug,
    SignInOrRegister,
    Loading
  },
  setup() {
    return { isSignedIn, loading }
  }
})
</script>

<style lang="scss">
$accent-color: #42b983;

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

$scrollbarBG: #cfd8dc;
$thumbBG: #90a4ae;

body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: $thumbBG $scrollbarBG;
}
body::-webkit-scrollbar-track {
  background: $scrollbarBG;
}
body::-webkit-scrollbar-thumb {
  background-color: $thumbBG;
  border-radius: 6px;
  border: 3px solid $scrollbarBG;
}

#app {
  background-color: #212730;
  font-family: 'Ubuntu Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;

  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 80% 20%;
}

.display {
  height: 100%;
  position: relative;
}

* {
  font-family: 'Ubuntu Mono', Helvetica, Arial, sans-serif;
}

ul {
  padding-left: 1rem;
}

.clickable {
  color: #6286c0;
  cursor: pointer;
  text-decoration: underline;
}

label {
  display: block;
  margin: 1rem 0 0.5rem 0;
}

input {
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  background-color: #1c2129;
  border: none;
  color: #eee;
  padding: 0.5rem;
}

button {
  background-color: $accent-color;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 1rem 0 0.5rem 0;
  outline: none;
  text-shadow: 1px 1px 1px #000;

  &:hover {
    background-color: lighten($accent-color, 5%);
  }

  &:active {
    background-color: darken($accent-color, 10%);
  }
}
</style>
