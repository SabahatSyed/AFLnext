import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import News from "@/components/news";
export default function NewsMain() {
  return (
    <div className="h-fit ">
      {/* <Header activepage={"news"} /> */}
      <div className="h-screen  bg-white">
        <div className="bg-[url('/news/newsbg.svg')] bg-cover   lg:h-[86%] md:h-1/2 h-2/5 grid lg:grid-cols-3 grid-cols-1 text-white font-roboto md:p-20 p-10 md:place-items-end">
          <div className="flex flex-col gap-4 ">
            <p className="md:text-3xl text-2xl font-bold leading-tight">
              Arena Football League Relaunch Press release
            </p>
            <p className="">
              Lee A. Hutton III To Serve As Commissioner & Make History As First
              Black Commissioner to Lead Professional Sports League in...
            </p>
            <p className="flex items-center font-medium ">
              Keep Reading
              <span className=" mx-3 ">
                <img src="/Home/UnionWhite.svg" alt="Arrow svg " />
              </span>{" "}
            </p>
          </div>
        </div>
        <News />
        <Footer />
      </div>
    </div>
  );
}
