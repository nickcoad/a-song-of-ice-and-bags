import { createApp } from 'vue'
import App from './App.vue'
import { auth } from '@/services/firebase'
import { setLocation } from '@/services/game'
import { userProfile, fetchUserProfile, isSignedIn } from '@/services/user'
import { clearMessages } from './services/messages'
import { loadData } from './services/data'

let app: any

auth.onAuthStateChanged(async user => {
  if (user) {
    clearMessages()

    await fetchUserProfile()

    console.log('User is signed in.')
    isSignedIn.value = true
    console.log(`User's current location: ${userProfile.currentLocation}`)
    await loadData()
    await setLocation(userProfile.currentLocation)
  } else {
    isSignedIn.value = false
  }

  if (!app) app = createApp(App).mount('#app')
})
