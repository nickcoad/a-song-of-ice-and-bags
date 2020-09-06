import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyAeyJCtBbTzwSQ669e1dP7Pkbfrrb1frXY',
  authDomain: 'io-coader-ice-and-bags.firebaseapp.com',
  databaseURL: 'https://io-coader-ice-and-bags.firebaseio.com',
  projectId: 'io-coader-ice-and-bags',
  storageBucket: 'io-coader-ice-and-bags.appspot.com',
  messagingSenderId: '839506079705',
  appId: '1:839506079705:web:ff1ef29ba2f321fc4cf3c8'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const locationsCollection = db.collection('locations')
const itemsCollection = db.collection('items')
const peopleCollection = db.collection('people')
const commandsCollection = db.collection('commands')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  locationsCollection,
  itemsCollection,
  peopleCollection,
  commandsCollection
}
