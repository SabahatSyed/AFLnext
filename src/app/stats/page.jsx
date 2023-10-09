
import Header from "@/components/header";
import Footer from "@/components/footer";
import Stats from "@/app/stats/stats";
import { getStatsData } from "@/api/FetchData";

export default async function StatsMain() {
    const data = await getStatsData();
  return (
    <div className="h-fit ">
      <Header activepage={"stats"} />
      <div className=" bg-white dark:bg-bgdark w-full">
        <img src="/stats/Watchbg.svg" className="w-full" />
        {/* <Partners data={data} /> */}
        <Stats data={data}/>
        <Footer />
      </div>
    </div>
  );
}
