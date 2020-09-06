<template>
  <div class="register">
    <card>
      <template v-slot:card-title>
        Register
      </template>
      <template v-slot:card-content>
        <errors v-if="!formIsValid" :errors="errors" />
        <form @submit="onFormSubmit">
          <label>Email address</label>
          <input type="email" @keyup="updateEmail" />
          <label>Display Name</label>
          <input type="text" @keyup="updateDisplayName" />
          <label>Password</label>
          <input type="password" @keyup="updatePassword" />
          <label>Repeat Password</label>
          <input type="password" @keyup="updateRepeatPassword" />
          <button type="submit">Create Account</button>
        </form>
      </template>
    </card>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { loading, initialising } from '@/services/game'
import { auth, usersCollection } from '@/services/firebase'
import { getValueFromInputEvent } from '@/services/helpers/forms'

import Card from '../common/Card.vue'
import Errors from './Errors.vue'

export default {
  components: {
    Card,
    Errors
  },
  setup() {
    const email = ref('')
    const displayName = ref('')
    const password = ref('')
    const repeatPassword = ref('')
    const errors = ref<string[]>([])

    function updateEmail(event: Event) {
      email.value = getValueFromInputEvent(event)
    }

    function updateDisplayName(event: Event) {
      displayName.value = getValueFromInputEvent(event)
    }

    function updatePassword(event: Event) {
      password.value = getValueFromInputEvent(event)
    }

    function updateRepeatPassword(event: Event) {
      repeatPassword.value = getValueFromInputEvent(event)
    }

    const formIsValid = computed(() => {
      return errors.value.length === 0
    })

    const validateForm = function() {
      errors.value = []
      if (!email.value) {
        errors.value.push('You must enter an email address.')
      }
      if (!displayName.value) {
        errors.value.push('You must enter a display name.')
      }
      if (!password.value) {
        errors.value.push('You must enter a password.')
      }
      if (password.value !== repeatPassword.value) {
        errors.value.push('Password and Repeat Password do not match.')
      }
    }

    function resetForm() {
      email.value = ''
      displayName.value = ''
      password.value = ''
      repeatPassword.value = ''
    }

    async function onFormSubmit(event: Event) {
      event.preventDefault()
      validateForm()

      if (!formIsValid.value) return

      loading.value = true

      let user: firebase.User | null = null

      // Create the account
      try {
        const result = await auth.createUserWithEmailAndPassword(
          email.value,
          password.value
        )
        user = result.user
      } catch (error) {
        errors.value.push(error.message)
      }

      if (!user) {
        loading.value = false
        return
      }

      // Set their display name
      await usersCollection.doc(user.uid).set({
        displayName: displayName.value
      })

      resetForm()
    }

    return {
      updateEmail,
      updateDisplayName,
      updatePassword,
      updateRepeatPassword,
      onFormSubmit,
      formIsValid,
      errors
    }
  }
}
</script>

<style scoped lang="scss">
.register {
  width: 500px;
}
</style>
