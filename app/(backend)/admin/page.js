import Book from '@/app/models/Book'
import Category from '@/app/models/Category'
import User from '@/app/models/Admin'
import Link from 'next/link'
import React from 'react'

const page = async ()=> {
    let categoryData = await Category.find()
    let BookData = await Book.find()
    let UserData = await User.find()
    return (
        <div className="flex ">
            <div className="w-1/4">
                <div className="flex flex-col py-2 bg-gradient-to-r from-indigo-600 to-pink-600 px-5 gap-2 font-sans font-semibold ">
                    <div className='flex text-white gap-2 py-2 px-5 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <Link href="/admin" className="hover:text-black">DashBoard</Link>
                    </div>
                    <div className="flex  gap-2 text-white py-2 px-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <Link href="" className="hover:text-black" >Manage User  ({UserData.length})</Link>
                    </div>
                    <div className="text-white px-5 py-2 flex gap-2 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>

                        <Link href="/admin/Books/category/manage" className="hover:text-black">Manage Categories ({categoryData.length})</Link>
                    </div>
                    <div className="text-white px-5 py-2 flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>

                        <Link href="/admin/Books/manage" className="hover:text-black">Manage Books ({BookData.length})</Link>
                    </div>
                    <div className="text-white px-5 py-2 flex gap-2 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <Link href="" className="hover:text-black">Manage Orders</Link>
                    </div>

                    <div className="text-white px-5 py-2 flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <Link href="" className="hover:text-black" >Manage Payment</Link>
                    </div>
                    {/* <div className="text-white px-5 py-2 flex gap-2 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        <Link href="/" cl   assName="hover:text-black">Logout</Link>
                    </div> */}
                </div>
            </div>
            <div className='w-3/4 '>
                <div className='flex gap-10 p-10 text-white ml-[10%] font-serif font-semibold '>
                    <div className='flex  bg-purple-700 px-8 py-4 text-center rounded-xl shadow-xl flex-col hover:text-black'>
                        <h2>{BookData.length}</h2>
                        <Link href="/admin/Books/manage" >Total Books</Link>
                    </div>
                    <div className='flex bg-teal-700 px-8 py-4 text-center rounded-xl shadow-xl flex-col hover:text-black'>
                        <h2>0</h2>
                        <Link href="">Total Orders</Link>
                    </div>
                    <div className='flex bg-pink-700 p-5 text-center rounded-xl shadow-xl  flex-col hover:text-black gap-2'>
                        <h2>{categoryData.length}</h2>
                        <Link href="/admin/Books/category/manage">Total Categories</Link>
                    </div>
                    <div className='flex bg-indigo-700 px-8 py-4 text-center rounded-xl shadow-xl flex-col hover:text-black'>
                        <h2>{UserData.length}</h2>
                        <Link href="">Total User</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page