 "use client"
import React,{useState,useEffect} from "react";
import Link from "next/link";
const products = [
  {
    id: 2,
    name: "black afl logo hoodie",
    price: 29.99,
    picture: "../../../shop/product1.svg",
  },
  {
    id: 3,
    name: "afl logo football",
    price: 39.99,
    picture: "../../../shop/product2.svg",
  },
  {
    id: 4,
    name: "black afl logo hoodie",
    price: 29.99,
    picture: "../../../shop/product1.svg",
  },
  {
    id: 5,
    name: "afl logo football",
    price: 39.99,
    picture: "../../../shop/product2.svg",
  },
  {
    id: 6,
    name: "black afl logo hoodie",
    price: 29.99,
    picture: "../../../shop/product1.svg",
  },
  {
    id: 7,
    name: "afl logo football",
    price: 39.99,
    picture: "../../../shop/product2.svg",
  },
];
export default function Shop({ data }) {
  
   const steps = [
     "New 2024 Collection Available!",
     "New Billing Outlaws Collection 2024 Collection Available!",
     "New Merch!",
   ];

   const [activeStep, setActiveStep] = useState(1);
   useEffect(() => {
     const handleKeyPress = (event) => {
       if (event.key === "ArrowRight") {
         setActiveStep((prevValue) => prevValue + 1);
       } else if (event.key === "ArrowLeft") {
         setActiveStep((prevValue) => prevValue - 1);
       }
     };

     if (typeof window !== "undefined") {
       window.addEventListener("keydown", handleKeyPress);
     }
     return () => {
       if (typeof window !== "undefined") {
         // Access window object here

         window.removeEventListener("keydown", handleKeyPress);
       }
     };
   }, []);
   useEffect(() => {
     if (activeStep > 3 || activeStep < 1) {
       setActiveStep(1);
     }
   }, [activeStep]);
  return (
    <div className="bg-white h-full">
      <div className="bg-[url('/Home/shopbg.svg')] gap-40  relative z-10 bg-cover w-10/12 my-14 mx-auto   lg:h-[86%] md:h-1/2 h-2/5 flex flex-col justify-between items-center text-white font-roboto md:p-10 p-10  rounded-xl">
        <div></div>
        <div className="flex flex-col gap-4 ">
          <p className="md:text-4xl text-2xl font-bold leading-tight text-center">
            {steps[activeStep - 1]}
          </p>

          <p className="flex items-center justify-center text-2xl font-bold ">
            Buy Now
            <span className=" mx-3 ">
              <img
                src="/Home/UnionWhite.svg"
                alt="Arrow svg "
                className="h-5"
              />
            </span>{" "}
          </p>
        </div>
        <div className="w-1/12 flex gap-2 h-3 mx-auto">
          <p
            onClick={() => setActiveStep(1)}
            className={`cursor-pointer ${
              activeStep == 1
                ? " bg-gray-500 text-transparent px-4"
                : "bg-lightgray text-transparent px-1 opacity-50"
            }  rounded-full `}>
            .
          </p>
          <p
            onClick={() => setActiveStep(2)}
            className={`cursor-pointer ${
              activeStep == 2
                ? " bg-gray-500 text-transparent px-4"
                : "bg-lightgray text-transparent px-1 opacity-50"
            }  rounded-full `}>
            .
          </p>
          <p
            onClick={() => setActiveStep(3)}
            className={`cursor-pointer ${
              activeStep == 3
                ? " bg-gray-500 text-transparent px-4"
                : "bg-lightgray text-transparent px-1 opacity-50"
            }  rounded-full `}>
            .
          </p>
        </div>
      </div>
      <div className="bg-bgNews dark:bg-bg-dark2 flex flex-col py-6 px-2 lg:px-14 lg:-mt-60 relative z-0 lg:pt-60">
        <div className="uppercase font-magistraal font-bold text-xl text-headingblue dark:text-white m-8">
          New Releases
        </div>
        {/* {data.data.map((result,index) => ( */}

        {/* // ))} */}
        <div className="  gap-3 grid-cols-2 md:grid-cols-3 grid lg:grid-cols-4">
          {products.map((result, index) => (
            <div key={result.id} className=" col-span-1  md:m-5 m-0  ">
              <div className="max-w-sm mx-auto bg-white p-6 rounded-md shadow-md group relative">
                <img
                  className=" w-full rounded-t-3xl"
                  src={result.picture}
                  alt="News"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40 absolute inset-0 flex items-center justify-center">
                  <Link href="/cart">
                    <button className="bg-black text-white px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-5 flex flex-col ">
                <div className="font-roboto uppercase text-xl font-medium  ">
                  {result.name}
                </div>

                <p className="font-roboto font-bold text-xl text-bgblue  ">
                  $ {result.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
