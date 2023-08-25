import Image from 'next/image'
import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Navigation() {
  return (
    <div className='bg-white border-b shadow-sm sticky z-50 py-2'>
      <PaddingContainer>
        <nav className='flex justify-between items-center'>
          <Link href='/' className=''>
            <Image src='/logo.svg' width={180} height={150} alt='logo' className='w-28 sm:w-48' />
          </Link>
          <ul className='flex space-x-10'>
            <li className='py-3 text-sm font-semibold text-gray-400 hover:text-red-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='py-3 text-sm font-semibold text-gray-400 hover:text-red-500'>
              <Link href='/offers'>Offers</Link>
            </li>
            <li className='py-3 text-sm font-semibold text-gray-400 hover:text-red-500'>
              <Link href='/signin'>Sign in</Link>
            </li>
          </ul>
        </nav>
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </PaddingContainer>
    </div>
  )
}
