import { redirect } from 'next/navigation';


const page = async({params}) => {

let {category_id} = params
const singleCategory =  await fetch(`http://localhost:3000/api/admin/category/${category_id}`);
const res =await singleCategory.json();
 
const handleUpdate = async(formData)=>{
    "use server"
    let catTitle = formData.get("catTitle");
    let catDescription = formData.get("catDescription")

    let data= {catTitle,catDescription};

    let res = await fetch(`http://localhost:3000/api/admin/category/${category_id}`,{method:"PUT",body:JSON.stringify(data)});
    let UpdateData = await res.json()

    console.log(UpdateData.msg)

    redirect("/admin/Books/category/manage")
}

  return (
    <div className='flex justify-center items-center  w-full flex-col mt-[-10%]'>
             <h1 className='text-red-900 text-3xl mb-5 font-serif font-bold'>Edit Category</h1>
           <div className="border border-black p-10 rounded-xl w-1/3">
           <form method='POST' action={handleUpdate}>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='catTitle' className=' font-semibold text-xl' >Category Title</label>
                    <input type='text' name='catTitle' defaultValue={res.catTitle} placeholder='Enter Category Title' className='px-3 py-2 text-black rounded-lg border' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label htmlFor='catDescription' className=' font-semibold text-xl' >Category Description</label>
                    <input type='text' name='catDescription' defaultValue={res.catDescription} placeholder='Enter Category Description' className='px-3 py-2 text-black rounded-lg border' />
                </div>
                <div className='flex justify-center items-center bg-gradient-to-r from-black via-teal-400 to-red-600 rounded-2xl '>
                    <button type='submit' className=' py-3 text-white font-sans text-2xl     '>Create Category</button>
                </div>
            </form>
           </div>
        </div>
  )
}

export default page