const authToken =
  "ddb964bf42dff984f6c786583a7c51afd0bf7bf1074d6d387966398089e2701089f643fa3071dbc1392fcde6377390c068df595e812fd3613df234f5d9a8528ca9ff355f75b39b67eebbdd3219e4bda55ccb73209f85c3e441319f97b867935bd884ffa3a956ccab546e967050adb59c4c242073bb6f8d48cd7c60356a387a3e";
const apiEndpoint = "https://afl-cms.logixsy.com/api/";

export async function getData() {
  try {
    const data = await fetch(apiEndpoint + "newss", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await data.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}
export async function getPartnersData() {
  try {
    const res = await fetch(apiEndpoint + "partners?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTeamsData() {
  try {
    const res = await fetch(apiEndpoint + "teams?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTicketsData() {
  try {
    const res = await fetch(apiEndpoint + "tickets?populate=Image", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export function saveEmail(props) {
  // try {
  // Send a POST request to your Strapi backend to subscribe the user
  fetch(apiEndpoint + "news-letters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(props),
  })
    .then(async (res) => {
      const data = await res.json();
      console.log("res", data);
      return ("Subscribed successfully!");
    })
    .catch((err) => {
      console.log("Subscription failed. Please try again.");
      //   });catch (error) {
      // console.error("Error:", error);
    });
}

// }
// catch(error){
//   console.log("Error:", error);
// }
