import React from "react";

const News = () => {
  return (
    <div>
      <div className="bg-[#EEEEEE] flex flex-col p-6">
        <div className="uppercase font-magistraal font-bold text-xl text-[#002D62] m-8">
          Latest News
        </div>
        <div>
          <div class=" bg-white md:m-5 m-0 border border-gray-200 rounded-lg shadow  w-[336px] h-[412px]">
            <a href="#">
              <img class="rounded-t-lg" src="/Home/news1.svg" alt="News" />
            </a>
            <div class="p-5">
              <a href="#">
                <div class="font-roboto text-base font-bold">
                  AFL Welcomes HUMBL as the official technology partner.
                </div>
              </a>
              <p class="font-roboto font-light text-base text-gray-500">
                HUMBL Selected as the Official Technology Platform of the Arena
                Football League Through 2028 Season...
              </p>
              <div className="font-roboto font-bold text-xl text-[#002D62] inline-flex">
                Keep Reading
                <span className="mt-3 ml-3 ">
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
