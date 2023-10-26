import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Live from '@/app/live/live'
import { getTeamsData } from '@/api/FetchData'

export default async function WatchMain() {
  const data = await getTeamsData()
  return (
    <div className='h-fit '>
      <Header />
      <div className=' bg-white dark:bg-bgdark w-full'>
        <Live data={data} />
        <Footer />
      </div>
    </div>
  )
}
