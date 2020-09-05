<template>
  <div class="title-bar">
    <div class="title">A Song of Ice and Bags</div>
    <user-info />
  </div>
</template>

<script lang="ts">
import UserInfo from './UserInfo.vue'

export default {
  name: 'Screen',
  components: {
    UserInfo
  }
}
</script>

<style scoped lang="scss">
.title-bar {
  background-color: #28313f;
  border-bottom: 5px solid #1e232b;
  color: #fff;
  display: grid;
  grid-template-columns: auto 200px;
  font-size: 1.5rem;
  align-items: center;
  text-align: center;
}
</style>
