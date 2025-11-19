import GlobalClients from "@/components/AdTech/GlobalClients";
import Vision from "@/components/AdTech/Vision";
import ContactSection from "@/components/Home/ContactSection";
import NavBar from "@/components/NavBar/NavBar";
import BannerSection from "@/components/Services/BannerSection";
import CTASection from "@/components/Services/CTASection";
import DataAnalytics from "@/components/Services/DataAnalytics";
import DataAnalyticsSection from "@/components/Services/DataAnalyticsSection";
import DataTabs from "@/components/Services/DataTabs";
import FaqSection from "@/components/Services/FaqSection";
import Offer from "@/components/Services/Offer";
import SuccessStory from "@/components/Services/SuccessStory";
import Faq from "@/components/Shared/Faq";
import { Footer } from "@/components/Shared/Footer";
import React from "react";

const SingleService = ({ servicename }) => {
  function formatSlug(slug) {
    return slug
      .split("-") // break at "-"
      .map((word, index) =>
        index === 0
          ? word.charAt(0).toUpperCase() + word.slice(1) // capitalize first word
          : word
      )
      .join(" "); // join with spaces
  }

  const name = formatSlug(servicename);

  return (
    <div className="">
      <NavBar />
      <BannerSection name={name} />
      <div className="md:max-w-[1600px] px-3 md:mx-auto">
        <DataAnalyticsSection />
      </div>
      <SuccessStory />
      <DataTabs />
      <div className="md:max-w-[1600px] px-3 md:mx-auto">
        <DataAnalytics />
      </div>
      <CTASection />
      <GlobalClients />
      <Offer />
      <FaqSection />
      <div className="md:max-w-[1600px] px-3 md:mx-auto mt-5">
        <Vision />
      </div>
      <Faq />
      <div className="md:max-w-[1600px] px-3 md:mx-auto mt-5">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;

// servicesData
const servicesData = [
  "Data & Analytics",
  "Data Analytics Consulting Services",
  "Data Modernization",
  "Big Data Services",
  "Business Intelligence Services",
  "Data Warehouse Consulting",
  "Data Engineering Services",
  "Digital Engineering",
  "SaaS Development Services",
  "App Modernization",
  "Digital Product Engineering",
  "Digital Enterprise",
  "IoT Services",
  "Cloud",
  "Cloud App Development",
  "Cloud Consulting",
  "Cloud Migration Services",
  "Cloud Integration",
  "Cloud Managed Services",
  "DevOps",
  "Artificial Intelligence",
  "AI/ML Engineering",
  "GenAI Development Services",
  "AI Consulting",
  "AI Agent Development Services",
  "Application Engineering",
  "Mobile App Development",
  "Quality Engineering Services",
  "Application Development And Maintenance",
  "Application Integration Services",
  "Microsoft Technology",
  "Modern Workplace",
  "Data And AI Services",
  "Business Application Services",
  "Digital & App Innovation",
];

// Utility to convert to slug
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Next.js getStaticPaths
export async function getStaticPaths() {
  // Flatten all titles + items into one array

  // Generate slugs
  const paths = servicesData.map((item) => ({
    params: { servicename: slugify(item) },
  }));

  return {
    paths,
    fallback: false, // unknown slugs => 404
  };
}

// Next.js getStaticProps
export async function getStaticProps({ params }) {
  const servicename = params.servicename;

  return {
    props: { servicename },
  };
}
