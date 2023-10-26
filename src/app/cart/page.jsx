import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cart from "./cart";
import { getData } from "@/api/FetchData";
export default async function NewsMain() {
  //const data = await getData();
  return (
    <div className="h-fit ">
      <Header activepage={"cart"} />
      <div className=" bg-bgNews dark:bg-bgdark w-full">
        <img src="/about/aboutbg.svg" className="w-full" />
        <Cart />
        <Footer />
      </div>
    </div>
  );
}
