import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import Vision from "@/components/Home/Vision";
import SuccessStory from "@/components/Home/SuccessStory";
import Together from "@/components/Home/Together";
import ContactSection from "@/components/Home/ContactSection";
import LatestInsights from "@/components/Home/LatestInsights";
import ClientChatter from "@/components/Home/ClientChatter";
import BannerSection from "@/components/Home/BannerSection";
import TabSection from "@/components/Home/TabSection";
import Experience from "@/components/Home/Experience";
import Innovate from "@/components/Home/Innovate";

export default function Home() {
  return (
    <div className="bg-[#181818] text-[#E1E1E1]">
      <NavBar />
      <BannerSection />
      <Experience />
      <div className=" ">
        <div className=" md:max-w-[1600px] px-3 py-5 md:mx-auto">
          {/* <Carousel itemsToShow={1} showArrows={false} loop={true}>
          <Banner />
          <Banner2 />
        </Carousel> */}
          <Together />
        </div>
      </div>
      <SuccessStory />

      <div className="md:max-w-[1600px] px-3 md:mx-auto">
        <Vision />
      </div>
      <div className=" bg-[#111111] text-[#E1E1E1]">
        <ClientChatter />
      </div>
      <div className="md:max-w-[1600px] px-3 md:mx-auto">
        <LatestInsights />
      </div>

      <Innovate />
      <div className="py-10 ">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
