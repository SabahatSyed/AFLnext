import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Tickets({ data, products }) {
  return (
    <div>
      <div className=" flex flex-col pb-6 md:px-14 px-7">
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white mx-8 mb-8 text-center">
          Tickets
        </div>
        <div className=" flex flex-col gap-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   lg:gap-4 gap-7 font-roboto my-6">
              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                    Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {products?.products
                ?.filter((item) => item.product_type.includes("Season Tickets"))
                .map((result, index) => (
                  <div key={index} className=" ">
                    <Link
                      href={`/ticketdetails?id=${result.admin_graphql_api_id}`}
                      className=" flex flex-col gap-3 rounded-xl place-items-center  justify-center items-center transition-all duration-[.15s] ease-in hover:scale-110">
                      <img
                        src={result.images[4]?.src}
                        alt="Tickets"
                        className="h-[186px] w-[298px]"
                      />

                      <div>
                        <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                          Get Tickets{" "}
                          <span className=" text-white ml-3">
                            <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                          </span>{" "}
                        </p>
                      </div>
                    </Link>

                    {/* <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div> */}
                  </div>
                ))}
              {/*}   {data.data.map((result, index) => (
                <div key={index} className=" ">
                  <Link
                    target="_blank"
                    href={"https://" + result.attributes.website}
                    style={{ backgroundColor: `#${result.attributes.bgcolor}` }}
                    className=" flex flex-col gap-3 px-8 py-5 rounded-xl place-items-center  justify-center items-center transition-all duration-[.15s] ease-in hover:scale-110">
                    <img
                      src={`https://afl2024-cms.logixsy.com${result.attributes.Image?.data[0]?.attributes.url}`}
                      alt="Tickets"
                      className="h-28 w-32"
                    />

                    <div>
                      <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                        Get Tickets{" "}
                        <span className=" text-white ml-3">
                          <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                        </span>{" "}
                      </p>
                    </div>
                  </Link>

                  {/* <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div> 
                </div>
              ))}*/}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img     src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img     src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
