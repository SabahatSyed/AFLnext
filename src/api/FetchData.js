const authToken =
  "045e72c0a2e7a7bee54a67b97a97c6cd2751eb9270552390577c514d577efd2b514553abb9210ca8007ae6489b4914067a39e2a88f309239d0d65cfce5203047d611f86aaf57872a1aa9f49214716b68b0867193f1d4652e5b581e0200a999b9a8782c2b22fc22fce91b3d1f5144c6de9b9a833293f19122407fb2427424f950";
const apiEndpoint = "https://afl2024-cms.logixsy.com/api/";

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
      // console.log("res", data);
      return "Subscribed successfully!";
    })
    .catch((err) => {
      console.log("Subscription failed. Please try again.");
      return "Subscription failed. Please try again.";
      //   });catch (error) {
      // console.error("Error:", error);
    });
}

export async function getStatsData() {
  try {
    const res = await fetch(apiEndpoint + "stats?populate=icon", {
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

// }
// catch(error){
//   console.log("Error:", error);
// }
