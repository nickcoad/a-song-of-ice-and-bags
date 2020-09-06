<template>
  <div class="sign-in">
    <card>
      <template v-slot:card-title>
        Sign in
      </template>
      <template v-slot:card-content>
        <errors v-if="!formIsValid" :errors="errors" />
        <form @submit="onFormSubmit">
          <label>Email address</label>
          <input type="email" @keyup="updateEmail" />
          <label>Password</label>
          <input type="password" @keyup="updatePassword" />
          <button type="submit">Sign In</button>
        </form>
      </template>
    </card>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { auth } from '@/services/firebase'
import { getValueFromInputEvent } from '@/services/helpers/forms'
import { fetchUserProfile } from '@/services/user'
import { loading } from '@/services/game'

import Card from '../common/Card.vue'
import Errors from './Errors.vue'

export default {
  components: {
    Card,
    Errors
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const errors = ref<string[]>([])

    function updateEmail(event: Event) {
      email.value = getValueFromInputEvent(event)
    }

    function updatePassword(event: Event) {
      password.value = getValueFromInputEvent(event)
    }

    const validateForm = function() {
      errors.value = []
      if (!email.value) {
        errors.value.push('You must enter an email address.')
      }
      if (!password.value) {
        errors.value.push('You must enter a password.')
      }
    }

    const formIsValid = computed(() => {
      return errors.value.length === 0
    })

    function resetForm() {
      email.value = ''
      password.value = ''
    }

    async function onFormSubmit(event: Event) {
      event.preventDefault()
      validateForm()

      if (!formIsValid.value) return

      loading.value = true

      // Create the account
      const { user } = await auth.signInWithEmailAndPassword(
        email.value,
        password.value
      )

      if (!user) {
        loading.value = false
        return
      }

      await fetchUserProfile()

      resetForm()
    }

    return {
      updateEmail,
      updatePassword,
      onFormSubmit,
      errors,
      formIsValid
    }
  }
}
</script>

<style scoped lang="scss">
.sign-in {
  width: 500px;
}
</style>
