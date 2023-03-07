import { ref } from "vue";
import { getAuth, onAuthStateChanged } from "@/configs/firebase";

const user = ref(getAuth().currentUser)

onAuthStateChanged(getAuth(), (_user) => {
    if (_user) {
        user.value = _user
    }
})

const getUser = () => {
    return { user }
}

export const useUser = () => {
    return { getUser }
}