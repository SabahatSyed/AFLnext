import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className=" py-[5rem] bg-bggray">
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
                  className="bg-textInput rounded-2xl p-4 font-roboto text-base font-bold w-full"
                />
              </div>
              <div className="m-3">
                <button
                  className="font-roboto text-base font-bold text-white p-4 bg-bgblue inline-flex rounded-2xl"
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
