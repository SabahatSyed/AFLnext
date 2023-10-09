const api_Token =
  "ddb964bf42dff984f6c786583a7c51afd0bf7bf1074d6d387966398089e2701089f643fa3071dbc1392fcde6377390c068df595e812fd3613df234f5d9a8528ca9ff355f75b39b67eebbdd3219e4bda55ccb73209f85c3e441319f97b867935bd884ffa3a956ccab546e967050adb59c4c242073bb6f8d48cd7c60356a387a3e";

export async function getData() {
  try {
    const apiEndpoint = "http://afl-cms.logixsy.com/api/newss";
    const authToken = api_Token;
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}
export async function getPartnersData() {
  try {
    const apiEndpoint =
      "http://afl-cms.logixsy.com/api/partners?populate=Image";
    const authToken = api_Token;
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTeamsData() {
  try {
    const apiEndpoint = "http://afl-cms.logixsy.com/api/teams?populate=Image";
    const authToken = api_Token;
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function getTicketsData() {
  try {
    const apiEndpoint = "http://afl-cms.logixsy.com/api/tickets?populate=Image";
    const authToken = api_Token;
    const res = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      cache: "no-store",
      // next: { revalidate: 0 } ,
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    // Handle the error here or rethrow it as needed
    console.error("An error occurred while fetching data:", error);
    throw error; // You can rethrow the error to handle it in the calling code
  }
}

export async function saveEmail(props) {
  // try {
  const authToken = api_Token;
  // Send a POST request to your Strapi backend to subscribe the user
  const apiEndpoint = "https://afl-cms.logixsy.com/api/news-letters";
  await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
    body:{
      props
    },
  })
    .then((res) => {
       console.log("res", res.json());
      console.log("Subscribed successfully!");
    })
    .catch((err) => {
      console.log("Subscription failed. Please try again.");
      //   });catch (error) {
      // console.error("Error:", error);
    });
  console.log(props);
}

// }
// catch(error){
//   console.log("Error:", error);
// }
