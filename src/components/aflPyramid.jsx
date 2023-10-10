import React from "react";
import Link from "next/link";
const AflPyramid = () => {
  return (
    <div>
      <div className="w-full h-fit px-4 pb-4 flex flex-col justify-center items-center">
        <img
          src="/teams/AFLpyramid.svg"
          alt="Afl Pyramid"
          className="w-full "
        />

        <div className="mt-4">
          <Link
            href="/teams"
            className="font-roboto text-base font-semibold    text-headingblue">
            View All
            <span className=" ml-3 ">
              <img
                className="inline-flex "
                src="/Home/UnionBlack.svg"
                alt="Arrow svg "
              />
            </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AflPyramid;
