import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export function NewsGrid({ data }) {
  return (
    <div>
      <div className='bg-bgNews dark:bg-bg-dark2 flex flex-col py-6 md:pl-10 pl-5'>
        <div className='uppercase font-magistraal font-bold text-xl text-headingblue dark:text-white m-8'>
          Latest News
        </div>
        {/* {data.data.map((result,index) => ( */}

        {/* // ))} */}
        <div className='py-5 flex gap-5 mr-[1rem] flex-wrap justify-center md:justify-start md:mr-0 '>
          {data?.data?.map((result, index) => (
            <div
              key={index}
              className=' bg-white w-[300px] md:w-[350px] dark:bg-bgdark md:m-5 m-0 border border-gray-400 rounded-3xl shadow overflow-hidden'
            >
              <div className=' min-h-96 '>
                {/* <img
                    className=' w-full rounded-t-3xl'
                    src={result.attributes.image_url}
                    alt='News'
                  /> */}
                <div className='relative w-full h-48'>
                  <Image
                    className='object-center object-cover pointer-events-none'
                    src={result.attributes.image_url}
                    alt='news'
                    priority
                    fill
                    quality={100}
                  />
                </div>

                <div className='px-5 py-8  flex flex-col gap-3'>
                  <div className='font-roboto text-lg font-bold overflow-hidden line-clamp-3'>
                    {result.attributes.title}
                  </div>
                  <p className='font-roboto font-light text-sm text-gray-500 line-clamp-3 overflow-hidden'>
                    {result.attributes.description} Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Accusantium, dolores ut.
                    Tempore similique molestiae excepturi facilis commodi
                    assumenda sunt architecto tenetur accusantium, dignissimos,
                    illum, perspiciatis et amet provident ipsa accusamus.
                  </p>
                  <Link
                    href={'/'}
                    className='font-roboto font-bold text-base py-3 text-headingblue dark:text-bgNews inline-flex items-center gap-2 transition-all duration-[.15s] ease-in hover:scale-110 w-fit'
                  >
                    <span>Keep Reading </span>
                    <img src='/Home/UnionBlack.svg' alt='Arrow svg ' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsGrid