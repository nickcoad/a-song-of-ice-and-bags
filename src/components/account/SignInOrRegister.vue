<template>
  <div class="sign-in-or-register">
    <h1 class="game-title">A Game of Ice and Bags</h1>
    <div>
      <div class="tabs">
        <div :class="tabClasses.signIn" @click="signInMode">Sign In</div>
        <div :class="tabClasses.register" @click="registerMode">
          Register
        </div>
      </div>
      <sign-in v-show="signInOrRegister === 'sign-in'" />
      <register v-show="signInOrRegister === 'register'" />
    </div>
  </div>
</template>

<script lang="ts">
import SignIn from './SignIn.vue'
import Register from './Register.vue'

import { Ref, ref, computed } from 'vue'

export default {
  components: {
    SignIn,
    Register
  },
  setup() {
    type SignInOrRegister = 'sign-in' | 'register'
    const signInOrRegister: Ref<SignInOrRegister> = ref('sign-in')

    function signInMode() {
      signInOrRegister.value = 'sign-in'
    }
    function registerMode() {
      signInOrRegister.value = 'register'
    }

    const tabClasses = computed(() => {
      return {
        signIn: 'tab ' + (signInOrRegister.value == 'sign-in' ? 'active' : ''),
        register:
          'tab ' + (signInOrRegister.value == 'register' ? 'active' : '')
      }
    })

    return { signInOrRegister, signInMode, registerMode, tabClasses }
  }
}
</script>

<style scoped lang="scss">
.sign-in-or-register {
  display: grid;
  justify-items: center;
  grid-template-rows: 15% auto;
  height: 100%;
  padding: 50px;
  width: 100%;
}

.game-title {
  color: #fff;
}

.tabs {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 1rem;

  .tab {
    background-color: #28313f;
    color: #fff;
    cursor: pointer;
    padding: 1rem;
    text-align: center;

    &.active {
      background-color: #42b983;
    }
  }
}
</style>
