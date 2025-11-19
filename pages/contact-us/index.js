import ContactForm from "@/components/Contact/ContactForm";
import OpportunitiesSection from "@/components/Contact/OpportunitiesSection";
import OfficeLocations from "@/components/LifeAtRishabh/OfficeLocations";
import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const index = () => {
  return (
    <div className="bg-[#181818] text-[#E1E1E1]">
      <NavBar />
      <ContactForm />
      <OfficeLocations />
      <OpportunitiesSection />
      <Footer />
    </div>
  );
};

export default index;
