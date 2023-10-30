import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pyramidImg from 'public/teams/AFLpyramid.png'
import { BiSolidChevronRight } from 'react-icons/bi'
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

        <div className='flex items-center gap-3 cursor-pointer transition-all duration-[.15s] ease-in hover:scale-110'>
          <Link
            href='/teams'
            className='p-4 font-roboto text-base font-semibold text-headingblue flex items-center gap-1'
          >
            <span>View All</span>
            <BiSolidChevronRight className='h-6 w-6' strokeWidth={1} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AflPyramid
