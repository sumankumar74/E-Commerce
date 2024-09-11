"use client"
import { handleSubmit } from '@/app/action';
import {z} from "zod";
import { toast } from "react-hot-toast";

const InsertCategory = () => {
             
    let category = z.object({
        catTitle: z.string().min(5,{msg:"Category must contain 5 letters"}),
        catDescription: z.string().min(10, {msg:"Category Description must be at least 10 characters"})
    })
    let clientAction = async (formData)=>{

        let records = {
            "catTitle":formData.get("catTitle"),
            "catDescription":formData.get("catDescription")
        }
        let data = category.safeParse(records);

        if(!data.success){
            data.error.issues.forEach((issue)=>{
                toast.error(issue.path[0] +":"+ issue.message )
            })
            return;
        }
        handleSubmit(formData)
    }
    return (
        <div className='Category flex justify-center items-center  w-full flex-col mt-[-10%]'>
             <h1 className='text-blue-900 text-3xl mb-5 font-serif font-bold'>Insert Category</h1>
           <div className="border border-black p-10 rounded-xl w-1/3">
           <form method='post' action={clientAction}>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='catTitle' className=' font-semibold text-xl' >Category Title</label>
                    <input type='text' name='catTitle' placeholder='Enter Category Title' className='px-3 py-2 text-black rounded-lg border' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='catDescription' className=' font-semibold text-xl' >Category Description</label>
                    <input type='text' name='catDescription' placeholder='Enter Category Description' className='px-3 py-2 text-black rounded-lg border' />
                </div>
                <div className='flex justify-center items-center bg-gradient-to-r from-black via-teal-400 to-red-600 rounded-2xl '>
                    <button type='submit' className=' py-3 text-white font-sans text-2xl'>Create Category</button>
                </div>
            </form>
           </div>
        </div>
    )
}

export default InsertCategory