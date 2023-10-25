"use client";
import React, { useEffect, useState } from "react";
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
const getlogin = gql`
  mutation SignInWithEmailAndPassword($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        message
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

export function Checkout({ user }) {
  const [formdata, setFormdata] = useState({
    lastName: "",
    firstName: "",
    address1: "",
    province: "",
    country: "",
    zip: "",
    city: "",
  });

 const [paymentformdata, setPaymentFormdata] = useState({
    cardnumber: "",
    expiry: "",
    cvc: "",
    country: "",
  });
  const [login, { data1, loading1, error1 }] = useMutation(getlogin);
  const { data, error } = useSuspenseQuery(query, {
    variables: {
      cartId: localStorage.getItem("cartid"),
    },
  });
  
  const [checkout, { data2, loading2, error2 }] =
    useMutation(checkoutwithcustomer);
  const [updateAddress, { data3, loading3, error3 }] =
    useMutation(updateaddress);
const [payment,setPayment]=useState(false)
    
  const loginuser = async () => {
    const response = await login({
      variables: {
        email: user.attributes.email,
        password: "1234567",
      },
    });
    localStorage.setItem(
      "customeraccesstoken",
      response.data.customerAccessTokenCreate.customerAccessToken.accessToken
    );
  };
  useEffect(() => {
    loginuser();
  }, []);
  const cartItems = data.cart.lines.edges;
  const totalAmount = cartItems.reduce((total, item) => {
    const itemTotalAmount = parseFloat(
      item.node.estimatedCost.totalAmount.amount
    );
    return total + itemTotalAmount;
  }, 0);
  return (
    <div>
      <div className=" flex flex-col w-1/2 mx-auto py-10 px-4">
        <div className="my-10 flex lg:flex-row flex-col gap-8 items-center bg-white py-8 px-8 lg:px-4 rounded-md ">
          {data.cart.lines?.edges?.map((item) => (
            <div>
              <img
                src={item.node.merchandise.product.featuredImage.src}
                className="h-48 border border-stone-200 shadow-md rounded-2xl"
              />
              <div className="flex flex-col w-full">
                <p className=" font-roboto font-bold text-2xl capitalize">
                  {item.node.merchandise.product.title}
                </p>
                <p className=" font-roboto font-medium text-xl text-bggray capitalize">
                  Black - {product.size}
                </p>
                <div className="flex justify-between items-center gap-3 py-4">
                  <p className="font-roboto font-bold text-xl text-bgblue">
                    $ {item.node.merchandise.priceV2.amount}
                  </p>

                  <select
                    className="text-black w-1/5 font-normal border border-gray-400  text-sm "
                    value={item.node.quantity}>
                    <option value={item.node.quantity}>
                      {item.node.quantity}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
            <p className=" text-gray">Sub-Total</p>

            <p className="font-bold text-black">$ {totalAmount}</p>
          </div>
          <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
            <p className=" text-gray">Shipping</p>

            <p className="font-bold text-black">$ 5.99</p>
          </div>
          <div className="flex justify-between items-center gap-3  font-roboto  text-lg">
            <p className=" text-gray">Tax</p>

            <p className="font-bold text-black">
              $
              {Math.round(
                ((data.cart.estimatedCost.totalAmount.amount - totalAmount) *
                  100) /
                  100
              )}
            </p>
          </div>
          <div className="flex justify-between items-center gap-3 font-roboto text-lg">
            <p className=" text-gray">Total</p>

            <p className="font-bold text-black">
              $ {data.cart.estimatedCost.totalAmount.amount}
            </p>
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
            Shipping address
          </p>
          <form>
            <div className="flex flex-col gap-4 font-roboto font-normal text-lg mt-5">
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:justify-between lg:items-center">
                <div className="flex flex-col gap-2">
                  <label for="firstname">First Name</label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="first name"
                    value={formdata.firstName}
                    onChange={(e) =>
                      setFormdata({
                        ...formdata,
                        firstName: e.target.value,
                      })
                    }
                    className="border rounded-md border-bggray p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="lastname">Last Name</label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="last name"
                    className="border rounded-md border-bggray p-2"
                    value={formdata.lastName}
                    onChange={(e) =>
                      setFormdata({
                        ...formdata,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label for="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Street # "
                  className="border rounded-md border-bggray p-2"
                  value={formdata.address1}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      address1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:justify-between lg:items-center">
                <div className="flex flex-col gap-2">
                  <label for="province">Province</label>
                  <input
                    type="text"
                    id="province"
                    placeholder="province"
                    value={formdata.province}
                    onChange={(e) =>
                      setFormdata({
                        ...formdata,
                        province: e.target.value,
                      })
                    }
                    className="border rounded-md border-bggray p-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="city"
                    className="border rounded-md border-bggray p-2"
                    value={formdata.city}
                    onChange={(e) =>
                      setFormdata({
                        ...formdata,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label for="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Your Country"
                  className="border rounded-md border-bggray p-2"
                  value={formdata.country}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Your Zip Code"
                  className="border rounded-md border-bggray p-2"
                  value={formdata.zip}
                  onChange={(e) =>
                    setFormdata({
                      ...formdata,
                      zip: e.target.value,
                    })
                  }
                />
              </div>
              <div
                onClick={async () => {
                  const response = await updateAddress({
                    variables: {
                      shippingAddress: formdata,
                      checkoutId: localStorage.getItem("checkoutid"),
                    },
                  });
                  console.log("response", response);
                  setPayment(true);
                  const response1 = await checkout({
                    variables: {
                      checkoutId: localStorage.getItem("checkoutid"),
                      customerAccessToken: localStorage.getItem(
                        "customeraccesstoken"
                      ),
                    },
                  });
                }}
                className="bg-headingblue py-3 mt-4 rounded-md w-1/2 ">
                <p className="capitalize cursor-pointer font-roboto font-bold text-lg text-white flex items-center justify-center">
                  Save
                </p>
              </div>
            </div>
          </form>
        </div>
        {payment && (
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
                    value={paymentformdata.cardnumber}
                    onChange={(e) =>
                      setPaymentFormdata({
                        ...formdata,
                        cardnumber: e.target.value,
                      })
                    }
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
                      value={paymentformdata.expiry}
                      onChange={(e) =>
                        setPaymentFormdata({
                          ...formdata,
                          expiry: e.target.value,
                        })
                      }
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
                      value={paymentformdata.cvc}
                      onChange={(e) =>
                        setPaymentFormdata({
                          ...formdata,
                          cvc: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label for="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Your Country"
                    className="border rounded-md border-bggray p-2"
                    value={paymentformdata.country}
                    onChange={(e) =>
                      setPaymentFormdata({
                        ...formdata,
                        country: e.target.value,
                      })
                    }
                  />
                </div>

                <div
                
                  className="bg-headingblue py-3 mt-4 rounded-md w-1/2 ">
                  <p  className="capitalize cursor-pointer font-roboto font-bold text-lg text-white flex items-center justify-center">
                    Pay
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default withAuthenticator(Checkout);
