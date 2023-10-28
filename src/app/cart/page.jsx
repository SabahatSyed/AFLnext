import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Cart from './cart'
import { getData } from '@/api/FetchData'
import aboutBgImg from 'public/about/about.png'

export default async function NewsMain() {
  //const data = await getData();
  return (
    <div className='h-fit '>
      {/* <Header activepage={"cart"} /> */}
      <div className=' bg-bgNews dark:bg-bgdark w-full'>
        <div className='relative inset-0 w-full h-[40vh] bg-bgdark'>
          <Image
            className='pointer-events-none object-center object-cover z-50'
            src={aboutBgImg}
            alt='about section image'
            priority
            fill
            quality={100}
          />
        </div>
        <Cart />
        <Footer />
      </div>
    </div>
  )
}
