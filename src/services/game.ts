import locations from '@/data/locations.ts'
import people from '@/data/people.ts'
import { reactive, computed, ref } from 'vue'
import { addMessage } from './messages'
import { auth, usersCollection } from './firebase'
import { userProfile, updateUser } from './user'

const currentLocation = computed(() => {
  const location = locations.filter(_ => _.name == userProfile.currentLocation)
  return location[0]
})

const loading = ref(false)

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
  currentLocation,
  availableLocations,
  availablePeople,
  setLocation
}
