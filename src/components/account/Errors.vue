<template>
  <div class="errors">
    <div v-for="error in errors" :key="error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['errors']
}
</script>

<style scoped lang="scss">
.errors {
  background-color: rgb(194, 74, 74);
  padding: 0.5rem 1rem;

  > div {
    line-height: 1.5rem;
  }
}
</style>
