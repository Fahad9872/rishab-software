import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import ClientChatter from "@/components/Home/ClientChatter";
import TabSection from "@/components/Home/TabSection";
import BannerSection from "@/components/OurWork/BannerSection";

export default function OurWork() {
  return (
    <div className="bg-[#181818] text-[#E1E1E1]">
      <NavBar />
      <div className="my-5">
        <BannerSection />
      </div>
      <TabSection />
      <div className="md:pt-16 p-5">
        {" "}
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
