<template>
  <div class="input-box">
    <input
      type="text"
      @keyup="updateMessage"
      @keyup.enter="onSubmit"
      placeholder="type a command here, asshole"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { addMessage } from '@/services/messages'

export default defineComponent({
  name: 'InputBox',
  setup() {
    const newMessage = ref('')

    const updateMessage = (event: Event) => {
      const htmlInput = event.target as HTMLInputElement

      if (!htmlInput) return

      newMessage.value = (event.target as HTMLInputElement).value
    }

    const onSubmit = function(event: Event) {
      const htmlInput = event.target as HTMLInputElement

      addMessage(newMessage.value, 'input')
      htmlInput.value = ''
    }

    return { addMessage, newMessage, updateMessage, onSubmit }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #42b983;
  margin: 40px 0 0;
}

.input-box {
  background-color: #13161a;
  display: grid;
  align-items: center;
  height: 100%;
  overflow: hidden;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    color: #eee;
    font-size: 1rem;
    outline: none;
    padding: 1rem 1.5rem;
    width: 100%;

    &::placeholder {
      color: #42b983;
      font-weight: bold;
    }
  }
}
</style>
