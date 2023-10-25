"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createCustomer, getProducts } from "@/api/shopifyapis";
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
const query = gql`
  mutation RegisterAccount(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $acceptsMarketing: Boolean = false
  ) {
    customerCreate(
      input: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
        acceptsMarketing: $acceptsMarketing
      }
    ) {
      customer {
        id
      }
      customerUserErrors {
        code
        message
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
export function Shop({ formdata, signOut, user, customers }) {
  const router = useRouter();
  const [registerCustomer, { data1, loading, error }] = useMutation(query);
  const [AddtoCart, { data2, loading1, error1 }] = useMutation(addtocart);
   const { data, error2 } = useSuspenseQuery(dataquery, {
     variables: {
       cartId: localStorage.getItem("cartid"),
     },
   });
   console.log(formdata)
  const handleRegistration = async (data) => {

    try {
      const response = await registerCustomer({
        variables: {
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          acceptsMarketing: true,
          password: "12345678",
        },
      });
      localStorage.setItem("userpass","1234567")

      localStorage.setItem(
        "customerId",
        response.data.customerCreate.customer?.id
      );
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error.message);
    }
  };
  const steps = [
    "New 2024 Collection Available!",
    "New Billing Outlaws Collection 2024 Collection Available!",
    "New Merch!",
  ];
  useEffect(() => {
    if (user.attributes) {
      if (
        !customers.customers.find((item) => item.email == user.attributes.email)
      ) {
        const obj = {
          email: user.attributes.email,
          phone: user.attributes.phone_number,
          first_name: user.attributes.name.split(" ")[0],
          last_name: user.attributes.name.split(" ")[1],
        };
        handleRegistration(obj);
      }
    }
  }, []);
  const addtoCart = async (dataa) => {
    try {
      console.log("cart",data)
      let line
      if(localStorage.getItem("cartid")){
       
         line = data.cart.lines.edges.map((edge) => {
           const { quantity } = edge.node;
           const {id}=edge.node.merchandise
           return { merchandiseId:id, quantity };
         });
      }
      console.log("line",line)
      const response = await AddtoCart({
        variables: {
          cartInput: {
            lines: [
              ...line,
              {
                quantity: 1,
                merchandiseId: dataa.variants[0].admin_graphql_api_id,
              },
            ],
          },
        },
      });
      //get cart id and save it in the localstorage

      // Handle the response, e.g., show success message or redirect
      console.log("Item successfully Added:", response);
      localStorage.setItem("cartid", response.data.cartCreate.cart.id);
      router.push("/cart");
    } catch (error) {
      // Handle registration error
      console.error("Registration error:", error.message);
    }
  };
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
    //const data= getProducts()
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
          {formdata?.products?.map((result, index) => (
            <div key={result.id} className=" col-span-1  md:m-5 m-0  ">
              <div className="max-w-sm mx-auto bg-white p-6 rounded-md shadow-md group relative">
                <img
                  className=" w-full rounded-t-3xl"
                  src={result.image.src}
                  alt="News"
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40 absolute inset-0 flex items-center justify-center">
                  <button
                    className="bg-black text-white px-4 py-2 rounded"
                    onClick={() => addtoCart(result)}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col ">
                <div className="font-roboto uppercase text-xl font-medium  ">
                  {result.title}
                </div>

                <p className="font-roboto font-bold text-xl text-bgblue  ">
                  $ {result.variants[0].price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Shop);
