import { locations, people, users } from '@/services/data'
import { computed, ref } from 'vue'
import { addMessage } from './messages'
import { userProfile, updateUser } from './user'

const currentLocation = computed(() => {
  const location = locations.value.filter(
    _ => _.name == userProfile.currentLocation
  )
  return location[0]
})

const loading = ref(false)
const initialising = ref(true)

const availableLocations = computed(() => {
  const available = locations.value
    .filter(_ => currentLocation.value.connections.includes(_.name))
    .sort((a, b) => {
      if (a.displayName > b.displayName) return 1
      if (a.displayName < b.displayName) return -1
      return 0
    })
  return available
})

const availableUsers = computed(() => {
  const available = users.value
    .filter(
      _ =>
        currentLocation.value.name == _.currentLocation &&
        _.displayName != userProfile.displayName
    )
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

  const available = people.value
    .filter(_ => temp.includes(_.name))
    .sort((a, b) => {
      if (a.displayName > b.displayName) return 1
      if (a.displayName < b.displayName) return -1
      return 0
    })
  return available
})

async function setLocation(locationName: string) {
  loading.value = true
  await updateUser({ currentLocation: locationName })
  loading.value = false

  addMessage('You travelled to ' + currentLocation.value.displayName, 'output')

  // pick a random flavour text to output
  let message = 'You are now at ' + currentLocation.value.displayName
  if (
    currentLocation.value.flavour &&
    currentLocation.value.flavour.length > 0
  ) {
    const rand = Math.floor(
      Math.random() * currentLocation.value.flavour.length
    )
    message = currentLocation.value.flavour[rand]
  }

  addMessage(message, 'info')
}

export {
  loading,
  initialising,
  currentLocation,
  availableLocations,
  availablePeople,
  availableUsers,
  setLocation
}
