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
  updated() {
    const container = document.querySelector(".output");
    container.scrollTop = container.scrollHeight;
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

$scrollbarBG: transparent;
$thumbBG: #90a4ae;

.output::-webkit-scrollbar {
  width: 11px;
}
.output {
  scrollbar-width: thin;
  scrollbar-color: $thumbBG $scrollbarBG;
}
.output::-webkit-scrollbar-track {
  background: $scrollbarBG;
}
.output::-webkit-scrollbar-thumb {
  background-color: $thumbBG;
  border-radius: 6px;
  border: 3px solid $scrollbarBG;
}
</style>
