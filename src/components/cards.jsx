import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-2 py-5 lg:px-0 md:px-5 dark:bg-bgdark">
        <div className="lg:w-[600px] md:w-[500px] w-[370px] h-[350px] p-4">
          <div className="h-full p-6 rounded-lg  rounded-r-2xl bg-[url('/Home/cardBg.svg')]  bg-cover flex items-end">
            <div>
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/> */}
              <h3 className=" font-bold text-3xl font-roboto text-white">
                Gear Up With AFL Merch!
              </h3>
              <h2 className="font-roboto font-normal text-base text-white">
                Online shop coming soon...
              </h2>
              <div className="mt-5 ">
                <div className="font-roboto font-bold text-xl text-white inline-flex">
                  Coming Soon
                  <span className="mt-3 ml-3">
                    <img src="/Home/Union.svg" alt="Arrow svg " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[600px] md:w-[500px] w-[370px] h-[350px] p-4">
          <div className="h-full p-6 rounded-lg  rounded-r-2xl bg-[url('/Home/cardBg1.svg')]  bg-cover flex items-end">
            <div>
              {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/> */}
              <h3 className=" font-bold text-3xl font-roboto text-white">
                Get your tickets now!
              </h3>
              <h2 className="font-roboto font-normal text-base text-white">
                Tickets available soon...
              </h2>
              <div className="mt-5 ">
                <div className="font-roboto font-bold text-xl text-white inline-flex">
                  Tickets
                  <span className="mt-3 ml-3">
                    <img src="/Home/Union.svg" alt="Arrow svg " />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
