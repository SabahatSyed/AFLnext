import Image from 'next/image'
import homeBgImg from 'public/Home/homebg.png'

const HomeMain = () => {
  return (
    <div className='lg:h-screen dark:bg-bgdark'>
      <div className='lg:h-[86%] md:h-[50%] h-[35%] dark:bg-bgdark'>
        <div className='-translate-y-2 relative lg:h-screen md:h-[600px] h-[300px] flex md:flex-row flex-col'>
          <Image
            className='object-center object-cover pointer-events-none -z-30'
            src={homeBgImg}
            alt='home background image'
            priority
            fill
            quality={100}
          />
          <div className='lg:w-1/2 w-0'></div>
          <div className='flex lg:justify-start justify-center h-full  items-center lg:w-1/2 w-full'>
            <div>
              <div className='   md:leading-[124px] md:text-[82.96px] text-[35px] bg-clip-text text-transparent bg-gradient-text font-magistraal font-extrabold uppercase text-center'>
                AFL IS BACK!
              </div>
              <div className='text-white md:text-[60px] text-[30px] font-extrabold uppercase font-magistraal text-center'>
                are you ready?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
