const AdminRegister = async ({handleSubmit}) => {
   

    return (
        <div className='Admin flex justify-center items-center w-full mt-10 flex-col'>
           
            <div className='border  border-black p-10 w-1/2 rounded-xl'>
                <form method='POST' action={handleSubmit}>
                <h1 className='text-indigo-700 text-2xl mb-5 font-serif font-bold'>Create an Admin Account</h1>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='fullName' className='text-red-600 font-semibold text-xl font-serif' >Full Name</label>
                        <input type='text' name="fullName" placeholder='Enter Full Name' className='px-3 py-2  rounded-lg border' />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='email' className='text-red-600 font-semibold text-xl font-serif' >Email</label>
                        <input type='email' name="email" placeholder='Enter Email' className='px-3 py-2  rounded-lg border' />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='contact' className='text-red-600 font-semibold text-xl font-serif' >Contact</label>
                        <input type='text' name="contact" placeholder='Enter Contact' className='px-3 py-2  rounded-lg border' />
                    </div><div className='flex flex-col mb-3'>
                        <label htmlFor='password' className='text-red-600 font-semibold text-xl font-serif' >Password</label>
                        <input type='password' name="password" placeholder='Enter Password' className='px-3 py-2 rounded-lg border' />
                    </div>
                    <div className='flex justify-center items-center bg-gradient-to-r from-black via-green-500 to-black  rounded-3xl font-serif'>
                        <button type='submit' className=' py-2 text-white font-sans text-3xl '>REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default AdminRegister