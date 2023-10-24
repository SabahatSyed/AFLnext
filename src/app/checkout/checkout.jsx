"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { Amplify } from "aws-amplify";
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
const product = {
  id: 1,
  picture: "../../../shop/product1.svg",
  name: "black afl logo hoodie",
  size: "XL",
  quantity: "1",
  price: 29.99,
};

export function Checkout({user}) {
  {/*const { data, error } = useSuspenseQuery(query,{variables: {
      cartId: "sa83712e8whsky28uedu38",
    }})
  console.log("data",data)*/}

 
  return (
    <div>
      <div className=" flex flex-col w-1/2 mx-auto py-10 px-4">
        <div className="my-10 flex lg:flex-row flex-col gap-8 items-center bg-white py-8 px-8 lg:px-4 rounded-md ">
          <img
            src={product.picture}
            className="h-48 border border-stone-200 shadow-md rounded-2xl"
          />
          <div className="flex flex-col w-full">
            <p className=" font-roboto font-bold text-2xl capitalize">
              {product.name}
            </p>
            <p className=" font-roboto font-medium text-xl text-bggray capitalize">
              Black - {product.size}
            </p>
            <div className="flex justify-between items-center gap-3 py-4">
              <p className="font-roboto font-bold text-xl text-bgblue">
                $ {product.price}
              </p>

              <select
                className="text-black w-1/5 font-normal border border-gray-400  text-sm "
                value={product.quantity}>
                <option value={product.quantity}>{product.quantity}</option>
              </select>
            </div>
            <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
              <p className=" text-gray">Sub-Total</p>

              <p className="font-bold text-black">$ 29.99</p>
            </div>
            <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
              <p className=" text-gray">Shipping</p>

              <p className="font-bold text-black">$ 5.99</p>
            </div>
            <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
              <p className=" text-gray">Tax</p>

              <p className="font-bold text-black">$ 3.99</p>
            </div>
            <div className="flex justify-between items-center gap-3 font-roboto text-lg">
              <p className=" text-gray">Total</p>

              <p className="font-bold text-black">$ 39.97</p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center w-full gap-4">
          <div className=" flex justify-center items-end">
            <img src="/checkout/concertticket.svg" />
            <div className="bg-headingblue  absolute py-2 px-10 mb-7">
              <p
                onClick={() => router.push("/checkout")}
                className="uppercase font-roboto  font-bold text-sm text-white flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-end ">
            <img src="/checkout/seasontickets.svg" />
            <div className="bg-headingblue  absolute py-2 px-10 mb-7 ">
              <p
                onClick={() => router.push("/checkout")}
                className="uppercase font-roboto  font-bold text-sm text-white flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="bg-white p-12 mt-10 rounded-2xl">
          <p className=" uppercase font-magistraal text-lg text-headingblue ">
            payment
          </p>
          <form>
            <div className="flex flex-col gap-4 font-roboto font-normal text-lg mt-5">
              <div className="flex flex-col gap-2">
                <label for="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="border rounded-md border-bggray p-2"
                />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 w-full lg:justify-between lg:items-center">
                <div className="flex flex-col gap-2">
                  <label for="expiration">Expiration</label>
                  <input
                    type="text"
                    id="expiration"
                    placeholder="MM/YYYY"
                    className="border rounded-md border-bggray p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    placeholder="123"
                    className="border rounded-md border-bggray p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label for="country">CVC</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Your Country"
                  className="border rounded-md border-bggray p-2"
                />
              </div>

              <div
                type="button"
                className="bg-headingblue py-3 mt-4 rounded-md w-1/2 ">
                <p className="capitalize font-roboto font-bold text-lg text-white flex items-center justify-center">
                  Pay
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Checkout);
