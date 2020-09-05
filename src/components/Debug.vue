<template>
  <div class="debug">
    <ul>
      <li>logged in: {{ isSignedIn }}</li>
      <li v-if="isSignedIn">user uid: {{ userProfile.uid }}</li>
      <li v-if="isSignedIn">
        user display name: {{ userProfile.displayName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { isSignedIn, userProfile } from '@/services/user'
import { auth } from '@/services/firebase'

export default {
  setup() {
    return { auth, isSignedIn, userProfile }
  }
}
</script>

<style scoped lang="scss">
.debug {
  background-color: #000;
  color: #fff;
  font-size: 0.75rem;
}
</style>
