<template>
  <div class="inventory">
    <h1>Your Inventory</h1>
    <ul>
      <li v-for="invItem in inventoryItems" :key="invItem.name">
        {{ invItem.quantity }} x {{ invItem.item.displayName }}
      </li>
    </ul>
  </div>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import { currentLocation, availableLocations, availablePeople } from '@/services/game';
import { addItem, inventoryItems } from '@/services/inventory';

export default defineComponent({
  name: 'Status',
  setup() {
    addItem("used-needle", 5)
    addItem("bag", 2)

    return {
      currentLocation,
      availableLocations,
      availablePeople,
      inventoryItems
    }
  }
})
</script>

<style scoped lang="scss">
.inventory {
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
