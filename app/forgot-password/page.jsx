'use client'

import GoogleButton from '@/components/GoogleButton'
import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'

//firebase
import { resetPassword } from '@/firebase/firebase'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await resetPassword(email)
      toast.success('Reset password email was sent')
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found')
      } else {
        toast.error('Something went wrong')
      }
    }
  }

  return (
    <PaddingContainer>
      <section className='my-5 sm:mt-32 overflow-hidden px-4'>
        <h1 className='text-3xl text-center font-bold mb-4  sm:mb-10'>Forgot Password</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div>
            <Image
              src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80'
              width={1500}
              height={1500}
              alt='key'
              className='object-cover w-full  rounded-2xl'
            />
          </div>
          <div className='flex items-center sm:p-5'>
            <form className='w-full space-y-3 relative' onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Email adress'
                className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out placeholder:text-sm'
                value={email}
                name='email'
                onChange={handleChange}
              />
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-md px-2 py-5'>
                <Link href='/signup' className='hover:text-red-500 transition duration-200 ease-in-out ml-1 font-bold'>
                  Register
                </Link>

                <Link
                  href='/signin'
                  className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out underline'>
                  Sign in
                </Link>
              </div>
              <button
                className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
                type='submit'>
                Send Reset Email
              </button>
              <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center font-semibold mx-4'>OR</p>
              </div>
              <GoogleButton />
            </form>
          </div>
        </div>
      </section>
    </PaddingContainer>
  )
}

//11
