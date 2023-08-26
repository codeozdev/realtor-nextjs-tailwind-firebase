import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

// Google sign in
const provider = new GoogleAuthProvider()
export const signInGooglePopup = () => signInWithPopup(auth, provider)

// Create user
export const createUser = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

// Update user
export const updateUser = async (user, fullName) => {
  return await updateProfile(user, {
    displayName: fullName,
  })
}

// Sign in user
export const signInUser = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

// Reset password
export const resetPassword = async (email) => {
  if (!email) return

  return await sendPasswordResetEmail(auth, email)
}

// FIRESTORE
export const db = getFirestore()

// Create user document
export const createUserDocument = async (user) => {
  if (!user) return

  const userDocRef = doc(db, 'users', user.uid)

  const userDocSnapShot = await getDoc(userDocRef)
  //   console.log(userDocSnapShot.exists())

  // Check if user document exists
  if (!userDocSnapShot.exists()) {
    const { displayName, email } = user
    const createdAt = new Date()

    //create user document || document kisminda bulunacak data verileri
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    }
  }

  return userDocRef
}
