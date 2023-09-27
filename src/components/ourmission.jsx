import React from "react";

const OurMission = () => {
  return (
    <div>
      <div class="font-roboto flex md:grid md:grid-cols-2 gap-7 justify-items-center flex-col justify-center items-center md:gap-2 md:py-16 py-8 md:px-20 p-10">
        <div class=" md:p-3 p-1 ">
          <p class="text-headingblue font-magistral font-bold text-4xl mb-5">
            OUR MISSION
          </p>
          <div class="flex flex-col gap-4 font-normal text-base ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              fermentum tellus, vel scelerisque eros. Aliquam posuere, risus et
              laoreet semper, erat sem congue leo, nec eleifend diam nibh ac
              erat.
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
              nec egestas. Praesent eget ex sed purus ultricies tincidunt ut ac
              felis. Nam facilisis purus dui, in volutpat ante pretium in.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
        <div class="md:p-3 ">
          <img src="/about/ourmission.svg" />
        </div>
      </div>
      <div class="md:ml-20 ml-10 mr-10 md:mr-20 overflow-y-hidden overflow-x-scroll flex gap-4 mb-28 mt-14 custom-scrollbar">
        <img src="/about/slider1.svg" />
        <img src="/about/slider2.svg" />
        <img src="/about/slider3.svg" className="p-5" />
      </div>
    </div>
  );
};

export default OurMission;
