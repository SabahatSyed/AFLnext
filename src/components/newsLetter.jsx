'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { saveEmail } from '@/api/FetchData'
const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    const res = saveEmail({ data: { Subscribers: email } })
    setEmail('')
    alert('Subscribed successfully!')
  }
  return (
    <div>
      <div className=' py-[5rem] bg-bggray dark:bg-bgdark'>
        <div className='flex justify-center md:flex-row flex-col gap-16'>
          <div className='flex justify-center '>
            <img src='/Home/logo.svg' alt='Logo' />
          </div>
          <div className='font-roboto font-bold text-3xl text-black dark:text-white text-center'>
            Subscribe For Updates About The AFL!
            <form action={handleSubmit}>
              <div className='flex flex-col md:flex-row md:justify-around justify-center px-5 md:px-0'>
                <div className='md:w-3/4 m-3'>
                  <input
                    type='text'
                    placeholder='Email'
                    //name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-textInput rounded-2xl p-4 font-roboto text-base font-bold w-full'
                  />
                </div>
                <div className='m-3'>
                  <button
                    type='submit'
                    className='font-roboto text-base font-bold text-white p-4 bg-bgblue inline-flex rounded-2xl items-center justify-center'
                  >
                    Subscribe
                    <span className=' ml-3 w-3 h-3 -mt-1'>
                      <img src='/Home/Union.svg' alt='Arrow svg' />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
