import { createApp } from 'vue'
import App from './App.vue'
import { auth } from '@/services/firebase'
import { setLocation } from '@/services/game'
import { userProfile, fetchUserProfile, isSignedIn } from '@/services/user'
import { clearMessages } from './services/messages'

let app: any

auth.onAuthStateChanged(async user => {
  if (user) {
    clearMessages()

    await fetchUserProfile()

    isSignedIn.value = true
    console.log(userProfile.currentLocation)
    await setLocation(userProfile.currentLocation)
  } else {
    isSignedIn.value = false
  }

  if (!app) app = createApp(App).mount('#app')
})
