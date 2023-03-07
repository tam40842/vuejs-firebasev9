import { ref } from 'vue'
import { db, addDoc, collection } from '../configs/firebase'



const useCollection = (name) => {
    const error = ref(null)
    const addRecord = async (record) => {
        error.value = null
        console.log({ name, record });
        try {
            const response = await addDoc(collection(db, name), record);
            return response
        } catch (err) {
            console.log(err)
            error.value = err.message
        }
    }

    return { error, addRecord }
}

export default useCollection
