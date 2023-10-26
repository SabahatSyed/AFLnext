import Image from 'next/image'
import LoginPage from './login'
import Partners from '@/app/partners/partners'
import Footer from '@/components/footer'

export default async function Login() {
  return (
    <div className='h-screen '>
      <LoginPage />
      <Footer activePage={'login'} />
    </div>
  )
}
