import {
  commandsCollection,
  itemsCollection,
  locationsCollection,
  peopleCollection
} from './firebase'
import { ref } from 'vue'
import Location from '@/models/Location'
import Person from '@/models/Person'
import Item from '@/models/Item'
import AvailableCommand from '@/models/AvailableCommand'

const locations = ref<Location[]>([])
const people = ref<Person[]>([])
const items = ref<Item[]>([])
const commands = ref<AvailableCommand[]>([])

async function loadLocations() {
  locations.value = (await locationsCollection.get()).docs.map(
    _ => _.data() as Location
  )
  locationsCollection.onSnapshot(snapshot => {
    locations.value = snapshot.docs.map(_ => _.data() as Location)
  })
  console.log(`Location data loaded: ${locations.value.length} locations found`)
}

async function loadPeople() {
  people.value = (await peopleCollection.get()).docs.map(
    _ => _.data() as Person
  )
  peopleCollection.onSnapshot(snapshot => {
    people.value = snapshot.docs.map(_ => _.data() as Person)
  })
  console.log(`People data loaded: ${people.value.length} people found`)
}

async function loadItems() {
  items.value = (await itemsCollection.get()).docs.map(_ => _.data() as Item)
  itemsCollection.onSnapshot(snapshot => {
    items.value = snapshot.docs.map(_ => _.data() as Item)
  })
  console.log(`Item data loaded: ${items.value.length} items found`)
}

async function loadCommands() {
  commands.value = (await commandsCollection.get()).docs.map(
    _ => _.data() as AvailableCommand
  )
  commandsCollection.onSnapshot(snapshot => {
    commands.value = snapshot.docs.map(_ => _.data() as AvailableCommand)
  })
  console.log(`Command data loaded: ${commands.value.length} commands found`)
}

async function loadData() {
  console.log('Loading data from Firebase')

  await loadLocations()
  await loadPeople()
  await loadItems()
  await loadCommands()
}

export { loadData, locations, people, commands, items }
