import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeMain from "@/components/homeMain";
// import Cards from "@/components/cards";
import AflPyramid from "@/components/aflPyramid";
import News from "@/components/news";
import NewsLetter from "@/components/newsLetter";
import { getData } from "@/api/FetchData";

export default async function Home() {
      const data =await getData();
  return (
    <div className="h-fit">
      <Header />
      <div className="  bg-white">
        <HomeMain />
        </div>
        {/* <Cards /> */}
        <AflPyramid/>
        <News data={data}/>
        <NewsLetter/>
        {/* </div> */}
        <Footer />
      </div>
    // </div>
  );
}
