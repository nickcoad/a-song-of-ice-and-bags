<template>
  <div class="sign-in">
    <card>
      <template v-slot:card-title>
        Sign in
      </template>
      <template v-slot:card-content>
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
import { initialising } from '@/services/game'

import Card from '../common/Card.vue'

export default {
  components: {
    Card
  },
  setup() {
    const email = ref('')
    const password = ref('')

    function updateEmail(event: Event) {
      email.value = getValueFromInputEvent(event)
    }

    function updatePassword(event: Event) {
      password.value = getValueFromInputEvent(event)
    }

    const formIsValid = computed(() => {
      if (!email.value) return false
      if (!password.value) return false

      return true
    })

    function resetForm() {
      email.value = ''
      password.value = ''
    }

    async function onFormSubmit(event: Event) {
      initialising.value = true
      event.preventDefault()

      if (!formIsValid.value) return

      // Create the account
      const { user } = await auth.signInWithEmailAndPassword(
        email.value,
        password.value
      )

      if (!user) {
        initialising.value = false
        return
      }

      await fetchUserProfile()

      resetForm()
    }

    return {
      updateEmail,
      updatePassword,
      onFormSubmit
    }
  }
}
</script>

<style scoped lang="scss">
.sign-in {
  width: 500px;
}
</style>
