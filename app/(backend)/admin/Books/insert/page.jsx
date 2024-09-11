import InsertBooks from '@/app/components/InsertBooks'
import Category from '@/app/models/Category'
import DbConnect from '@/app/config/DbConnect';


const page = async () => {

  DbConnect();

  let categoryData = await Category.find()

  return (
    <>
      <div className='flex justify-center items-center h-[999px]  '>
        <InsertBooks  categoryData={categoryData} />
      </div>
    </>
  )
}

export default page