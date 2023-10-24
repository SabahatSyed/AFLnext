import Link from "next/link";
import React from "react";
export default async function Tickets({ data }) {
  return (
    <div>
      <div className=" flex flex-col py-6 md:px-14 px-7">
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white m-8 text-center">
          Tickets
        </div>
        <div className=" flex flex-col gap-10">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   lg:gap-4 gap-7 font-roboto my-6">
              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                    Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {data.data.map((result, index) => (
                <div key={index} className=" ">
                  <div style={{backgroundColor:`#${result.attributes.bgcolor}`}} className=" flex flex-col gap-3 px-8 py-5 rounded-xl place-items-center  justify-center items-center">
                    <img
                      src={`https://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt="Tickets"
                      className="h-28 w-32"
                    />

                    <Link href={"https://" + result.attributes.website}>
                      <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                        Get Tickets{" "}
                        <span className=" text-white ml-3">
                          <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                        </span>{" "}
                      </p>
                    </Link>
                  </div>

                  {/* <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div> */}
                </div>
              ))}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4 ">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}

              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-outlaws flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/outlaws.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                    </span>{" "}
                  </p>
                </div>
              </div> */}
              {/* <div className=" w-full flex flex-col gap-4">
                <div className="bg-hawks flex flex-col gap-3 px-8 py-5 rounded-xl justify-center items-center">
                  <img src="/teams/hawks.svg" />
                  <p className="inline-flex text-white items-center mt-1 text-base font-bold">
                  Get Tickets{" "}
                    <span className=" text-white ml-3">
                      <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
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
