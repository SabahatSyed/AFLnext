import React from "react";

const OurMission = () => {
  return (
    <div className="dark:bg-bgdark">
      <div className="font-roboto flex w-full   justify-around lg:flex-row flex-col  lg:items-center  md:py-16 py-8 md:px-20 p-10 lg:gap-0 gap-5">
        <div className=" md:p-3 p-1 lg:w-[50%] flex justify-center mb-5 md:mb-0">
          <div className="lg:w-4/5">
            <p className="text-headingblue font-magistral font-bold text-4xl mb-5">
              OUR MISSION
            </p>
            <div className="flex flex-col gap-4 font-normal text-base md:text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                fermentum tellus, vel scelerisque eros. Aliquam posuere, risus
                et laoreet semper, erat sem congue leo, nec eleifend diam nibh
                ac erat.
              </p>
              <p>
                Nulla vestibulum, erat nec eleifend sagittis, dolor tortor
                sagittis arcu, non porta massa enim eleifend erat. Phasellus
                venenatis lectus justo, vel mollis nulla dictum a. In vestibulum
                tempor arcu, at convallis quam feugiat vel.
              </p>
              <p>
                {" "}
                Vivamus tempor turpis non magna rhoncus convallis. Maecenas sit
                amet porttitor nunc. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer felis erat, molestie non tincidunt non,
                semper vitae quam. Suspendisse faucibus vel ante ac aliquet.
                Nullam elementum vel ex a egestas. Duis auctor porttitor lectus
                nec egestas. Praesent eget ex sed purus ultricies tincidunt ut
                ac felis. Nam facilisis purus dui, in volutpat ante pretium in.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="md:p-3 lg:w-1/2 lg:flex lg:justify-start">
          <img src="/about/ourmission.svg" className="lg:w-[85%] md:w-full" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="md:ml-20 ml-10 mr-10 pr-5 md:mr-20 w-11/12 overflow-y-hidden overflow-x-scroll flex gap-4 items-center lg:mb-28 lg:mt-14 md:mt-0 mt-6 mb-10 custom-scrollbar md:justify-center">
          <img src="/about/slider1.svg" className="md:w-1/3 w-full" />

          <img src="/about/slider2.svg" className="md:w-1/3 w-full" />

          <img src="/about/slider3.svg" className="md:w-[30%] w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
