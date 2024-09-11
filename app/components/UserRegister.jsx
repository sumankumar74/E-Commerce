"use client"

import { z } from "zod"
import { handleCreateAnAccount } from "../action"
import Toast from "react-hot-toast"

const UserRegister = () => {
    let registerSchema= z.object({
        fullName: z.string({
            required_error:"fullName is required"
        }),
        email:z.string({
            required_error:"email is required",
        }),
        contact:z.number({
            required_error:"contact is required",
        }).min(10,{message:"Contact number must be at least 10 characters"}),
        password:z.string()
    })

    const handleCreateClientAccount = async(formData)=>{
   
      let records={
        "fullName": formData.get("fullName"),
        "email":formData.get("email"),
        "contact":+formData.get("contact"),
        "password":formData.get("password"),
      }
        let data = registerSchema.safeParse(records);

        if(!data.success){
            data.error.issues.forEach((issue)=>{
                Toast.error(issue.path[0]+":"+ issue.message)
            });
            return;
        }
       await handleCreateAnAccount(formData)
    }
    return (
        <div className='Admin flex justify-center items-center w-full flex-col'>
            <form method='post' action={handleCreateClientAccount}>
                <h1 className='text-red-600 text-2xl mb-10 font-serif font-bold'>Create an User Account</h1>
                <div className='flex flex-col mb-3 flex-1'>
                    <label htmlFor='fullName' className='font-semibold text-xl font-serif' >Full Name</label>
                    <input type='text' name="fullName" placeholder='Enter Full Name' className='px-3 py-2  rounded-lg border' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='email' className=' font-semibold text-xl font-serif' >Email</label>
                    <input type='email' name="email" placeholder='Enter Email' className='px-3 py-2  rounded-lg border' />
                </div>
                <div className='flex justify-between gap-5'>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='contact' className=' font-semibold text-xl font-serif' >Contact</label>
                        <input type='text' name="contact" placeholder='Enter Contact' className='px-3 py-2  rounded-lg border' />
                    </div>
                  
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='password' className='font-semibold text-xl font-serif' >Password</label>
                    <input type='password' name="password" placeholder='Enter Password' className='px-3 py-2 rounded-lg border' />
                </div>
                <div className='flex justify-center items-center bg-gradient-to-r from-black via-teal-600 to-black  rounded-3xl font-serif'>
                    <button type='submit' className=' py-2 text-white font-sans text-3xl '>REGISTER</button>
                </div>
            </form>
        </div>
    )
}

export default UserRegister