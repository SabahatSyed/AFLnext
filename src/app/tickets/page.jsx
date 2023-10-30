import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Tickets from '@/app/tickets/tickets'
import { getTicketsData } from '@/api/FetchData'
import ticketsBgImg from 'public/teams/ticketsbg.png'

export default async function TicketsMain() {
  const data = await getTicketsData()

  return (
    <div className='h-fit '>
      {/* <Header activepage={"tickets"} /> */}
      <div className=' bg-white dark:bg-bgdark w-full'>
        <div className='relative inset-0  h-[501px] m-24'>
          <Image
            className='pointer-events-none object-center'
            src={ticketsBgImg}
            alt='tickets bg image'
            priority
            fill
            quality={100}
          />
        </div>
        <Tickets data={data} />
        <Footer />
      </div>
    </div>
  )
}
