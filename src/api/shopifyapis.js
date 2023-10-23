import {Shopify} from "@shopify/shopify-api"
const AdminSecret=process.env.ADMIN
const apikey=process.env.API_KEY
const store = process.env.STORE_NAME
const version = process.env.API_VERSION
console.log("admin", AdminSecret);
export async function  getProducts(props) {
   try {
  // Send a POST request to your Strapi backend to subscribe the user
  console.log("hello")
  const res=await fetch(
    `https://${store}.myshopify.com/admin/api/${version}/products.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": `${AdminSecret}`,
      },
    }
  )
      const data = await res.json();
      console.log("res", data);

      return data;
  }
    catch (error) {
      console.error("Error:", error);
    }
}

export async function getCustomers(props) {
   try {
  // Send a POST request to your Strapi backend to subscribe the user

 console.log("hello");
  const res=await fetch(
    `https://${store}.myshopify.com/admin/api/${version}/customers.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": `${AdminSecret}`,
      },
    }
  )
      const data = await res.json();
      console.log("res", data);

      return data;
  }
    catch (error) {
      console.error("Error:", error);
    }
}