import React from "react";

export default function Footer({ activePage }) {
  
  return (
    <div className="">
      <div className="bg-black grid grid-cols-8 p-10 md:p-14 ">
        <div className="col-start-2 col-span-6 grid md:grid-cols-4 grid-cols-2 gap-7 font-roboto font-bold">
          <div className="flex flex-col justify-center items-center gap-6">
            <p>Division 1</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <p>Division 2</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <p>Division 3</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6 ">
            <p>Division 4</p>
            <img src="/Home/outlaws.svg" />
            <img src="/Home/hawks.svg" />
            <img src="/Home/outlaws.svg" /> <img src="/Home/hawks.svg" />
          </div>
        </div>
      </div>
      <div className=" bg-bgblue px-14 py-10 flex flex-col gap-7">
        <div>
          <img src="/Home/logo.svg" className="w-16 mx-auto" />
        </div>
        <div>
          <p className="text-xs text-center">
            © 2023 AFL - Arena Football League. AFL and the AFL shield design
            are registered trademarks of the Arena Football League. The team
            names, logos and uniform designs are registered trademarks of the
            teams indicated. All other AFL-related trademarks are trademarks of
            the Arena Football League.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-0 text-xs lg:text-base lg:w-10/12 mx-auto uppercase font-semibold text-center place-content-center justify-items-center place-items-center">
          <p>privacy policy</p>
          <p>terms of service</p>
          <p>subscription terms and conditions</p>
          <p>media</p>{" "}
          <p className=" lowercase flex-wrap font-normal">
            powered by <span className="uppercase font-semibold">HUMBL</span>
          </p>
        </div>
      </div>
    </div>
  );
}
