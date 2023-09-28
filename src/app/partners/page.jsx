import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Partners from "@/app/partners/partners";
export default function TicketsMain() {
  return (
    <div className="h-fit ">
      <Header activepage={"partners"} />
      <div className="h-screen bg-white w-full">
        <img src="/partners/bg.svg" className="w-full" />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}
