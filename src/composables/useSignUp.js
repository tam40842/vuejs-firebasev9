import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "../configs/firebase"

const error = ref(null)
const isPending = ref(false)

export const singup = async (email, password, fullName) => {
    isPending.value = true
    error.value = null
    try {
        const response = createUserWithEmailAndPassword(getAuth(), email, password)
        if (!response) throw new Error("Could not create a new user")
        return response
    } catch (err) {
        console.log(err);
        error.value = err.message
    } finally {
        isPending.value = false
    }

};

export const useSignup = () => {
    return { error, isPending, singup }
};
