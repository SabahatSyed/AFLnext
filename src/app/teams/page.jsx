import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Teams from "@/app/teams/teams";
import { getTeamsData } from "@/api/FetchData";
import { Image } from "next/image";
export default async function TeamsMain() {
  const data = await getTeamsData();
  return (
    <div className="h-fit ">
      <Header activepage={"teams"} />
      <div className=" bg-white dark:bg-bgdark w-full">
        <img src="/teams/bg.svg" className="w-full" />
        <Teams data={data} />
        <Footer />
      </div>
    </div>
  );
}
