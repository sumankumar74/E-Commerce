import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex px-10 w-full bg-gradient-to-r from-black via-teal-500 to-black py-2 justify-between'>
      <div className='Logo bg-gradient-to-r from-teal-700 to-orange-400 text-3xl px-5 py-3 text-white rounded-lg'>
        <Link href="/">BOOK-SHOP</Link>
      </div>
      <div className='login  flex items-center gap-10  '>
        <Link href="/User/login" className='bg-rose-500 rounded-2xl text-white font-bold font-serif text-xl px-4 py-2 flex gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
          Login</Link>
        <Link href="/login" className='bg-green-500 rounded-2xl font-bold font-serif text-lg px-3 py-2 flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          Admin</Link>
      </div>
    </div>
  )
}

export default Header