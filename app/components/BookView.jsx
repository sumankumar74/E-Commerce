"use client"
import Image from 'next/image'
import { useRouter } from 'next/router';
import Toast from 'react-hot-toast';

const BookView = ({ book }) => {
  
    let router = useRouter();
    const handleAddToCart = async () => {
        let data = await fetch(`http://localhost/api/cart/add/${book._id}`)
        let res =  await data.json();
        if(res.success){
            Toast.success(res.message)
            router.push("/cart")
        } 
    }

    return (
        <div className='view flex justify-center w-[50%]  border border-slate-400 flex-col  '>
            <div className='w-full flex justify-center flex-1 flex-col items-start  '>
                <div className='images mb-2 block relative h-78 rounded overflow-hidden  p-10'>
                    <Image src={`/image/${book.featuredImage}`} width={250} height={0} alt='' className='block relative h-64 rounded overflow-hidden' />
                </div>
                <div className='flex justify-start items-start flex-col gap-2 mb-2 px-10 mt-[-15px] '>
                    <p className='text-md text-slate-700 font-semibold'>MRP: <del className='text-md text-red-700'>₹{book.price}</del></p>
                    <p className='text-3xl text-black font-bold'>₹{book.discountPrice}</p>
                </div>
            </div>
            <div className='flex-1 flex flex-col  px-10 mt-5'>
                <h1 className='text-teal-600 font-semibold text-xl mb-2 truncate'>{book.title}</h1>
                <h2 className='text-gray-600 mb-2 text-sm'>Author: {book.author}</h2>
                <h3 className='text-rose-800 text-md mb-2 font-semibold' >{book.category.catTitle}</h3>
                <div className='flex flex-col'>
                    <p className='text-sm font-semibold'>Description:</p>
                    <p className='text-slate-700 text-md mb-3 text-justify' >{book.description}</p>
                </div>
                <div className='flex justify-between items-start mb-2 '>
                    <h3 className='text-red-600 text-sm font-semibold'>{book.status}</h3>
                </div>
            </div>
            <div className='flex buttons justify-start  items-center gap-5 px-10 mb-5'>

                <button type="button" onClick={() =>  handleAddToCart() } className="flex gap-2 items-center justify-center px-4 bg-orange-600 hover:bg-orange-700 text-white  py-3 rounded-md ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <span> Add to Cart</span>
                </button>

                <div className='flex bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <a href=""  >Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default BookView