<template>
  <div class="clickable" @click="talk">{{ person.displayName }}</div>
</template>

<script lang="ts">
import { addMessage } from '@/services/messages'

export default {
  props: ['index', 'person'],
  setup(props: any) {
    const talk = function() {
      addMessage(`talk ${props.index + 1}`, 'input')
    }

    return { talk }
  }
}
</script>

<style></style>
