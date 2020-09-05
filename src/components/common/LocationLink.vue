<template>
  <div class="clickable" @click="travel">{{ location.displayName }}</div>
</template>

<script lang="ts">
import { addMessage } from '@/services/messages'

export default {
  props: ['index', 'location'],
  setup(props: any) {
    const travel = function() {
      addMessage(`move ${props.index + 1}`, 'input')
    }

    return { travel }
  }
}
</script>

<style></style>
