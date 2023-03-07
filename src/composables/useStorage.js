import { ref } from 'vue'
import { storage, refStorage, uploadBytes } from '../configs/firebase'
import { useUser } from "./useUser"

const { getUser } = useUser()
const { user } = getUser()

const useStorage = (name) => {
    const error = ref(null)
    const filePath = ref("")
    const url = ref(null)

    const uploadFile = async (file) => {
        filePath.value = `${name}/${user.value.uid}/${file.name}`
        const fileRef = refStorage(storage, filePath.value)
        error.value = null
        try {
            url.value = await uploadBytes(fileRef, file)
            console.log(url.value);
            return url.value
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    return { error, uploadFile }
}

export default useStorage
