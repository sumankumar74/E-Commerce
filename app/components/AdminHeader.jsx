import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
    return (
        <div className='flex px-10 w-full bg-gradient-to-r from-rose-600 to-teal-400 py-2 justify-between'>
            <div className='Logo bg-gradient-to-r from-teal-700 to-orange-400 text-3xl px-5 py-3 text-white rounded-lg'>
                <h1>BOOK-SHOP</h1>
            </div>
            <div className='flex justify-center items-center font-bold text-4xl font-serif'>
                <Link href="/admin" >Admin Panel</Link>
            </div>
            <div className='admin bg-gradient-to-r from-black via-red-600 to-black text-2xl px-5 py-2 flex items-center rounded-2xl text-white font-bold font-serif'>
                <Link href="/">logout</Link>
            </div>
        </div>
    )
}

export default AdminHeader