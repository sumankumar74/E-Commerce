"use client"
import {z} from "zod";
import { handleSubmitBook } from "../action";
import{toast} from"react-hot-toast"
const InsertBooks = ({categoryData }) => {
    let  book= z.object({
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
          }),
        author:z.string().min(5, { message: "Must be 5 or more characters long" }),
        price: z.number(),
        discountPrice:z.number(),
        category:z.string(),
        description:z.string()
    })
    let clientBookAction = async(formData)=>{
        let records ={
            "title":formData.get("title"),
            "author":formData.get("author"),
            "price":+formData.get("price"),
            "discountPrice":+formData.get("discountPrice"),
            "category":formData.get("category"),
            "description":formData.get("description"),
            "featuredImage":formData.get("featuredImage")
        }
        let data = book.safeParse(records);
        if(!data.success){
            data.error.issues.forEach((issue)=>{
                toast.error(issue.path[0] +":"+ issue.message )
            })
            return;
        }

        handleSubmitBook(formData);
    }
    return (
        <div className='User flex justify-center items-center w-full flex-col mt-[-15%]'>
            <div className='flex justify-start'>
                <h1 className='text-4xl mb-5 font-serif font-bold text-rose-500'>Insert Books</h1>
            </div>
            <div className='border border-black p-10 rounded-lg w-1/2'>
                <form method='post' action={clientBookAction}>
                    <div className='flex gap-10 w-full items-center'>
                        <div className='flex flex-col mb-3 w-1/2'>
                            <label htmlFor='title' className='text-black font-semibold text-2xl font-serif' >Title</label>
                            <input type='text' name='title' placeholder='Enter Title' className='bg-white text-black px-3 py-2 rounded-lg border' />
                        </div>
                        <div className='flex flex-col mb-3 w-1/2'>
                            <label htmlFor='author' className='text-black font-semibold text-xl font-serif' >Author</label>
                            <input type='text' name='author' placeholder='Enter Author' className='bg-white text-black  px-3 py-2  rounded-lg border' />
                        </div>
                    </div>
                    <div className='flex gap-10 w-full items-center'>
                        <div className='flex flex-col mb-3 w-1/2'>
                            <label htmlFor='price' className='text-black font-semibold text-xl font-serif' >Price</label>
                            <input type='integer' name='price' placeholder='Enter price' className='bg-white text-black px-3 py-2 rounded-lg border' />
                        </div><div className='flex flex-col mb-3 w-1/2'>
                            <label htmlFor='discountPrice' className='text-white font-semibold text-xl font-serif' >DiscountPrice</label>
                            <input type='integer' name='discountPrice' placeholder='Enter discountPrice' className='bg-white text-red-500 px-3 py-2 rounded-lg border' />
                        </div>
                    </div>
                    <div className='flex gap-10 w-full items-center'>
                        <div className='flex flex-col mb-5 w-1/2   '>
                            <label htmlFor="category" className='text-black font-semibold text-xl font-serif'> Category</label>
                            <select type="text" name="category" className='bg-white text-black px-3 py-2 border rounded w-full'>
                                <option defaultValue="" selected disabled >Select Category</option>
                                {categoryData.map((items, index) => ( <option value={items._id}>{items.catTitle}</option> )) }
                            </select>
                        </div>
                        <div className='flex flex-col mb-5 w-1/2  '>
                            <label htmlFor="status" className='text-black font-semibold text-xl font-serif'> Status</label>
                            <select type="text" name="status" className='bg-white text-black px-3 py-2 border rounded w-full'>
                                <option value="" selected disabled>Select Status</option>
                                <option value="Available" >Available</option>
                                <option value="Not-Available" >Not Available</option>
                                <option value="Out of Stocks" >Out of stocks</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col mb-3 w-1/2'>
                        <label htmlFor="featuredImage" className='text-black font-semibold text-xl font-serif' >Featured Image</label>
                        <input type="file" name="featuredImage" className='bg-white text-black px-3 py-2 border rounded w-full ' />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='description' className='text-black font-semibold text-xl font-serif' >Description</label>
                        <textarea rows={5} name='description' placeholder='Enter Description' className='bg-white text-black px-3 py-2 rounded-lg border' ></textarea>
                    </div>
                    <div className='flex justify-center items-center rounded-xl font-serif bg-gradient-to-r from-red-600 via-black to-red-600'>
                        <button type='submit' className=' py-3 text-white font-sans text-3xl '>SUBMIT</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default InsertBooks