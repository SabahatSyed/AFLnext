import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import TicketDetails from './details'
import { getData, getTicketsData } from '@/api/FetchData'
import  detailsBgImg from 'public/teams/ticketdetailsbg.png'
import { getProducts } from '@/api/shopifyapis'

export default async function TicketDetailsMain() {
  const data= await getTicketsData();
    const products =await getProducts()
    console.log(products)
  return (
    <div className='h-fit '>
      {/* <Header activepage={"cart"} /> */}
      <div className=' bg-white dark:bg-bgdark w-full'>
        <div className='relative inset-0 w-full h-[348px] bg-bgdark'>
          <Image
            className='pointer-events-none object-center object-cover '
            src={detailsBgImg}
            alt='details section image'
            priority
            fill
            quality={100}
          />
        </div>
        <TicketDetails products={products} />
        <Footer />
      </div>
    </div>
  )
}
