import { storefront } from "@shopify/shopify-api";
import { gql } from "@apollo/client";
import { Darumadrop_One } from "next/font/google";

const ADMIN = "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";
const API_VERSION = "2023-10";
const STORE_NAME = "b6eb23";
const API_KEY = "71a9c45d22f259cfeea5adc6ebef7e24";
const STORE_FRONT = "34c989d3cd6e3e330444a4b37e74161b";
const AdminSecret = process.env.ADMIN;
const apikey = process.env.API_KEY;
const store = process.env.STORE_NAME;
const version = process.env.API_VERSION;
const storefrontsecret = process.env.STORE_FRONT;


export async function getProducts() {
  try {
    // Send a POST request to your Strapi backend to subscribe the user
    console.log(AdminSecret);
    const res = await fetch(
      `https://${store}.myshopify.com/admin/api/${version}/products.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${AdminSecret}`,
        },
      }
    );
    const data = await res.json();
    console.log("data",data)
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}



export async function getCustomers() {
  try {
    // Send a POST request to your Strapi backend to subscribe the user

    const res = await fetch(
      `https://${store}.myshopify.com/admin/api/${version}/customers.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${AdminSecret}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteCustomer(id) {
  try {
    // Send a POST request to your Strapi backend to subscribe the user

    const res = await fetch(
      `https://${STORE_NAME}.myshopify.com/admin/api/${API_VERSION}/customers/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${ADMIN}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateCustomer(id,props) {
  try {
    // Send a POST request to your Strapi backend to subscribe the user

    const res = await fetch(
      `https://${STORE_NAME}.myshopify.com/admin/api/${API_VERSION}/customers/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": `${ADMIN}`,
        },
        body:(props)
      }
    );
    const data = await res.json();
    console.log("data",data)
    return data;
  } catch (error) {
    console.error("Error:", error);
    return error
  }
}