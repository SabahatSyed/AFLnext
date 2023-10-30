import Image from 'next/image'
import Forgot from './forgot'
import Partners from '@/app/partners/partners'
import Footer from '@/components/footer'

export default async function ForgotPass() {
  return (
    <div className='h-screen '>
      <Forgot />
      <Footer activePage={'login'} />
    </div>
  )
}
