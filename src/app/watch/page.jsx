import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Watch from '@/app/watch/watch'
import { getTeamsData } from '@/api/FetchData'

export default async function WatchMain() {
  const data = await getTeamsData()
  return (
    <div className='h-fit '>
      <Header activepage={'watch'} />
      <div className=' bg-white dark:bg-bgdark w-full'>
        <img src='/watch/Watchbg.svg' className='w-full' />
        <Watch data={data} />
        <Footer />
      </div>
    </div>
  )
}
