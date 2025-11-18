import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import TabSection from "@/components/Webinar/TabSection";

export default function Webinar() {
  return (
    <div className="">
      <NavBar />
      <div className="md:max-w-[1400px] px-3 md:mx-auto">
        <TabSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
