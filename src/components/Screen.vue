<template>
  <div class="screen">
    <div class="title">{{ msg }}</div>
    <div class="output-and-status">
      <status />
      <output-box />
      <inventory />
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

export default defineComponent({
  name: 'Screen',
  components: {
    InputBox,
    OutputBox,
    Status,
    Inventory
  },
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  background-color: #28313f;
  border-bottom: 5px solid #1e232b;
  color: #fff;
  display: grid;
  font-size: 1.5rem;
  align-items: center;
  text-align: center;
}

.screen {
  background-color: #212730;
  display: grid;
  grid-template-rows: 70px auto 50px;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.output-and-status {
  display: grid;
  grid-template-columns: 250px auto 250px;
}
</style>
