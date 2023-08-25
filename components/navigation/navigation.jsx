import Image from 'next/image'
import Link from 'next/link'
import PaddingContainer from '../layout/padding-container'

export default function Navigation() {
  return (
    <div className='bg-white border-b shadow-sm sticky z-50 py-2'>
      <PaddingContainer>
        <nav className='flex justify-between items-center'>
          <Link href='/' className=''>
            <Image src='/logo.svg' width={180} height={150} alt='logo' className='w-28 sm:w-0' />
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
      </PaddingContainer>
    </div>
  )
}
