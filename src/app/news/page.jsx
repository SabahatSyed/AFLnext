import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import News from '@/components/news'
import newsBgImg from 'public/news/newsbg.png'
import { getData } from '@/api/FetchData'
import NewsGrid from '@/components/newsGrid'

export default async function NewsMain() {
  const data = await getData()
  return (
    <div className='h-fit '>
      {/* <Header activepage={"news"} /> */}
      <div className='h-screen  bg-white'>
        <div className='bg-cover relative lg:h-[86%] md:h-1/2 h-2/5 grid lg:grid-cols-3 grid-cols-1 text-white font-roboto md:p-20 p-10 md:place-items-end'>
          <Image
            className='object-center object-cover pointer-events-none '
            src={newsBgImg}
            alt='news background image'
            priority
            fill
            quality={100}
          />
          <div className='flex flex-col gap-4 z-10'>
            <p className='md:text-3xl text-2xl font-bold leading-tight'>
              Arena Football League Relaunch Press release
            </p>
            <p className=''>
              Lee A. Hutton III To Serve As Commissioner & Make History As First
              Black Commissioner to Lead Professional Sports League in...
            </p>
            <p className='flex items-center font-medium '>
              Keep Reading
              <span className=' mx-3 '>
                <img src='/Home/UnionWhite.svg' alt='Arrow svg ' />
              </span>{' '}
            </p>
          </div>
        </div>
        {/* <News data={data} /> */}
        <NewsGrid data={data} />
        <Footer />
      </div>
    </div>
  )
}
