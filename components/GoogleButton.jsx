'use client'

import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

//firebase
import { signInGooglePopup, createUserDocument } from '@/firebase/firebase'

//Google sign in and save user to firestore
export default function GoogleButton() {
  const router = useRouter()

  const signInGoogle = async () => {
    try {
      const { user } = await signInGooglePopup()
      toast.success('Sign in was successful')
      await createUserDocument(user)

      router.push('/')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <button
      className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800'
      onClick={signInGoogle}
      type='button'>
      <FcGoogle className='text-xl bg-white rounded-full mr-2' />
      Countinue with Google
    </button>
  )
}

//button default olarak submit type'ı ile geliyor. Bu yüzden type'ı button olarak değiştirdik ki toast bir hata mesaji vermesin
