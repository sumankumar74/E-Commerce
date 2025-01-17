"use client"
import Image from "next/image";
import { useRouter } from "next/navigation"
import Toast from "react-hot-toast"

const ViewBook = ({book}) => {
   
    let router = useRouter();
    const handleAddToCart = async () => {
        const data = await fetch(`http://localhost:3000/api/cart/add/${book._id}`)
        const res = await data.json();
        if(res.success){
            Toast.success(res.message)
            router.push("/cart")
        } 
    }
  return (
    <div className="flex-1 flex bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700">
     <div className='images mb-2 block relative h-78 rounded overflow-hidden  p-10'>
                    <Image src={`/image/${book.featuredImage}`} width={250} height={0} alt='' className='block relative h-64 rounded overflow-hidden' />
                </div>
<div className="p-5 flex-[1.5]">
    <a href="#">
        <h5 className="text-xl font-semibold tracking-tight  truncate capitalize">{book.title.toLowerCase()}</h5>
        <h6 className="text-sm font-light tracking-tight ">{book.author}</h6>
    </a>
   
    <div className="flex gap-3 justify-between flex-col mt-5">
        

        <div className="flex flex-col">
        <div className="flex flex-1 flex-col  my-5">
        <h4 className="text-sm font-semibold">Description</h4>
        <p className="text-justify">{book.description}</p>
        </div>
        <span className="text-2xl font-bold ">₹{book.discountPrice}</span>
        <span className="text-sm font-light ">MRP: <del>₹{book.price}</del></span>
        </div>

        <div className="flex gap-3">
        <button onClick={handleAddToCart} type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

            <span>Add To Cart</span></button>
        <a href="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 gap-2  focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
            <span>Buy Now</span>
            
</a>
        </div>
    </div>
</div>
    </div>
  )
}

export default ViewBook