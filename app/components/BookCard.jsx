import Image from 'next/image'
import Link from 'next/link'

const BookCard = async({ data }) => {

  return (
    <div className='flex Cards flex-col  '>
      <div className='flex border border-slate-300  flex-col p-5 justify-center  '>
        <div className='images mb-2 block relative h-64 rounded overflow-hidden'>
          <Image src={`/image/${data.featuredImage}`} width={250} height={0} alt='' className='block relative h-64 rounded overflow-hidden' />
        </div>
        <h3 className='text-teal-700 text-sm mb-2' >{data.category.catTitle}</h3>
        <Link href={`/view/${data._id}`} className='text-black hover:text-orange-600 font-semibold text-xl mb-2 truncate'>{data.title}</Link>
        <h2 className='text-gray-600 mb-2 text-sm'>{data.author}</h2>
        <div className='flex justify-start items-start flex-col mb-2'>
          <p className='text-sm text-red-700 font-semibold'><del>₹{data.price}</del></p>
          <p className='text-2xl text-black font-bold'>₹{data.discountPrice}</p>
        </div>
        <p className='text-slate-700 text-md mb-3 ' >{data.description.substr(0, 50)}</p>
        {/* <div className='flex justify-between items-start mb-2 '>
          <h3 className='text-green-700 text-sm font-semibold'>Status: {data.status}</h3>
        </div> */}
        <div className='flex justify-between'>
        <Link href="" className='bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700' >Buy now</Link>
      </div>
      </div>
      
    </div>
  )
}

export default BookCard