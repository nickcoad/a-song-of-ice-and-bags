<template>
  <div class="screen">
    <title-bar />
    <div class="output-and-status">
      <status />
      <output-box />
      <!-- <inventory /> -->
    </div>
    <div class="input">
      <input-box />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OutputBox from './Output.vue'
import InputBox from './InputBox.vue'
import Status from './Status.vue'
import Inventory from './Inventory.vue'
import TitleBar from './TitleBar.vue'

export default defineComponent({
  name: 'Screen',
  components: {
    InputBox,
    OutputBox,
    Status,
    TitleBar
  },
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
.screen {
  display: grid;
  grid-template-rows: 70px minmax(0, auto) 50px;
  height: 100vh;
  overflow: hidden;
  width: 100%;
}

.output-and-status {
  display: grid;
  grid-template-columns: 250px auto;
}
</style>
