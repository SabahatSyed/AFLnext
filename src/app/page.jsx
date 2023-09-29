
import Header from "@/components/header";
import Footer from "@/components/footer";
import HomeMain from "@/components/homeMain";
import Cards from "@/components/cards";
import News from "@/components/news";
import NewsLetter from "@/components/newsLetter";
export default function Home() {
  return (
    <div className="h-fit">
      {/* <Header /> */}
      <div className="  bg-white">
        <HomeMain />
        </div>
        <Cards />
        <News />
        <NewsLetter />
        {/* </div> */}
        <Footer />
      </div>
    // </div>
  );
}
