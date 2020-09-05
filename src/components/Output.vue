<template>
  <div class="output">
    <message-display
      v-for="message in messages"
      :key="message.timestamp"
      :message="message"
    />
  </div>
</template>

<script type="ts">
import { messages } from '@/services/messages'
import MessageDisplay from './MessageDisplay'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Output',
  components: {
    MessageDisplay
  },
  setup() {
    return {
      messages
    }
  }
})
</script>

<style scoped lang="scss">
.output {
  color: #fff;
  overflow: auto;
  padding: 1rem 1.5rem;
}
</style>
