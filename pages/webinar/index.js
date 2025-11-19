import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import TabSection from "@/components/Webinar/TabSection";

export default function Webinar() {
  return (
    <div className="">
      <NavBar />
      <TabSection />
      <div className="md:pt-16 p-5">
        {" "}
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
