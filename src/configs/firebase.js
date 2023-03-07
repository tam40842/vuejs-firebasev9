import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { serverTimestamp, getFirestore, setDoc, doc, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from "firebase/storage";
let refStorage = ref
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoFI1ixMkiLfU6sirjSYKCm5Rsi3bgFL4',
  authDomain: 'imoney-68f92.firebaseapp.com',
  projectId: 'imoney-68f92',
  storageBucket: 'imoney-68f92.appspot.com',
  messagingSenderId: '415074389100',
  appId: '1:415074389100:web:954695e29d541eded09c49',
  measurementId: 'G-FN5TL3B4CH'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app);

export { db, getAuth, serverTimestamp, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, setDoc, doc, collection, addDoc, storage, refStorage, uploadBytes }
