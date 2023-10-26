import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Teams from '@/app/teams/teams'
import { getTeamsData } from '@/api/FetchData'
import teamsBgImg from 'public/teams/teamsbg.png'

export default async function TeamsMain() {
  const data = await getTeamsData()
  return (
    <div className='h-fit '>
      {/* <Header activepage={"teams"} /> */}
      <div className=' bg-white dark:bg-bgdark w-full'>
        <div className='relative inset-0 w-full h-80'>
          <Image
            className='pointer-events-none object-center object-cover'
            src={teamsBgImg}
            alt='teams bg image'
            priority
            fill
            quality={100}
          />
        </div>
        <Teams data={data} />
        <Footer />
      </div>
    </div>
  )
}
