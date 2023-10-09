import React from "react";
import { getPartnersData } from "@/api/FetchData";
export default async function Partners() {
  const data = await getPartnersData();
  //  console.log("Partners  :", data.data[1].attributes.Image);

  // const imagesData = await res.json();
  // const firstImage = imagesData[0]; // Assuming you want the first image
  // const imageUrl = firstImage.attributes.Image[0].url; // Adjust the field name as needed
  // Now you can use the imageUrl in your Next.js app
  // console.log(data.data[1].attributes.Image.data[0].attributes);

  return (
    <div>
      <div className=" flex flex-col md:py-6 py-4 md:px-14 px-1 ">
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white md:m-8 m-5 text-center">
          Partners
        </div>
        <p className="w-3/4 lg:w-4/5 text-xl mx-auto">
          We appreciate the efforts and contributions of our partners. Please
          visit their websites to view their amazing products or services.
        </p>
        <div className=" flex flex-col gap-10 w-10/12 md:w-11/12 lg:w-7/12 mx-auto mt-10 mb-20">
          {data.data.map((result, index) => (
            // console.log(result.attributes.Image.url);
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-10 lg:gap-32"
            >
              <img
                src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                alt="athletic gaines"
              />
              {/* {ticket.attributes.Image.data[0].attributes.url} */}
              <div className="flex flex-col gap-5 justify-center font-roboto">
                <div>
                  <p className="uppercase text-2xl font-semibold">
                    {result.attributes.Title}
                  </p>
                  <p className="text-sm ">{result.attributes.Label}</p>
                </div>
                <p className="text-[16px]">{result.attributes.Description}</p>
                <p className="inline-flex text-headingblue dark:text-white items-center mt-1 text-base font-bold">
                  Visit Their Website{" "}
                  <span className=" ml-3">
                    <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}

          {/* <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-32">
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
              <p className="inline-flex text-headingblue dark:text-white items-center mt-1 text-base font-bold">
                Visit Their Website{" "}
                <span className=" ml-3">
                  <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                </span>{" "}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
