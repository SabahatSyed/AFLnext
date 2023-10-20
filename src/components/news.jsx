"use client"
import React from "react";
import Link from "next/link";


import { Amplify } from 'aws-amplify';
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);


export function News({ data, signOut, user } ) {
  return (
    <div>
      <div className="bg-bgNews dark:bg-bg-dark2 flex flex-col py-6 md:pl-10 pl-5">
        <div className="uppercase font-magistraal font-bold text-xl text-headingblue dark:text-white m-8">
          Latest News

          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>

        </div>
        {/* {data.data.map((result,index) => ( */}

        {/* // ))} */}
        <Link href="/news">
          <div className=" flex gap-5  mr-[1rem] md:mr-0  overflow-x-scroll custom-scrollbar">
            {data?.data?.map((result, index) => (
              <div
                key={index}
                className=" bg-white dark:bg-bgdark md:m-5 m-0 border border-gray-400  rounded-3xl shadow ">
                <div className="md:w-[400px] w-[300px]">
                  <img
                    className=" w-full rounded-t-3xl"
                    src={result.attributes.image_url}
                    alt="News"
                  />

                  <div className="p-5 flex flex-col gap-3">
                    <div className="font-roboto text-base font-bold h-[4rem] overflow-hidden">
                      {result.attributes.title}
                    </div>

                    <p className="font-roboto font-light text-base text-gray-500  text-ellipsis h-[10rem] overflow-hidden">
                      {result.attributes.description}...
                    </p>
                    <div className="font-roboto font-bold text-xl text-headingblue dark:text-bgNews inline-flex items-center">
                      Keep Reading
                      <span className=" ml-3 ">
                        <img src="/Home/UnionBlack.svg" alt="Arrow svg " />
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default withAuthenticator(News);
