import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Checkout from "./checkout";
import { getData } from "@/api/FetchData";

export default async function CheckoutMain() {
  //const data = await getData();
  return (
    <div className="h-fit ">
      <Header activepage={"checkout"} />
      <div className=" bg-bgNews dark:bg-bgdark w-full">
        <Checkout />
        <Footer />
      </div>
    </div>
  );
}
