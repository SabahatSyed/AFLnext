import React from "react";
import Link from "next/link";
import Image from "next/image";
import pyramidImg from "public/teams/AFLpyramid.png";
export default function Teams({ data }) {
  return (
    <div>
      <div className="w-full h-fit px-4 pb-4 flex flex-col justify-center items-center">
        {/* <img
          src="/teams/AFLpyramid.svg"
          alt="Afl Pyramid"
          className="w-full "
        /> */}
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white mx-8 pb-4 pt-12 text-center">
          Teams
        </div>
        <div className="relative w-full h-48 lg:h-[90vh] ">
          <Image
            className="object-center object-contain pointer-events-none"
            src={pyramidImg}
            alt="teams pyramid image"
            priority
            fill
            quality={100}
          />
        </div>
      </div>
      <div className=" flex flex-col py-6 px-14">
        <div className=" flex flex-col gap-10">
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              West
            </p>
            <div className="gap-[29px] flex font-roboto my-6 overflow-x-scroll custom-scrollbar">
              {data?.data
                ?.filter((item) => item.attributes.division == 1)
                .map((result, index) => (
                  <Link
                    target="_blank"
                    href={"https://" + result.attributes?.Url || ""}
                    key={index}
                    className="  flex flex-col justify-center  transition-all duration-[.15s] ease-in hover:scale-90 h-[320px] w-[290px] gap-[29px] ">
                    <>
                      <div
                        style={{
                          backgroundColor: `#${result.attributes.bgcolor}`,
                        }}
                        className={`
                     flex flex-col gap-3  p-5 rounded-xl justify-center items-center h-[186px] w-[290px] `}>
                        <img
                          src={`https://afl2024-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                          alt="Teams"
                          className="h-24"
                        />
                        <Link href={"https://" + result.attributes?.Url || ""}>
                          <p className="inline-flex text-white items-center mt-1">
                            Visit Their Website{" "}
                            <span className=" text-white ml-3">
                              <img
                                src="/Home/UnionWhite.svg"
                                alt="Arrow svg "
                              />
                            </span>
                          </p>
                        </Link>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-3 ">
                        <p className="uppercase font-bold text-lg ">
                          {result.attributes.Label}
                        </p>
                        <Link
                          href={"https://" + result.attributes.Url || ""}
                          className="text-headingblue dark:text-white font-bold text-sm">
                          {result.attributes.Url}
                        </Link>{" "}
                        <div className=" flex gap-2">
                          <div>
                            <Link href={result.attributes.FacebookUrl || ""}>
                              <img src="/teams/facebook.svg" />
                            </Link>
                          </div>
                          <div>
                            <Link href={result.attributes.InstaUrl || ""}>
                              <img src="/teams/instagram.svg" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  </Link>
                ))}
            </div>
          </div>
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              Central
            </p>
            <div className="gap-[29px] flex font-roboto my-6 overflow-x-scroll custom-scrollbar">
              {data?.data
                ?.filter((item) => item.attributes.division == 2)
                .map((result, index) => (
                  <Link
                    target="_blank"
                    href={"https://" + result.attributes?.Url || ""}
                    key={index}
                    className=" flex flex-col justify-center  transition-all duration-[.15s] ease-in hover:scale-90 h-[320px] w-[290px] gap-[29px] ">
                    <div
                      style={{
                        backgroundColor: `#${result.attributes.bgcolor}`,
                      }}
                      className={`
                     flex flex-col gap-3  p-5 rounded-xl justify-center items-center h-[186px] w-[290px]`}>
                      <img
                        src={`https://afl2024-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                        alt="Teams"
                        className="h-24"
                      />
                      <Link href={"https://" + result.attributes?.Url || ""}>
                        <p className="inline-flex text-white items-center mt-1">
                          Visit Their Website{" "}
                          <span className=" text-white ml-3">
                            <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 ">
                      <p className="uppercase font-bold text-lg ">
                        {result.attributes.Label}
                      </p>
                      <Link
                        href={"https://" + result.attributes.Url || ""}
                        className="text-headingblue dark:text-white font-bold text-sm">
                        {result.attributes.Url}
                      </Link>{" "}
                      <div className=" flex gap-2">
                        <div>
                          <Link href={result.attributes.FacebookUrl || ""}>
                            <img src="/teams/facebook.svg" />
                          </Link>
                        </div>

                        <div>
                          <Link href={result.attributes.InstaUrl || ""}>
                            <img src="/teams/instagram.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              South
            </p>
            <div className="gap-[29px] flex font-roboto my-6 overflow-x-scroll custom-scrollbar">
              {data?.data
                ?.filter((item) => item.attributes.division == 3)
                .map((result, index) => (
                  <Link
                    target="_blank"
                    href={"https://" + result.attributes?.Url || ""}
                    key={index}
                    className=" flex flex-col justify-center  transition-all duration-[.15s] ease-in hover:scale-90 h-[320px] w-[290px] gap-[29px] ">
                    <div
                      style={{
                        backgroundColor: `#${result.attributes.bgcolor}`,
                      }}
                      className={`
                     flex flex-col gap-3  p-5 rounded-xl justify-center items-center h-[186px] w-[290px]`}>
                      <img
                        src={`https://afl2024-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                        alt="Teams"
                        className="h-24"
                      />
                      <Link href={"https://" + result.attributes?.Url || ""}>
                        <p className="inline-flex text-white items-center mt-1">
                          Visit Their Website{" "}
                          <span className=" text-white ml-3">
                            <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 ">
                      <p className="uppercase font-bold text-lg ">
                        {result.attributes.Label}
                      </p>
                      <Link
                        href={"https://" + result.attributes.Url || ""}
                        className="text-headingblue dark:text-white font-bold text-sm">
                        {result.attributes.Url}
                      </Link>{" "}
                      <div className=" flex gap-2">
                        <div>
                          <Link href={result.attributes.FacebookUrl || ""}>
                            <img src="/teams/facebook.svg" />
                          </Link>
                        </div>

                        <div>
                          <Link href={result.attributes.InstaUrl || ""}>
                            <img src="/teams/instagram.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              East
            </p>
            <div className="gap-[29px] flex font-roboto my-6 overflow-x-scroll custom-scrollbar">
              {data?.data
                ?.filter((item) => item.attributes.division == 4)
                .map((result, index) => (
                  <Link
                    target="_blank"
                    href={"https://" + result.attributes?.Url || ""}
                    key={index}
                    className=" flex flex-col justify-center  transition-all duration-[.15s] ease-in hover:scale-90 h-[320px] w-[290px] gap-[29px] ">
                    <div
                      style={{
                        backgroundColor: `#${result.attributes.bgcolor}`,
                      }}
                      className={`
                     flex flex-col gap-3  p-5 rounded-xl justify-center items-center h-[186px] w-[290px]`}>
                      <img
                        src={`https://afl2024-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                        alt="Teams"
                        className="h-24"
                      />
                      <Link href={"https://" + result.attributes?.Url || ""}>
                        <p className="inline-flex text-white items-center mt-1">
                          Visit Their Website{" "}
                          <span className=" text-white ml-3">
                            <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 ">
                      <p className="uppercase font-bold text-lg ">
                        {result.attributes.Label}
                      </p>
                      <Link
                        href={"https://" + result.attributes.Url || ""}
                        className="text-headingblue dark:text-white font-bold text-sm">
                        {result.attributes.Url}
                      </Link>{" "}
                      <div className=" flex gap-2">
                        <div>
                          <Link href={result.attributes.FacebookUrl || ""}>
                            <img src="/teams/facebook.svg" />
                          </Link>
                        </div>
                        <div>
                          <Link href={result.attributes.InstaUrl || ""}>
                            <img src="/teams/instagram.svg" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
