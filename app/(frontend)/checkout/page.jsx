import CartPage from '@/app/components/CartPage'       
import Checkout from '@/app/components/Checkout'

const page = async() => {
  
    return (
        <div className='flex  w-full px-[10%] mt-5 flex-col'>
            <Checkout />
        </div>
    )
}

export default page