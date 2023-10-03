export async function getData() {
  try{
    
    const apiEndpoint = 'http://afl-cms.logixsy.com/api/newss';
  const authToken = '429c6884072159c86dcf477440284159f070c6f2bb4c17f5d801dcd5962a42962bfe19afe7a25290895e79338b34ceed915e29d1beaa14a15ae606dcea31738b4dfad76b0a06ed0d48312482a840140d6c1b57ac8d587df923195bc6b3e8ee9c1b8b7994833863c56e300049f25de8b340f67dd0ad74c7dedf1e09893c6ff3e0';
  const res = await fetch(apiEndpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 // console.log("hello",res.json())
 
   const data = await res.json();

   console.log("data",data)
  return data
}
catch(err){
  console.log("error",err)
}
}
