import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "@/configs/firebase";


const error = ref(null)
const isPending = ref(false)


const signin = async (email, password) => {
    isPending.value = true
    error.value = null
    try {
        const response = await signInWithEmailAndPassword(getAuth(), email, password)
        if (!response) throw new Error('Could not signin user')
        console.log(response);
        return response
    } catch (err) {
        console.log(err);
        error.value = err.message
    } finally {
        isPending.value = false
    }
}


export const useSignIn = () => {
    return { signin, error, isPending }
}