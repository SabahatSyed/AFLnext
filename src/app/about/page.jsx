import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutMain from "@/components/aboutmain";
import OurMission from "@/components/ourmission";
export default function About() {
  return (
    <div className="h-fit ">
      <Header activepage={"about"} />
      <div className="h-screen  bg-white">
        <AboutMain />
        <OurMission />
        <Footer />
      </div>
    </div>
  );
}
