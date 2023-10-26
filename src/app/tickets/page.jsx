import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Tickets from "@/app/tickets/tickets";
import { getTicketsData } from "@/api/FetchData";
import { Image } from "next/image";
export default async function TicketsMain() {
  const data = await getTicketsData();

  return (
    <div className="h-fit ">
      <Header activepage={"tickets"} />
      <div className=" bg-white dark:bg-bgdark w-full">
        <img src="/teams/ticketsbg.svg" className="w-full" />
        <Tickets data={data} />
        <Footer />
      </div>
    </div>
  );
}
