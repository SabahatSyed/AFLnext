import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Partners from '@/app/partners/partners'
import { getPartnersData } from '@/api/FetchData'
import partnersBgImg from 'public/partners/partnersbg.png'

export default async function PartnersMain() {
  const data = await getPartnersData()
  return (
    <div className='h-fit '>
      {/* <Header activepage={"partners"} /> */}
      <div className=' bg-white dark:bg-bgdark w-full'>
        <div className='relative inset-0 w-full h-80'>
          <Image
            className='pointer-events-none object-center object-cover'
            src={partnersBgImg}
            alt='partners bg image'
            priority
            fill
            quality={100}
          />
        </div>
        <Partners data={data} />
        <Footer />
      </div>
    </div>
  )
}
