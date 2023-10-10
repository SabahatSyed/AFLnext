import React from "react";
import Link from "next/link";

export default function Teams({ data }) {
  return (
    <div>
      <div className="w-full h-fit px-4 pb-4 flex flex-col justify-center items-center">
        <img
          src="/teams/AFLpyramid.svg"
          alt="Afl Pyramid"
          className="w-full "
        />
      </div>
      <div className=" flex flex-col py-6 px-14">
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white m-8 text-center">
          Teams
        </div>
        <div className=" flex flex-col gap-10">
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              Division 1
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:gap-3 gap-7 font-roboto my-6">
              {data?.data?.map((result, index) => (
                <div key={index} className=" w-3/4 flex flex-col gap-4">
                  <div
                    className={`${
                      result.attributes.Label == `Dessert Hawks`
                        ? "bg-hawks"
                        : "bg-outlaws"
                    } flex flex-col gap-3  p-5 rounded-xl justify-center items-center`}>
                    <img
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt="Teams"
                    />
                    <Link href={"https://" + result.attributes.Url}>
                      <p className="inline-flex text-white items-center mt-1">
                        Visit Their Website{" "}
                        <span className=" text-white ml-3">
                          <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                        </span>{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 ">
                    <p className="uppercase font-bold text-lg">
                      {result.attributes.Label}
                    </p>
                    <Link
                      href={"https://" + result.attributes.Url}
                      className="text-headingblue dark:text-white font-bold text-sm">
                      {result.attributes.Url}
                    </Link>{" "}
                    <div className=" flex gap-2">
                      <div>
                        <Link href={result.attributes.FacebookUrl}>
                          <img src="/teams/facebook.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.TwitterUrl}>
                          <img src="/teams/x.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.InstaUrl}>
                          <img src="/teams/instagram.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.YoutubeUrl}>
                          <img src="/teams/youtube.svg" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <p className="font-magistraal text-lg text-headingblue dark:text-white uppercase">
              Division 2
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center lg:gap-3 gap-7 font-roboto my-6">
              {data?.data?.map((result, index) => (
                <div key={index} className=" w-3/4 flex flex-col gap-4">
                  <div
                    className={`${
                      result.attributes.Label == `Dessert Hawks`
                        ? "bg-hawks"
                        : "bg-outlaws"
                    } flex flex-col gap-3  p-5 rounded-xl justify-center items-center`}>
                    <img
                      src={`http://afl-cms.logixsy.com${result.attributes.Image.data[0].attributes.url}`}
                      alt="Teams"
                    />
                    <Link href={"https://" + result.attributes.Url}>
                      <p className="inline-flex text-white items-center mt-1">
                        Visit Their Website{" "}
                        <span className=" text-white ml-3">
                          <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
                        </span>{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 ">
                    <p className="uppercase font-bold text-lg">
                      {result.attributes.Label}
                    </p>
                    <Link
                      href={"https://" + result.attributes.Url}
                      className="text-headingblue dark:text-white font-bold text-sm">
                      {result.attributes.Url}
                    </Link>{" "}
                    <div className=" flex gap-2">
                      <div>
                        <Link href={result.attributes.FacebookUrl}>
                          <img src="/teams/facebook.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.TwitterUrl}>
                          <img src="/teams/x.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.InstaUrl}>
                          <img src="/teams/instagram.svg" />
                        </Link>
                      </div>
                      <div>
                        <Link href={result.attributes.YoutubeUrl}>
                          <img src="/teams/youtube.svg" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
