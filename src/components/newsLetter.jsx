import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div class="bg-[#e1e1e5] py-[5rem]">
        <div class="flex justify-center md:flex-row flex-col gap-16">
          <div class="flex justify-center ">
            <img src="/Home/logo.svg " alt="Logo" />
          </div>
          <div class="font-roboto font-bold text-3xl text-black text-center">
            Subscribe For Updates About The AFL!
            <div class="flex md:justify-around justify-center px-5 md:px-0">
              <div class="w-3/4 m-3">
                <input
                  type="text"
                  placeholder="Email"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  class="bg-[#d0d0d0] rounded-2xl p-4 font-roboto text-base font-bold w-full"
                />
              </div>
              <div class="m-3">
                <button
                  class="font-roboto text-base font-bold text-white p-4 bg-[#002D62] inline-flex rounded-2xl"
                  // onClick={handleSubmit}
                >
                  Subscribe
                  <span class="mt-1 ml-3">
                    <img src="/Home/Union.svg" alt="Arrow svg" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
