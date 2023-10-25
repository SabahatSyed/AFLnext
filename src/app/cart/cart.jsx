"use client";
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
const query = gql`
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      checkoutUrl
      estimatedCost {
        totalAmount {
          amount
        }
      }
      lines(first: 100) {
        edges {
          node {
            quantity
            estimatedCost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  id
                  title
                  description
                  featuredImage {
                    src
                  }
                }
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getcheckout = gql`
  mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
    checkoutCreate(input: { lineItems: $lineItems }) {
      checkout {
        id
        webUrl
        lineItems(first: 5) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
`;
export function Cart({ user }) {
  const router = useRouter();
    const [getcheckouturl, { data1, loading1, error1 }] = useMutation(getcheckout);

  const { data, error } = useSuspenseQuery(query, {
    variables: {
      cartId: localStorage.getItem("cartid"),
    },
  });
  localStorage.setItem("checkoutId",data.cart.checkoutUrl)
const cartItems = data.cart.lines.edges;

// Calculating the total amount by summing up the totalAmount of each item
const totalAmount = cartItems.reduce((total, item) => {
  const itemTotalAmount = parseFloat(
    item.node.estimatedCost.totalAmount.amount
  );
  return total + itemTotalAmount;
}, 0);

const getCheckout=async()=>{
  const lineItems = cartItems.map((edge) => {
    const node = edge.node;
    const idarr=node.merchandise.id.split("ProductVariant/")
    return {
      variantId: node.merchandise.id,
      quantity: node.quantity,
    };
  });
    const response = await getcheckouturl({
      variables: {
        lineItems:lineItems
      },
    });
    localStorage.setItem("checkoutid",response.data.checkoutCreate.checkout.id)
}
  return (
    <div>
      <div className=" flex flex-col w-2/4 mx-auto my-28">
        <div className=" uppercase font-magistraal text-2xl text-headingblue dark:text-white ">
          Shopping Cart
        </div>
        {data.cart.lines?.edges?.map((item) => (
          <div className="m-10 lg:flex  justify-around items-center ">
            <img
              src={item.node.merchandise.product.featuredImage.src}
              className="h-48"
            />
            <div className="flex flex-col gap-4 mt-4 lg:mt-0">
              <p className=" font-roboto font-bold text-sm capitalize">
                {item.node.merchandise.product.title}
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="font-roboto font-normal text-sm capitalize flex-row">
                  Size: <span className="font-bold">{product.size}</span>
                </p>

                <p className="font-roboto font-bold text-sm capitalize text-red-700">
                  Remove
                </p>
              </div>
              <select
                className="text-black w-2/4 font-normal border border-gray-400 rounded-md text-sm "
                value={item.node.quantity}>
                <option value={item.node.quantity}>{item.node.quantity}</option>
              </select>
            </div>
            <p className="font-roboto font-bold text-2xl text-gray mb-10">
              $ {item.node.merchandise.priceV2.amount}
            </p>
          </div>
        ))}
        <div className="h-[0.5px] w-4/5 mx-auto bg-black" />
        <div className="bg-white p-8 mt-10 rounded-2xl">
          <p className=" uppercase font-magistraal text-lg text-headingblue ">
            summary
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Subtotal</p>
              <p>{totalAmount}</p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Shipping estimate</p>
              <p>Calculated at checkout</p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal text-sm">
              <p>Tax estimate</p>
              <p>
                $
                {Math.round(
                  ((data.cart.estimatedCost.totalAmount.amount - totalAmount) *
                    100) /
                    100
                )}
              </p>
            </div>
            <div className="h-[0.5px] w-full mx-auto bg-black" />
            <div className="flex items-center justify-between font-roboto font-normal">
              <p>Estimated total</p>
              <p>{data.cart.estimatedCost.totalAmount.amount}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            getCheckout();
            router.push("/checkout");
          }}
          className="bg-headingblue py-3 mt-10 rounded-md cursor-pointer ">
          <p className="capitalize font-roboto font-bold cursor-pointer text-lg text-white flex items-center justify-center">
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
          <p
            onClick={() => router.push("/shop")}
            className="capitalize font-roboto  text-black flex items-center justify-center">
            or
            <span className="mx-1 font-bold text-headingblue">
              Continue Shopping
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Cart);
