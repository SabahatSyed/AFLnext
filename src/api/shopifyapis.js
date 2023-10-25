import { storefront } from "@shopify/shopify-api";
import { gql } from "@apollo/client";

const ADMIN = "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";
const API_VERSION = "2023-10";
const STORE_NAME = "4cee2b";
const API_KEY = "2d3e2b3e7035e0f100e68a4dbcd083cc";
const AdminSecret = process.env.ADMIN;
const apikey = process.env.API_KEY;
const store = process.env.STORE_NAME;
const version = process.env.API_VERSION;
const storefrontsecret = process.env.STORE_FRONT;


export async function getProducts() {
  try {
    // Send a POST request to your Strapi backend to subscribe the user
    
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
    console.log("data",data.products[0])
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
