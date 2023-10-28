import Image from 'next/image'
import Reset from './reset'
import Partners from '@/app/partners/partners'
import Footer from '@/components/footer'

export default async function ResetPass() {
  return (
    <div className='h-screen '>
      <Reset />
      <Footer activePage={'login'} />
    </div>
  )
}
