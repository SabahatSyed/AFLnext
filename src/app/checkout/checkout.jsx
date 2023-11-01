"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Amplify, Auth } from "aws-amplify";
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

const checkoutwithcustomer = gql`
  mutation associateCustomerWithCheckout(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociateV2(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      checkout {
        id
      }
      checkoutUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`;
const updateaddress = gql`
  mutation checkoutShippingAddressUpdateV2(
    $shippingAddress: MailingAddressInput!
    $checkoutId: ID!
  ) {
    checkoutShippingAddressUpdateV2(
      shippingAddress: $shippingAddress
      checkoutId: $checkoutId
    ) {
      checkoutUserErrors {
        code
        field
        message
      }
      checkout {
        id
        shippingAddress {
          firstName
          lastName
          address1
          province
          country
          zip
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
export function Checkout() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [checkoutid, setcheckoutid] = useState("");
  const [cartid, setCartId] = useState("");
  const [data, setData] = useState();
    const [checkoutUrl, setCheckoutUrl] = useState("");
  const [count,setCount]=useState(0)
  useEffect(() => {
    localStorage.setItem("checkoutid", checkoutid);
  }, [checkoutid]); 
   useEffect(() => {
     localStorage.setItem("checkouturl", checkoutUrl);
   }, [checkoutUrl]);
  
   useEffect(()=>{
     localStorage.setItem("count", count);
   },[count])
  useEffect(() => {
    setCartId(localStorage.getItem("cartid"));
  }, []);
  const [getcheckouturl, { data1, loading1, error1 }] =
    useMutation(getcheckout);

  useEffect(() => {
    localStorage.setItem("customeraccesstoken", token);
  }, [token]);

  useEffect(() => {
    setcheckoutid(localStorage.getItem("checkoutid"));
    setToken(localStorage.getItem("customeraccesstoken"));

    //loginuser()
  }, []);
 
  const cartItems = data?.cart.lines.edges;
  const totalAmount = cartItems?.reduce((total, item) => {
    const itemTotalAmount = parseFloat(
      item.node.estimatedCost.totalAmount.amount
    );
    return total + itemTotalAmount;
  }, 0);
  const CartComponent = ({ setData, cartid,setCount }) => {
    const { data, error2 } = useSuspenseQuery(query, {
      variables: {
        cartId: cartid,
      },
    });
   setCount(data.cart.lines.edges.length);

    setData(data);
  };

  const getCheckout = async () => {
    const lineItems = cartItems.map((edge) => {
      const node = edge.node;
      return {
        variantId: node.merchandise.id,
        quantity: node.quantity,
      };
    });
    
    const response = await getcheckouturl({
      variables: {
        lineItems: lineItems,
      },
    });

    setcheckoutid(response.data.checkoutCreate.checkout.id);
    setCheckoutUrl(response.data.checkoutCreate.checkout.webUrl);
    Auth.currentAuthenticatedUser()
      .then((res) => {
        router.push(response.data.checkoutCreate.checkout.webUrl);
      })
      .catch((err) => {
        router.push("/login?auth=auth");
      });
  };
  return (
    <div>
      {cartid && <CartComponent setData={setData} cartid={cartid} setCount={setCount} />}

      <div className=" flex flex-col w-1/2 mx-auto py-10 px-4">
        <div className="my-10 flex flex-col  items-center bg-white py-8 px-8 lg:px-6 rounded-md ">
          {data?.cart.lines?.edges?.map((item) => (
            <div key={item.node.merchandise.id} className="w-full">
              <div className="flex flex-col justify-center md:flex-row  md:justify-between gap-10 ">
                <img
                  src={item.node.merchandise.product.featuredImage.src}
                  className="h-48 border border-stone-200 shadow-md rounded-2xl"
                />
                <div className="flex flex-col w-full">
                  <p className=" font-roboto font-bold text-2xl capitalize">
                    {item.node.merchandise.product.title}
                  </p>
                  <p className=" font-roboto font-medium text-xl text-bggray capitalize">
                    {item.node.merchandise.title}
                  </p>
                  <div className="flex justify-between items-center gap-3 py-4">
                    <p className="font-roboto font-bold  text-neutral-600">
                      Quantity : {item.node.quantity}
                    </p>
                    <p className="font-roboto font-bold text-xl text-bgblue">
                      $ {item.node.estimatedCost.totalAmount.amount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[0.5px] w-full mx-auto bg-neutral-800 my-10" />
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center w-full gap-4">
          <div className=" flex justify-center items-end">
            <img src="/checkout/concertticket.svg" />
            <div
              onClick={() =>
                router.push(
                  "/ticketdetails?id=gid://shopify/Product/8844600508715"
                )
              }
              className="bg-headingblue cursor-pointer absolute py-2 px-10 mb-7">
              <p className="uppercase font-roboto  font-bold text-sm text-white flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>
          <div className=" flex justify-center items-end ">
            <img src="/checkout/seasontickets.svg" />
            <div
              onClick={() => router.push("/shop")}
              className="bg-headingblue cursor-pointer absolute py-2 px-10 mb-7 ">
              <p className="uppercase font-roboto  font-bold text-sm text-white flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <div className=" p-12 rounded-2xl">
          <div
            onClick={() => {
              getCheckout();
            }}
            className="bg-headingblue py-3 mt-4 rounded-md w-2/3 mx-auto ">
            <p className="capitalize cursor-pointer font-roboto font-bold text-lg text-white flex items-center justify-center">
              Proceed to Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
