<template>
  <div class="register">
    <card>
      <template v-slot:card-title>
        Register
      </template>
      <template v-slot:card-content>
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
import { initialising } from '@/services/game'
import { auth, usersCollection } from '@/services/firebase'
import { getValueFromInputEvent } from '@/services/helpers/forms'

import Card from '../common/Card.vue'

export default {
  components: {
    Card
  },
  setup() {
    const email = ref('')
    const displayName = ref('')
    const password = ref('')
    const repeatPassword = ref('')

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
      if (password.value !== repeatPassword.value) return false

      return true
    })

    function resetForm() {
      email.value = ''
      displayName.value = ''
      password.value = ''
      repeatPassword.value = ''
    }

    async function onFormSubmit(event: Event) {
      initialising.value = true
      event.preventDefault()

      if (!formIsValid.value) return

      // Create the account
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      )

      if (!user) {
        initialising.value = false
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
      onFormSubmit
    }
  }
}
</script>

<style scoped lang="scss">
.register {
  width: 500px;
}
</style>
