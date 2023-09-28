import React from "react";

const Partners = () => {
  return (
    <div>
      <div className=" flex flex-col md:py-6 py-4 md:px-14 px-1 ">
        <div className=" uppercase font-magistraal text-4xl text-[#002D62] md:m-8 m-5 text-center">
          Partners
        </div>
        <p className="w-3/4 lg:w-4/5 text-xl mx-auto">
          We appreciate the efforts and contributions of our partners. Please
          visit their websites to view their amazing products or services.
        </p>
        <div className=" flex flex-col gap-10 w-10/12 md:w-11/12 lg:w-7/12 mx-auto mt-10 mb-20">
          <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-32">
            <img src="/partners/athletic.svg" />
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="uppercase text-2xl font-semibold">
                  athletic gaines
                </p>
                <p className="text-sm ">Training Care</p>
              </div>
              <p>
                We appreciate the efforts and contributions of our partners.
                Please visit their websites to view their amazing products or
                services. Interested in becoming a partner? Contact us to find
                out more.
              </p>
              <p className="inline-flex text-headingblue items-center mt-1 text-base font-bold">
                Visit Their Website{" "}
                <span className=" ml-3">
                  <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-32">
            <img src="/partners/humbl.svg" />
            <div className="flex flex-col gap-5 justify-center">
              <div>
                <p className="uppercase text-2xl font-semibold">Humbl</p>
                <p className="text-sm">Technology Partner</p>
              </div>
              <p>
                We appreciate the efforts and contributions of our partners.
                Please visit their websites to view their amazing products or
                services. Interested in becoming a partner? Contact us to find
                out more.
              </p>
              <p className="inline-flex text-headingblue items-center mt-1 text-base font-bold">
                Visit Their Website{" "}
                <span className=" ml-3">
                  <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
