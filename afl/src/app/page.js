import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <div className='h-fit w-screen'>
      <Header/>
      <div className='h-screen  bg-white'>page</div>
      <Footer/>
    </div>
  )
}
