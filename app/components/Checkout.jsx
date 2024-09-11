"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { z } from "zod";
import { handleCreateAnAddress } from '../action'


const Checkout = () => {

    let router = useRouter();

    let [orderItems, setOrderItems] = useState([]);
    let [address, setAddress] = useState([]);
    let [refresh, setRefresh] = useState(false);


    useEffect(() => {
        const callingData = async () => {
            try {
                const orderData = await fetch("http://localhost:3000/api/order", { cache: "no-cache" });
                const res = await orderData.json();
                setOrderItems(res.orderItems);

                //calling user address
                const addressData = await fetch("http://localhost:3000/api/address",{cache:"no-cache"});
                const addressResponse = await addressData.json();
                setAddress(addressResponse.address);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        callingData();
    }, [refresh])

    // for total calculation
    const totalAmount = orderItems?.reduce((acc, orderItem) => {
        return acc + orderItem.bookId.price * orderItem.quantity;
    }, 0);

    const totalDiscountAmount = orderItems?.reduce((acc, orderItem) => {
        return acc + orderItem.bookId.discountPrice * orderItem.quantity;
    }, 0);

    const discountAmount = totalAmount - totalDiscountAmount;
    const taxAmount = totalDiscountAmount * 0.18;
    const TotalPayableAmount = totalDiscountAmount + taxAmount;


    const AddressValidation = z.object({
        name: z.string(),
        contact: z.number(),
        area: z.string(),
        city: z.string(),
        state: z.string(),
        pincode: z.number().min(6,),
        landmark: z.string(),
    })
    const handleCreateClientAddress = async (formData) => {
        // console.log(orderItems[0].userId._id)
        formData.set("user", orderItems[0].userId._id);
        let records = {
            name: formData.get("name"),
            contact: +formData.get("contact"),
            area: formData.get("area"),
            state: formData.get("state"),
            landmark: formData.get("landmark"),
            city: formData.get("city"),
            pincode: +formData.get("pincode")
        };
        let data = AddressValidation.safeParse(records);
        if (!data.success) {
            data.error.issues.forEach((issue) => {
                toast.error(issue.path[0] + ":" + issue.message)
            })
            return;
        }
        await handleCreateAnAddress(formData)
    }

    const handleUpdateAddress= async(address)=>{
        let updateAddress = await fetch("http://localhost:3000/api/order",{method:"PUT", body:JSON.stringify({address}), cache:"no-cache"})
        let respAddress = await updateAddress.json();
         
        if(respAddress.order.address){
            toast.success("Address updated Successfully")
        }
    }
    return (
        <>
            <div className="flex flex-1 my-3 ">
                <h1 className="text-2xl font-semibold text-green-500">Checkout ({orderItems?.length ?? "0"})</h1>
            </div>
            <div className='flex flex-1 gap-2'>
                <div className="w-4/6">
                    <div className='flex flex-col gap-1 shadow-md border p-2 '>
                        <h2 className='text-2xl font-semibold border-b py-2 px-5 '>Enter delivery Address</h2>
                       {
                        (address.length>0)&&
                        <div className='grid grid-cols-3 gap-2'>
                        {
                            address.map((add,i)=>(
                                <div className='shadow flex-1 h-auto' key={i}>
                            <div className='px-4 py-2'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-lg font-semibold'>{add.name}</h3>
                                    <input type='radio' onClick={()=>handleUpdateAddress(add._id)} className='form-radio h-5 w-5 text-blue-400' name='address'/> 
                                </div>
                                <p className='mt-1 text-sm text-slate-500 '>{`(+91) ${add.contact}, ${add.area}, ${add.city}, ${add.state}, -${add.pincode},
                                Landmark: ${add.landmark}`}</p>
                            </div>
                        </div>
                            ))
                        }
                        
                    </div>
                       }
                    </div>
                    {address.length == 0 && <h4 className='text-2xl text-slate-500 px-8 py-2 font-semibold font-serif'>No Saved Address Yet</h4>}
                    <div className="flex flex-col ">

                        <div className='flex flex-col gap-1 shadow-md border'>
                            <h2 className='text-2xl font-semibold border-b py-2 px-5 '>Enter delivery Address</h2>
                            <form action={handleCreateClientAddress} method='post' className='flex flex-col '>
                                <div className='flex'>
                                    <div className=' flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='name' >Name:</label>
                                        <input type='text' name='name' id='name' className='border w-full px-3 py-2' />
                                    </div>
                                    <div className=' flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='contact' >Contact:</label>
                                        <input type='text' name='contact' id='contact' className='border w-full px-3 py-2' />
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className=' flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='area' >Street/Area:</label>
                                        <input type='text' name='area' id='area' className='border w-full px-3 py-2' />
                                    </div>
                                    <div className='flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='landmark' >LandMark:</label>
                                        <input type='text' name='landmark' id='landmark' className='border w-full px-3 py-2' />
                                    </div>

                                </div>
                                <div className='flex'>
                                    <div className=' flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='city'>City:</label>
                                        <input type='text' name='city' id='city' className='border w-full px-3 py-2' />
                                    </div>
                                    <div className='flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='state'>State:</label>
                                        <input type='text' name='state' id='state' className='border w-full px-3 py-2' />
                                    </div>
                                    <div className='flex-1 gap-5 py-1 px-5 '>
                                        <label htmlFor='pincode'>Pincode:</label>
                                        <input type='text' name='pincode' id='pincode' className='border w-full px-3 py-2' />
                                    </div>

                                </div>
                                <div className='flex justify-between px-4 py-2 gap-5'>
                                    <button type='submit' className='bg-slate-400 hover:bg-teal-500 px-4 py-2  flex-1 rounded-md  '>Clear Form</button>
                                    <button type='submit' className='bg-teal-500 hover:bg-teal-600 px-4 py-2 text-white flex-1 rounded-md'>Save Address</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    orderItems &&
                    <div className="w-2/6">
                        <div className='bg-white border rounded flex px-4 shadow-md  flex-col'>
                            <h2 className='font-semibold text-md p-2 border-b'>Order Information</h2>
                            {
                                orderItems &&
                                orderItems.map((orderItem, i) => (


                                    <div className="w-ful p-2 " key={i}>
                                        <div className="flex flex-col">
                                            <h2 className='text-md font-semibold'>{i + 1}. {orderItem.bookId.title}</h2>

                                            <div className='flex gap-2'>
                                                <div >
                                                    <span className="text-md">{orderItem.quantity}</span> X
                                                    <span className="font-semibold px-1">₹{orderItem.bookId.discountPrice} </span> =
                                                    <span className="font-semibold px-1">₹{orderItem.bookId.discountPrice * orderItem.quantity} </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 mt-3">

                                            </div>
                                        </div>

                                    </div>

                                )
                                )
                            }
                            <hr></hr>
                            <div className='flex p-4  '>
                                <div className="flex justify-between gap-2">
                                    <h3 className="text-xl font-bold">Total Payable Amount:</h3>
                                    <h3 className="text-xl font-bold "> ₹ {TotalPayableAmount.toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>


                        <div className="flex gap-4 my-4">
                            <Link href="/cart" className='bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 flex-1 text-center'>
                                Go Back
                            </Link>
                            <Link href="/checkout" className='bg-green-600 text-white px-3 py-2 flex-1 text-center'>
                                Payment
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Checkout