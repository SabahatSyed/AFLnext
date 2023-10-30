import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export function News({ data }) {
  return (
    <div>
      <div className="bg-bgNews dark:bg-bg-dark2 flex flex-col py-6 md:pl-10 pl-5">
        <div className="uppercase font-magistraal font-bold text-xl text-headingblue dark:text-white m-8">
          Latest News
        </div>
        {/* {data.data.map((result,index) => ( */}

        {/* // ))} */}
        <div className="py-5 flex gap-[29px] overflow-x-scroll md:mr-0 custom-scrollbar ">
          {data?.data?.map((result, index) => (
            <div
              key={index}
              className=" bg-white h-[412px] min-w-[336px] md:min-w-[310px] dark:bg-bgdark rounded-3xl shadow overflow-hidden">
              <div className="  ">
                {/* <img
                    className=' w-full rounded-t-3xl'
                    src={result.attributes.image_url}
                    alt='News'
                  /> */}
                <div className="relative w-full h-[212px]">
                  <Image
                    className="object-center object-cover pointer-events-none"
                    src={result.attributes.image_url}
                    alt="news"
                    priority
                    fill
                    quality={100}
                  />
                </div>

                <div className="px-5 py-8  flex flex-col gap-3">
                  <div className="font-roboto text-lg font-bold overflow-hidden line-clamp-3">
                    {result.attributes.title}
                  </div>
                  <p className="font-roboto font-light text-sm text-gray-500 line-clamp-3 overflow-hidden">
                    {result.attributes.description} Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Accusantium, dolores ut.
                    Tempore similique molestiae excepturi facilis commodi
                    assumenda sunt architecto tenetur accusantium, dignissimos,
                    illum, perspiciatis et amet provident ipsa accusamus.
                  </p>
                  <Link
                    href={"/"}
                    className="font-roboto font-bold text-base py-3 text-headingblue dark:text-bgNews inline-flex items-center gap-2 transition-all duration-[.15s] ease-in hover:scale-110 w-fit">
                    <span>Keep Reading </span>
                    <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News
