"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Amplify, Auth } from "aws-amplify";
// import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);
import { useMutation } from "@apollo/client";
import { useRouter } from "next-nprogress-bar";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
const product = {
  id: 1,
  picture: "../../../shop/product1.svg",
  name: "black afl logo hoodie",
  size: "XL",
  quantity: "1",
  price: 29.99,
};
const dataquery = gql`
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

const addtocart = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
export function TicketDetails({ products }) {
  const params = useSearchParams().get("id");
  const [product, setProduct] = useState();
  const [producttext,setText]=useState()
  const [variantText,setVariantText]=useState()
  const [selectedPackage,setPackage]=useState()
  const [quantity,setQuantity]=useState(1)
  const router = useRouter()
  const [cartid, setCartId] = useState('')
  const [checkoutid, setCheckoutid] = useState('')
  const [addtocartflag, setaddtocart] = useState('')
  const [AddtoCart, { data2, loading, error }] = useMutation(addtocart)

  const [data, setData] = useState()
  useEffect(() => {
    setCheckoutid(data?.cart?.checkoutUrl)

    setCartId(localStorage.getItem('cartid'))
  }, [])
  useEffect(() => {
    localStorage.setItem('checkoutid', checkoutid)
  }, [checkoutid])

  const cartItems = data?.cart?.lines.edges

  // Calculating the total amount by summing up the totalAmount of each item
  const totalAmount = cartItems?.reduce((total, item) => {
    const itemTotalAmount = parseFloat(
      item.node.estimatedCost.totalAmount.amount
    )
    return total + itemTotalAmount
  }, 0)
  useEffect(() => {
    console.log('after adding to crat', addtocartflag)
    if (addtocartflag) localStorage.setItem('cartid', addtocartflag)
  }, [addtocartflag])
const CartComponent = ({ setData, cartid }) => {
  const { data, error2 } = useSuspenseQuery(dataquery, {
    variables: {
      cartId: cartid,
    },
  });
  setData(data);
};

const addtoCart = (dataa) => {
  const toastId = toast.loading("adding item to cart");
  try {
    let line;
    console.log(data);
    if (data) {
      line = data.cart.lines.edges.map((edge) => {
        const { quantity } = edge.node;
        const { id } = edge.node.merchandise;
        return { merchandiseId: id, quantity };
      });
    }
    console.log(line);
    const response = AddtoCart({
      variables: {
        cartInput: {
          lines: line
            ? [
                ...line,
                {
                  quantity: quantity,
                  merchandiseId: selectedPackage?.admin_graphql_api_id,
                },
              ]
            : [
                {
                  quantity: quantity,
                  merchandiseId: selectedPackage?.admin_graphql_api_id,
                },
              ],
        },
      },
    }).then((res) => {
      setaddtocart(res.data.cartCreate.cart.id);
      setCartId(res.data.cartCreate.cart.id);
      toast.dismiss(toastId);
      toast.success("item added to cart successfully");
       router.push('/checkout')
    });
    //get cart id and save it in the localstorage

    // Handle the response, e.g., show success message or redirect
  } catch (error) {
    // Handle registration error
    console.error("Registration error:", error.message);
    toast.error("Error adding to cart");
    toast.dismiss(toastId);
  }
};
  useEffect(() => {
    setProduct(
      products?.products?.find((item) =>
        item.admin_graphql_api_id.includes(params)
      )
    );
  }, []);
  useEffect(()=>{
        setPackage(product?.variants[0]);

    setText(product?.body_html?.split("!")[0]);
    const bodyHtml = product?.body_html;
    if (bodyHtml) {
      const splitData = bodyHtml.split("!")[1].split(".");
      const variantTextObject = {};

      splitData.forEach((item) => {
        const colonIndex = item.indexOf(":");
        if (colonIndex !== -1) {
          const attributeName = item.substring(0, colonIndex).trim().toLowerCase();
          const attributeValues = item
            .substring(colonIndex + 1)
            .split(",")
            .map((value) => value.trim());
          variantTextObject[attributeName] = attributeValues;
        }
      });

      setVariantText(variantTextObject);
      console.log("fs", variantTextObject);
    }

   
  },[product])

  return (
    <div className=" m-20 grid grid-cols-5 gap-10">
       {cartid && <CartComponent setData={setData} cartid={cartid} />}

      <div className="col-span-2">
        <img src={product?.image?.src} alt="Tickets" />
      </div>
      <div className="col-span-3 flex flex-col gap-7">
        <p className="font-magistral font-bold text-2xl text-bgblue uppercase">
          {product?.title}
        </p>
        <p className="font-roboto text-xl text-gray flex-wrap">{producttext}</p>
        <div className="flex gap-10">
          <p className="font-roboto text-4xxl text-gray font-bold flex-wrap">
            $ {selectedPackage?.price}
          </p>
          <div className="flex gap-5 items-center">
            <select
              className=" dark:text-white p-2 h-8 w-16 text-bgblue outline-neutral-200 font-normal border border-gray-400 rounded-md text-sm "
              value={quantity}
              onChange={(e)=>setQuantity(parseInt(e.target.value))}>
              {[...Array(selectedPackage?.inventory_quantity).keys()].map(
                (num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                )
              )}
            </select>
            <div
              onClick={() => {
                addtoCart()
              }}
              className="bg-headingblue py-2 px-8 rounded-md cursor-pointer ">
              <p className="uppercase font-roboto font-bold cursor-pointer text-sm text-white flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {product?.variants?.map((item) => (
            <div key={item.id} className=" bg-variantsbg rounded-2xl  ">
              <div
                onClick={() => setPackage(item)}
                className="flex justify-between bg-lightNews p-3 items-center border border-neutral-300 rounded-2xl">
                <div className="flex gap-4 items-center ">
                  <img
                    src={
                      product?.images?.find(
                        (it) => it?.variant_ids[0] == item?.id
                      )?.src
                    }
                    alt="Tickets"
                  />
                  <p className="font-magistral font-bold text-xl text-bgblue uppercase">
                    {item?.title}
                  </p>
                </div>
                <div className="flex gap-4 items-center ">
                  <p className="font-roboto font-bold text-2xl text-gray uppercase">
                    ${item?.price}
                  </p>
                  <div
                    className={`h-4 w-4 flex justify-center items-center rounded-full border border-neutral-300 ${
                      selectedPackage?.id == item.id ? " bg-selectblue" : ""
                    }`}>
                    {selectedPackage?.id == item?.id && (
                      <div className="w-1 h-1 bg-white rounded-full" />
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5">
                {variantText &&
                  variantText[item?.title?.toLowerCase()?.split(" ")[0]]?.map(
                    (tex) => (
                      <div className="flex gap-4 items-center px-10">
                        <div className="w-1 h-1 bg-gray rounded-full" />

                        <p className="text-gray font-roboto font-medium text-xl">
                          {tex}
                        </p>
                      </div>
                    )
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
