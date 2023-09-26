import React from "react";

const HomeMain = () => {
  return (
    <div class="md:h-[86%] h-[90%]">
      <div class="bg-[url('/Home/COVERafl.svg')] bg-cover bg-no-repeat h-full flex md:flex-row flex-col">
        <div class="md:w-1/2 w-0"></div>
        <div class="flex justify-start h-full items-center md:w-1/2 w-full">
          <div>
            <div class="   md:leading-[124px] md:text-[82.96px] text-[45px] bg-clip-text text-transparent bg-gradient-text font-magistraal font-extrabold uppercase text-center">
              AFL IS BACK!
            </div>
            <div class="text-white md:text-[60px] text-[40px] font-extrabold uppercase font-magistraal text-center">
              are you ready?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
