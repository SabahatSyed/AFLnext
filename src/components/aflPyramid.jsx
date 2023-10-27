import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pyramidImg from 'public/teams/AFLpyramid.svg'
const AflPyramid = () => {
  return (
    <div>
      <div className='w-full h-fit px-4 pb-4 flex flex-col justify-center items-center'>
        {/* <img
          src="/teams/AFLpyramid.svg"
          alt="Afl Pyramid"
          className="w-full "
        /> */}
        <div className='relative w-full h-48 lg:h-[90vh] '>
          <Image
            className='object-center object-contain pointer-events-none'
            src={pyramidImg}
            alt='teams pyramid image'
            priority
            fill
            quality={100}
          />
        </div>

        <div className='mt-4'>
          <Link
            href='/teams'
            className='font-roboto text-base font-semibold    text-headingblue'
          >
            View All
            <span className=' ml-3 '>
              <img
                className='inline-flex '
                src='/Home/UnionBlack.svg'
                alt='Arrow svg '
              />
            </span>{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AflPyramid
