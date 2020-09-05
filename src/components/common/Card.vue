<template>
  <div class="card">
    <div class="card-title">
      <slot name="card-title"></slot>
    </div>
    <div class="card-content">
      <slot name="card-content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped lang="scss">
.card {
  .card-title {
    background-color: #2c3c57;
    color: #fff;
    padding: 1rem 1.5rem;
  }

  .card-content {
    background-color: #28313f;
    color: #fff;
    padding: 1rem 1.5rem;
  }
}
</style>
