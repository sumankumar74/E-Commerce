import ManageBooks from '@/app/components/ManageBooks'
import DbConnect from '@/app/config/DbConnect'
import Book from '@/app/models/Book';
import React from 'react'

DbConnect();

const page = async () => {
    let bookData = await Book.find()
    const handleSearch = async (formData) => {
        "use server"
        let search = formData.get("search")
        let bookData = await Book.find({ "title": { $regex: "*" + search + "*" } }).populate("category")

        revalidatePath("/admin/Books/manage")
    }
    //  const handleBookDelete = async (BookId, formData) => {
    //     const data = await Book.findByIdAndDelete(BookId)

    //     redirect("/admin/Books/manage")
    // }
    return (
        <div className='flex  h-[900px] flex-col '>
            <div className='flex  justify-end  px-10 py-5'>
                <form action={handleSearch} method='POST'>
                    <input type='search' className='border py-2 px-2 mr-1 rounded' placeholder='Search Books...' />
                    <button type='submit' className='bg-green-600 rounded text-white px-3 py-2'>Go</button>
                </form>
            </div>
            <ManageBooks data={bookData}  />
        </div>
    )
}

export default page