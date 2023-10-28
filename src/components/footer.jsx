import React from 'react'
import Head from 'next/head'
import { getTeamsData } from '@/api/FetchData'
import Image from 'next/image'
import Link from 'next/link'
export default async function Footer({ activePage }) {
  const data = await getTeamsData()
  return (
    <div className=''>
      {activePage !== 'signup' && activePage !== 'login' && (
        <div className='bg-black dark:bg-bg-dark2 grid grid-cols-8 p-10 md:p-14'>
          <div className='col-start-2 col-span-6 grid md:grid-cols-4 grid-cols-2 gap-7  text-white font-magistral font-bold text-xl'>
            <div className='flex flex-col justify-center items-center gap-6'>
              <p>Division 1</p>
              {data?.data
                ?.filter((item) => item.attributes.division == 1)
                .map((result) => (
                  // <img
                  //   className='scale-125 object-cover'
                  //   src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                  // />
                  <Link
                    href={'/'}
                    className='relative w-16 h-16 transition-all duration-[.15s] ease-in hover:scale-110'
                  >
                    <Image
                      className='object-center object-contain pointer-events-none'
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt='teams images'
                      priority
                      fill
                      quality={100}
                    />
                  </Link>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
              <p>Division 2</p>
              {data?.data
                ?.filter((item) => item.attributes.division == 2)
                .map((result) => (
                  // <img
                  //   className='scale-125 object-cover'
                  //   src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                  // />
                  <Link
                    href={'/'}
                    className='relative w-16 h-16 transition-all duration-[.15s] ease-in hover:scale-110'
                  >
                    <Image
                      className='object-center object-contain pointer-events-none'
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt='teams images'
                      priority
                      fill
                      quality={100}
                    />
                  </Link>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
              <p>Division 3</p>
              {data?.data
                ?.filter((item) => item.attributes.division == 3)
                .map((result) => (
                  // <img
                  //   className='scale-125 object-cover'
                  //   src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                  // />
                  <Link
                    href={'/'}
                    className='relative w-16 h-16 transition-all duration-[.15s] ease-in hover:scale-110'
                  >
                    <Image
                      className='object-center object-contain pointer-events-none'
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt='teams images'
                      priority
                      fill
                      quality={100}
                    />
                  </Link>
                ))}
            </div>
            <div className='flex flex-col  items-center gap-6'>
              <p>Division 4</p>
              {data?.data
                ?.filter((item) => item.attributes.division == 4)
                .map((result) => (
                  // <img
                  //   className='scale-125 object-cover'
                  //   src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                  // />
                  <Link
                    href={'/'}
                    className='relative w-16 h-16 transition-all duration-[.15s] ease-in hover:scale-110'
                  >
                    <Image
                      className='object-center object-contain pointer-events-none'
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt='teams images'
                      priority
                      fill
                      quality={100}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
      <div className=' bg-bgblue dark:bg-bgdark px-14 py-10 flex flex-col gap-7'>
        <div>
          <img src='/Home/logo.svg' className='w-16 mx-auto' />
        </div>
        <div>
          <p className='text-xs text-center text-white font-roboto'>
            © 2023 AFL - Arena Football League. AFL and the AFL shield design
            are registered trademarks of the Arena Football League. The team
            names, logos and uniform designs are registered trademarks of the
            teams indicated. All other AFL-related trademarks are trademarks of
            the Arena Football League.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:flex lg:justify-between lg:w-8/12 gap-2 text-white lg:gap-0 text-xs lg:text-[13px]  mx-auto uppercase font-bold font-magistral text-center place-content-center justify-items-center place-items-center'>
          <Link
            href={'/'}
            className='p-3 cursor-pointer transition-all duration-[.15s] ease-in hover:scale-110'
          >
            privacy policy
          </Link>
          <Link
            href={'/'}
            className='p-3 cursor-pointer transition-all duration-[.15s] ease-in hover:scale-110'
          >
            terms of service
          </Link>
          <Link
            href={'/'}
            className='p-3 cursor-pointer transition-all duration-[.15s] ease-in hover:scale-110'
          >
            subscription terms and conditions
          </Link>
          <Link
            href={'/'}
            className='p-3 cursor-pointer transition-all duration-[.15s] ease-in hover:scale-110'
          >
            media
          </Link>{' '}
          <Link
            href={'https://www.humbl.com/social/'}
            className='p-3  lowercase flex-wrap font-bold flex gap-3 items-center transition-all duration-[.15s] ease-in hover:scale-110'
          >
            <img className='w-36 ' src='/Home/humble.svg' />
          </Link>
        </div>
      </div>
    </div>
  )
}
