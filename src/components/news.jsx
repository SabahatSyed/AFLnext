import React from "react";

const News = () => {
  return (
    <div>
      <div class="bg-[#EEEEEE] flex flex-col py-6 md:pl-10 pl-5">
        <div class="uppercase font-magistraal font-bold text-xl text-[#002D62] m-8">
          Latest News
        </div>
        <div class=" grid grid-cols-1 md:grid-cols-5 mr-[1rem] md:mr-0 justify-between overflow-x-scroll custom-scrollbar">
          <div class=" bg-white md:m-5 m-0 border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img class="rounded-t-lg" src="/Home/news1.svg" alt="News" />
            </a>
            <div class="p-5 flex flex-col gap-3">
              <a href="#">
                <div class="font-roboto text-base font-bold ">
                  AFL Welcomes HUMBL as the official technology partner.
                </div>
              </a>
              <p class="font-roboto font-light text-base text-gray-500 ">
                HUMBL Selected as the Official Technology Platform of the Arena
                Football League Through 2028 Season...
              </p>
              <div class="font-roboto font-bold text-xl text-[#002D62] inline-flex items-center">
                Keep Reading
                <span class=" ml-3 ">
                  <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
