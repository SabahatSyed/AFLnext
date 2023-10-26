'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Auth, Amplify } from 'aws-amplify'
import awsconfig from '../../aws-exports'
Amplify.configure(awsconfig)

export default function Login({ data }) {
  const history = useRouter()
  const [email, setEmail] = useState('')
  const [msg, setmsg] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async () => {
    try {
      setmsg('')

      if (email != '' && password != '') {
        await Auth.signIn({ username: email, password })
        history.push('/')
      } else alert('Please fill all Fields')
    } catch (error) {
      setmsg(error.message)
      console.error('Error signing in:', error)
    }
  }

  return (
    <div className="bg-[url('/auth/bg.svg')] py-20 font-roboto">
      <div className=' w-11/12 md:w-3/5 lg:w-2/5 rounded-3xl px-6 py-10 md:p-16 bg-white mx-auto flex flex-col gap-7 text-black'>
        <img src='/home/logo.svg' className='h-28 w-28' />
        <div className='gap-2 flex flex-col'>
          <label className='text-xs font-bold'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={'jamesturner@gmail.com'}
            label={'Email'}
            className='h-8 p-6 bg-formbg text-formtext rounded-md'
          />
        </div>
        <div className='gap-2 flex flex-col'>
          <label className='text-xs font-bold '>Password</label>

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder={'*********'}
            className='h-8 p-6 bg-formbg text-formtext rounded-md'
          />
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex gap-3 items-center'>
            <input type='checkbox' className='h-5 w-5 text-blue-500' />
            <label>Remember Me</label>
          </div>
          <div>
            <label>Forget Password?</label>
          </div>
        </div>
        <p className='text-sm font-bold text-green-900 w-1/3'>{msg}</p>

        <button
          onClick={() => handleLogin()}
          className='bg-bgblue text-white uppercase p-4 rounded-md '
        >
          Login
        </button>

        <p className='text-center w-full'>Or Login With</p>
        <div className='w-full flex items-center justify-between gap-7 '>
          <button className='bg-bgblue text-white   rounded-md w-1/2 flex items-center justify-center gap-5 p-3'>
            <img src='/auth/facebook.svg' />
            <span classname='text-white font-bold'>Facebook</span>
          </button>
          <button className='bg-googlebg text-white rounded-md w-1/2 flex items-center justify-center gap-5 p-1'>
            <img src='/auth/google.svg' className='mt-2' />
            <span classname='text-white font-bold'>Google</span>
          </button>
        </div>
        <p className='text-base flex justify-center'>
          Don't have an account?
          <span
            onClick={() => history.push('/Signup')}
            className=' text-bgblue font-semibold cursor-pointer mx-1'
          >
            {' '}
            Register Now
          </span>
        </p>
      </div>
    </div>
  )
}
