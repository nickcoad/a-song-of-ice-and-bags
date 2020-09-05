<template>
  <div class="user-info">
    Logged in as {{ userProfile.displayName }}
    <br />
    <div @click="onLogoutClick" class="clickable">Logout</div>
  </div>
</template>

<script lang="ts">
import { userProfile } from '@/services/user'
import { auth } from '@/services/firebase'

export default {
  name: 'UserInfo',
  setup() {
    const onLogoutClick = function() {
      auth.signOut()
    }
    return { onLogoutClick, userProfile }
  }
}
</script>

<style scoped lang="scss">
.user-info {
  font-size: 0.8rem;
}
</style>
