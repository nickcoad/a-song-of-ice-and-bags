import locations from '@/data/locations.ts'
import people from '@/data/people.ts'
import { reactive, computed } from 'vue'
import { addMessage } from './messages'

const state = reactive({
  currentLocation: 'coad-abode'
})

const currentLocation = computed(() => {
  const location = locations.filter(_ => _.name == state.currentLocation)
  return location[0]
})

const availableLocations = computed(() => {
  const available = locations
    .filter(_ => currentLocation.value.connections.includes(_.name))
    .sort((a, b) => {
      if (a.displayName > b.displayName) return 1
      if (a.displayName < b.displayName) return -1
      return 0
    })
  return available
})

const availablePeople = computed(() => {
  const temp = currentLocation.value.people as string[]
  if (!temp) return []

  const available = people
    .filter(_ => temp.includes(_.name))
    .sort((a, b) => {
      if (a.displayName > b.displayName) return 1
      if (a.displayName < b.displayName) return -1
      return 0
    })
  return available
})

function setLocation(locationName: string) {
  state.currentLocation = locationName
  addMessage('You travelled to ' + currentLocation.value.displayName, 'output')

  // pick a random flavour text to output
  const rand = Math.floor(Math.random() * currentLocation.value.flavour.length)
  addMessage(currentLocation.value.flavour[rand], 'info')
}

export { currentLocation, availableLocations, availablePeople, setLocation }
