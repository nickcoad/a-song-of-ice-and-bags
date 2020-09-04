<template>
  <div v-bind:class="classes">{{ message.message }}</div>
</template>

<script type="ts">
import { defineComponent, computed } from 'vue'
import Message from '@/models/Message'

export default defineComponent({
  name: 'MessageDisplay',
  props: {
    message: Message
  },
  setup(props) {
    const classes = computed(() => {
      const classes = ['msg'];

      if (props.message.type === 'input')
        classes.push('msg-input')
      if (props.message.type === 'output')
        classes.push('msg-output')
      if (props.message.type === 'info')
        classes.push('msg-info')

      return classes;
    })

    return { classes }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.output {
  color: #fff;
  padding: 1rem 1.5rem;
}
.msg-input {
  &::before {
    content: '> ';
  }
}
.msg-output {
  font-weight: bold;
}
.msg-info {
  font-weight: normal;
  color: #42b983;
}
.msg {
  line-height: 1.5rem;
}
</style>
