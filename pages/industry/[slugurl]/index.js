import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import ClientChatter from "@/components/Home/ClientChatter";
import TabSection from "@/components/Home/TabSection";
import BannerSection from "@/components/OurWork/BannerSection";
import MediaEnterprises from "@/components/AdTech/MediaEnterprises";
import ScrollCards from "@/components/AdTech/ScrollCards";
import SuccessStory from "@/components/AdTech/SuccessStory";
import Services from "@/components/AdTech/Services";
import Faq from "@/components/Shared/Faq";
import FaqSection from "@/components/AdTech/FaqSection";
import GlobalClients from "@/components/AdTech/GlobalClients";
import AdTechInsights from "@/components/AdTech/AdTechInsights";
import CTASection from "@/components/AdTech/CTASection";
import History from "@/components/About/HIstory";
import Banner from "@/components/AdTech/Banner";

const heroData = {
  title: "Transform Your Business with Innovation 🚀",
  subtitle:
    "We deliver AI, Cloud, and Modernization solutions that empower your growth.",
  buttonText: "Get Started",
  gradient: "from-purple-600 to-pink-500",
  textColor: "text-white",
  height: 500, // px
};

export default function Adtech({ slugurl }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Layout constants
  const heroOffset = 80; // matches top-20 (5rem = 80px)
  const heroHeight = heroData.height;

  // Animation math
  const progress = Math.min(scrollY / heroHeight, 1);
  const heroTranslateY = progress * heroHeight; // move up to its full height
  const heroOpacity = Math.max(1 - progress, 0); // fade out as you scroll
  const heroClickable = heroOpacity > 0.3; // stop catching clicks once mostly faded

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

  const name = formatSlug(slugurl);

  console.log(name);

  return (
    <div className="relative bg-[#181818] text-[#E1E1E1]">
      <NavBar />

      <Banner
        name={name}
        image={
          "https://img.lovepik.com/background/20211021/large/lovepik-ai-technology-background-image_400731806.jpg"
        }
      />

      <div className="  bg-[#111111] text-[#E1E1E1]">
        <div className="py-10 md:max-w-[1400px] px-3 md:mx-auto">
          {/* Breadcrumb */}
          <div className="text-[18px] text-gray-600 mb-6">
            <span className="text-gray-500">Home</span>{" "}
            <span className="mx-1">›</span>{" "}
            <span className="text-purple-600 font-medium"> Careers</span>
          </div>
          <div className="md:w-[80%] mx-auto text-center">
            <p className="text-[30px] font-medium text-center mb-3">
              Career at {name}
            </p>
            <p className="mb-3">
              Looking to launch a modern AdTech solution but need a technology
              partner? Let Rishabh Software be your trusted partner in bringing
              your vision of an intelligent advertising solution to life. With
              extensive experience in AdTech software development, we understand
              the AdTech industry’s challenges and are passionate about helping
              you navigate this dynamic landscape to achieve your revenue goals.
            </p>

            <p>
              Our seasoned team of designers, developers, testers, SRE, and
              operations support excel in AdTech software platform development.
              We will also assist you in integrating AdTech software solutions
              with your existing CRM, ERP, and digital advertising management
              platforms to streamline campaign management, effective customer
              acquisition strategies, and optimize your budget for maximum
              profitability. Whether you’re an Adtech product company or a DSP /
              SSP or Ad agency, we’re fully equipped to help you harness the
              power of hyper-personalized marketing for greater ROI.
            </p>
          </div>
        </div>
      </div>

      <Services />

      {/* Page content */}
      <div className=" px-3 md:px-5 relative z-10 bg-[#111111] text-[#E1E1E1]">
        <div className="w-full max-w-[1400px] mx-auto">
          <FaqSection />
        </div>
      </div>
      <SuccessStory />
      <ScrollCards />
      <div className="w-full max-w-[1400px] mx-auto  relative z-10">
        {/* <History /> */}

        <MediaEnterprises />
      </div>
      <GlobalClients />
      <div className="w-full max-w-[1400px] mx-auto px-3 md:px-5 relative z-10">
        {/* <History /> */}
        <AdTechInsights />
      </div>
      <CTASection />
      <div className="w-full max-w-[1400px] mx-auto px-3 md:px-5 relative z-10">
        {/* <History /> */}
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // Replace with your actual city slugs

  const url = [
    "adtech",
    "digital-manufacturing",
    "fintech",
    "healthtech",
    "logistics-and-scm",
    "retail",
  ];
  const paths = url.map((slug) => ({ params: { slugurl: slug } }));
  return {
    paths,
    fallback: false, // fallback false ensures 404 for unknown slugs
  };
}

// Provide props for each city page
export async function getStaticProps({ params }) {
  const slugurl = params.slugurl;

  // Here you can fetch city-specific data if needed
  return {
    props: { slugurl },
  };
}
