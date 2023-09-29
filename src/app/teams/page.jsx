import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Teams from "@/app/teams/teams";
export default function TeamsMain() {
  return (
    <div className="h-fit ">
      {/* <Header activepage={"teams"} /> */}
      <div className=" bg-white dark:bg-bgdark w-full">
        <img src="/teams/bg.svg" className="w-full" />
        <Teams />
        <Footer />
      </div>
    </div>
  );
}
