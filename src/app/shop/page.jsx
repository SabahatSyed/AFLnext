import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Shop from './shop'
import { getCustomers } from '@/api/shopifyapis'
import { getProducts } from "@/api/shopifyapis";

export default async function Products() {
  const data =await getProducts()
  const customers = await getCustomers()
  return (
    <div className='h-fit '>
      {/* <Header activepage={"shop"} /> */}
      <div className='h-fit bg-white'>
        <Shop formdata={data} customers={customers} />
        <Footer />
      </div>
    </div>
  )
}
