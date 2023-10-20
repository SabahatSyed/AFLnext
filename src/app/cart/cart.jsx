import React from "react";
import Link from "next/link";
const product = {
  id: 1,
  picture: "../../../shop/product1.svg",
  name:"black afl logo hoodie",
  size:"XL",
  quantity:"1",
  price:29.99
};
export default async function Cart() {
  return (
    <div>
      <div className=" flex flex-col w-2/4 mx-auto my-28">
        <div className=" uppercase font-magistraal text-2xl text-headingblue dark:text-white ">
          Shopping Cart
        </div>
        <div className="m-10 flex justify-around items-center ">
          <img src={product.picture} className="h-48" />
          <div className="flex flex-col gap-4">
            <p className=" font-roboto font-bold text-sm capitalize">
              {product.name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-roboto font-normal text-sm capitalize flex-row">
                Size: <span className="font-bold">{product.size}</span>
              </p>

              <p className="font-roboto font-bold text-sm capitalize text-red-700">
                Remove
              </p>
            </div>
            <select
              className="text-black w-1/4 font-normal border border-gray-400 rounded-md text-sm "
              value={product.quantity}>
              <option value={product.quantity}>{product.quantity}</option>
            </select>
          </div>
          <p className="font-roboto font-bold text-2xl text-gray mb-10">
            $ {product.price}
          </p>
        </div>
        <div className="h-[0.5px] w-4/5 mx-auto bg-black" />
        <div className="bg-white p-8 mt-10 rounded-2xl">
          <p className=" uppercase font-magistraal text-lg text-headingblue ">
            summary
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Subtotal</p>
              <p>$25</p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Shipping estimate</p>
              <p>Calculated at checkout</p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Tax estimate</p>
              <p>$0</p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal">
              <p>Estimated total</p>
              <p>$25</p>
            </div>
          </div>
        </div>
        <div className="bg-headingblue py-3 mt-10 rounded-md ">
          <p className="capitalize font-roboto font-bold text-lg text-white flex items-center justify-center">
            Checkout
            <span className=" mx-3 ">
              <img
                src="/Home/UnionWhite.svg"
                alt="Arrow svg "
                className="h-3"
              />
            </span>
          </p>
        </div>
        <div className=" py-3  rounded-md ">
          <p className="capitalize font-roboto  text-black flex items-center justify-center">
            or
            <span className="mx-1 font-bold text-headingblue"> Continue Shopping</span>
          </p>
        </div>
      </div>
    </div>
  );
}
