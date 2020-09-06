<template>
  <div class="status">
    <h1>Current Location</h1>
    {{ currentLocation.displayName }}
    <h1>Available Locations</h1>
    <ol>
      <li v-for="(location, index) in availableLocations" :key="location.name">
        <location-link :location="location" :index="index" />
      </li>
    </ol>
    <h1>Available People</h1>
    <ol>
      <li v-for="(person, index) in availablePeople" :key="person.name">
        <person-link :person="person" :index="index" />
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
import { currentLocation, availableLocations, availablePeople } from '@/services/game';
import { availableCommands } from '@/services/commands';

import LocationLink from '@/components/common/LocationLink'
import PersonLink from '@/components/common/PersonLink'

export default {
  components: {
    LocationLink,
    PersonLink
  },
  name: 'Status',
  setup() {
    const test = function (clickName) {
      return function () {
        console.log(clickName);
      }
    }
    return {
      test,
      currentLocation,
      availableLocations,
      availablePeople,
      availableCommands
    }
  }
}
</script>

<style scoped lang="scss">
.status {
  color: #fff;
  font-size: 0.8rem;
  overflow-y: auto;
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
