import items from '@/data/items.ts'
import { ref, computed } from 'vue'

type InventoryItem = { name: string; quantity: number }

const inventory: InventoryItem[] = []

function addItem(itemName: string, quantity: number) {
  // check if we already have this item
  const existing = inventory.filter(_ => _.name == itemName)[0]
  if (existing) existing.quantity = existing.quantity + quantity
  else inventory.push({ name: itemName, quantity: quantity })
}

const inventoryItems = computed(() => {
  return inventory.map(_ => {
    return {
      item: items.filter(__ => __.name === _.name)[0],
      quantity: _.quantity
    }
  })
})

export { inventoryItems, addItem }
