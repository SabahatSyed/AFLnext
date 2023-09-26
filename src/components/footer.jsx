import React from "react";
import Head from "next/head";

export default function Footer({ activePage }) {
  return (
    <div class="">
      <div class="bg-black grid grid-cols-8 p-10 md:p-14">
        <div class="col-start-2 col-span-6 grid md:grid-cols-4 grid-cols-2 gap-7  text-white font-magistral font-bold text-xl">
          <div class="flex flex-col justify-center items-center gap-6">
            <p>Division 1</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div class="flex flex-col justify-center items-center gap-6">
            <p>Division 2</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div class="flex flex-col justify-center items-center gap-6">
            <p>Division 3</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div class="flex flex-col justify-center items-center gap-6 ">
            <p>Division 4</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
        </div>
      </div>
      <div class=" bg-bgblue px-14 py-10 flex flex-col gap-7">
        <div>
          <img src="/Home/logo.svg" class="w-16 mx-auto" />
        </div>
        <div>
          <p class="text-xs text-center text-white font-roboto">
            © 2023 AFL - Arena Football League. AFL and the AFL shield design
            are registered trademarks of the Arena Football League. The team
            names, logos and uniform designs are registered trademarks of the
            teams indicated. All other AFL-related trademarks are trademarks of
            the Arena Football League.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:flex lg:justify-between lg:w-8/12 gap-2 text-white lg:gap-0 text-xs lg:text-[13px]  mx-auto uppercase font-bold font-magistral text-center place-content-center justify-items-center place-items-center">
          <p>privacy policy</p>
          <p>terms of service</p>
          <p>subscription terms and conditions</p>
          <p>media</p>{" "}
          <p class=" lowercase flex-wrap font-normal">
            powered by{" "}
            <span class="uppercase font-semibold text-lg">HUMBL</span>
          </p>
        </div>
      </div>
    </div>
  );
}
