import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import News from "@/components/news";
export default function NewsMain() {
  return (
    <div class="h-fit ">
      <Header activepage={"news"} />
      <div class="h-screen  bg-white">
        <div class="bg-[url('/news/newsbg.svg')] bg-cover h-full grid grid-cols-3  text-white font-roboto p-20 place-items-end">
          <div class="flex flex-col gap-4">
            <p class="text-3xl font-bold leading-tight">
              Arena Football League Relaunch Press release
            </p>
            <p class="">
              Lee A. Hutton III To Serve As Commissioner & Make History As First
              Black Commissioner to Lead Professional Sports League in...
            </p>
            <p class="flex items-center font-medium ">
              Keep Reading
              <span class=" mx-3 ">
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
