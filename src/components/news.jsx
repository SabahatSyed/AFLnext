// "use client"
import React from "react";
import { getData } from "@/api/FetchData";
export default async function News  ()  {
  const data = await getData()
  // console.log("News is :", data.data);
  return (
    <div>
      <div className="bg-[#EEEEEE] flex flex-col py-6 md:pl-10 pl-5">
        <div className="uppercase font-magistraal font-bold text-xl text-[#002D62] m-8">
          Latest News
        </div>
        {/* {data.data.map((result,index) => ( */}

        {/* // ))} */}
        <div className=" flex gap-5  mr-[1rem] md:mr-0  overflow-x-scroll custom-scrollbar"  >
          {data.data.map((result,index) => (
          <div className=" bg-white md:m-5 m-0 border border-gray-200  rounded-3xl shadow " >
            <div key={index} className="w-[300px]">
            <a href="#">
              <img className="rounded-t-xl w-full" src={result.attributes.image_url} alt="News" />
            </a>
            <div className="p-5 flex flex-col gap-3">
              <a href="#">
                <div className="font-roboto text-base font-bold h-[4rem] overflow-hidden">
                  {result.attributes.title}
                </div>
              </a>
              <p className="font-roboto font-light text-base text-gray-500  text-ellipsis h-[10rem] overflow-hidden">
               {result.attributes.description}...
              </p>
              <div className="font-roboto font-bold text-xl text-[#002D62] inline-flex items-center">
                Keep Reading
                <span className=" ml-3 ">
                  <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                </span>{" "}
              </div>
            </div>
          </div>
          </div>
            ))}
        </div>
        
      </div>
    </div>
  );
};


