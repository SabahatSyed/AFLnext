import Image from 'next/image'
import SignupPage from './signup'
import Partners from '@/app/partners/partners'
import Footer from '@/components/footer'

export default async function Signup() {
  return (
    <div className='h-screen '>
      <SignupPage />
      <Footer activePage={'signup'} />
    </div>
  )
}
