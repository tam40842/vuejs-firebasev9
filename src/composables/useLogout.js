import { ref } from 'vue'
import { getAuth, signOut } from '../configs/firebase'

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        const response = await signOut(getAuth())
        return response
    } catch (err) {
        console.log(err)
        error.value = err.message
    }
}

export const useLogout = () => {
    return { error, logout }
}
