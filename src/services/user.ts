import { auth, usersCollection } from './firebase'
import { ref, reactive } from 'vue'

const userProfile = reactive({
  uid: '',
  displayName: '',
  currentLocation: ''
})

const isSignedIn = ref(false)

async function fetchUserProfile() {
  if (!auth.currentUser) return

  const uid = auth.currentUser.uid
  const userData = (await usersCollection.doc(uid).get()).data()

  if (!userData) return

  userProfile.uid = uid
  userProfile.displayName = userData.displayName
  userProfile.currentLocation = userData.currentLocation || 'coad-abode'
}

async function updateUser(user: any) {
  const merged = { ...userProfile, ...user }

  await usersCollection.doc(userProfile.uid).update(merged)
  userProfile.currentLocation = merged.currentLocation
  userProfile.displayName = merged.displayName
  userProfile.uid = merged.uid
}

export { userProfile, fetchUserProfile, updateUser, isSignedIn }
