import UserRegister from '@/app/components/UserRegister'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center flex-1 w-full py-5'>
        <div className='border shadow-md p-8 w-1/2'>
            <UserRegister/>
        </div>
    </div>
  )
}

export default page