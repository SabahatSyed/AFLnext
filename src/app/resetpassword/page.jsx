import Image from 'next/image'
import Reset from './reset'
import Partners from '@/app/partners/partners'
import Footer from '@/components/footer'
import { getCustomers } from '@/api/shopifyapis'

export default async function ResetPass() {
    const customers = await getCustomers()

  return (
    <div className='h-screen '>
      <Reset customers={customers} />
      <Footer activePage={'login'}  />
    </div>
  )
}
