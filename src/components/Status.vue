<template>
  <div class="status">
    <h1>Current Location</h1>
    {{ currentLocation.displayName }}
    <h1>Available Locations</h1>
    <ol>
      <li v-for="location in availableLocations" :key="location.name">
        {{ location.displayName }}
      </li>
    </ol>
    <h1>Available People</h1>
    <ol>
      <li v-for="person in availablePeople" :key="person.name">
        {{ person.displayName }}
      </li>
    </ol>
    <h1>Available Commands</h1>
    <ul>
      <li v-for="command in availableCommands" :key="command">
        {{ command.name }} <span class="cmd-hint">{{ command.hint }}</span>
      </li>
    </ul>
  </div>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import { currentLocation, availableLocations, availablePeople } from '@/services/game';
import { availableCommands } from '@/services/commands';

export default defineComponent({
  name: 'Status',
  setup() {
    return {
      currentLocation,
      availableLocations,
      availablePeople,
      availableCommands
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.status {
  color: #fff;
  font-size: 0.8rem;
  padding: 1rem 1.5rem;

  h1 {
    color: #42b983;
    font-size: 1rem;
    margin-top: 1rem;
    text-transform: uppercase;
  }

  li {
    line-height: 1.5rem;
  }

  .cmd-hint {
    color: #aaa;
    font-size: 0.8rem;
  }
}
</style>
