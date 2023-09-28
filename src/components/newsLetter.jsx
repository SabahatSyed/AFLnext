import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="bg-[#e1e1e5] py-[5rem]">
        <div className="flex justify-center md:flex-row flex-col gap-16">
          <div className="flex justify-center ">
            <img src="/Home/logo.svg " alt="Logo" />
          </div>
          <div className="font-roboto font-bold text-3xl text-black text-center">
            Subscribe For Updates About The AFL!
            <div className="flex md:justify-around justify-center px-5 md:px-0">
              <div className="w-3/4 m-3">
                <input
                  type="text"
                  placeholder="Email"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  className="bg-[#d0d0d0] rounded-2xl p-4 font-roboto text-base font-bold w-full"
                />
              </div>
              <div className="m-3">
                <button
                  className="font-roboto text-base font-bold text-white p-4 bg-[#002D62] inline-flex rounded-2xl"
                  // onClick={handleSubmit}
                >
                  Subscribe
                  <span className="mt-1 ml-3">
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
