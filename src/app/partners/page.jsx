import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Partners from "@/app/partners/partners";
import { getPartnersData } from "@/api/FetchData";

export default async function PartnersMain() {
    const data = await getPartnersData();
  return (
    <div className="h-fit ">
      <Header activepage={"partners"} />
      <div className=" bg-white dark:bg-bgdark w-full">
        <img src="/partners/bg.svg" className="w-full" />
        <Partners data={data} />
        <Footer />
      </div>
    </div>
  );
}
