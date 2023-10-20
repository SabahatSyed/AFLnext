import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Shop from "./shop";
import { getData } from "@/api/FetchData";

export default async function NewsMain() {
  //const data = await getData();
  return (
    <div className="h-fit ">
      <Header activepage={"shop"} />
      <div className="h-fit bg-white">
        <Shop />
        <Footer />
      </div>
    </div>
  );
}
