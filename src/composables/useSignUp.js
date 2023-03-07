import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from '../configs/firebase'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, fullName) => {
  isPending.value = true
  error.value = null
  try {
    const response = await createUserWithEmailAndPassword(getAuth(), email, password)
    if (!response) throw new Error('Could not create a new user')
    // await response.user.updateProfile({ displayName: fullName })
    await updateProfile(getAuth().currentUser, { displayName: fullName })
    return response
  } catch (err) {
    console.log(err)
    error.value = err.message
  } finally {
    isPending.value = false
  }
}

export const useSignUp = () => {
  return { error, isPending, signup }
}
