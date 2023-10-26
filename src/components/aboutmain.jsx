import React from 'react'
import Image from 'next/image'
import aboutBgImg from 'public/about/about.png'
const AboutMain = () => {
  return (
    // <div className=' w-full'>
    //   <img src='/about/aboutbg.svg' className='w-full' />
    // </div>
    <div className='relative inset-0 w-full h-1/2 bg-bgdark'>
      <Image
        className='pointer-events-none object-center object-cover z-50'
        src={aboutBgImg}
        alt='about section image'
        priority
        fill
        quality={100}
      />
    </div>
  )
}

export default AboutMain
