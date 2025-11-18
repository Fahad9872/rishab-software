import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; // 👈 import framer-motion

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    name: "Software and Platform Modernization",
    subject:
      "We modernize software platforms for optimized performance & reduced costs while preserving your core functionality and ensuring IAB compliance.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    name: "Data Analytics and Visualization",
    subject:
      "Our data analytics services cover project scope, architecture specifications, tech stack, team composition, release schedule & dev methodologies.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    name: "Design and Implementation Services",
    subject:
      "We use our data engineering & data lake implementation capabilities to bring your ad management software ideas to life, from concept to deployment.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1504691342899-8d6d5a5ec04a?auto=format&fit=crop&w=800&q=80",
    name: "Cloud App Development",
    subject:
      "Delivering cloud-native applications that scale seamlessly and ensure secure, high-performance operations for enterprises.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
    name: "AI & Machine Learning Solutions",
    subject:
      "Harness AI/ML to drive predictive insights, automate decision-making, and build smarter digital ecosystems.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    name: "Cybersecurity & Compliance",
    subject:
      "Protect digital assets with enterprise-grade security solutions ensuring compliance and resilience against threats.",
  },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-[80px]
               sm:[right:10%] md:[right:12%] lg:[right:18%] xl:[right:22%] 2xl:[right:28%]
               px-4 py-1.5 border border-gray/60 shadow rounded-[10px] 
               hover:border-[#BB86FC] hover:text-[#BB86FC] transition z-10"
  >
    &#8594;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute -top-[80px]
               sm:[right:14%] md:[right:19%] lg:[right:23%] xl:[right:27%] 2xl:[right:32%]
               px-4 py-1.5 border border-gray/60 shadow rounded-[10px] 
               hover:border-[#BB86FC] hover:text-[#BB86FC] transition z-10"
  >
    &#8592;
  </button>
);

const Services = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // show 2 slides on tablets
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 ">
      <div className="px-5 relative ">
        <div className="w-full max-w-[1400px] mx-auto mb-5">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-medium md:text-[40px] text-[30px] lg:flex-1"
          >
            We Empower Your Vision with Emerging Tech
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="font-normal  text-[16px] text-[#787878]"
          >
            Whether you’re looking to accelerate software delivery, ignite
            digital transformation, optimize your business operations, or build
            a future-ready tech ecosystem – Rishabh Software has the solutions
            to get you there!
          </motion.h2>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="relative rounded-2xl shadow-md overflow-hidden 
                 bg-gradient-to-r from-indigo-100 via-white to-pink-50 
                 h-64 flex flex-col justify-start p-6 text-left 
                 transition-all duration-500 group cursor-pointer"
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-white transition-colors mb-3">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm transition-colors leading-relaxed">
                    {item.subject}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="px-4 py-1.5 border-gray/60 border shadow rounded-[10px] hover:border-[#BB86FC] hover:text-[#BB86FC] transition z-10"
          >
            &#8592;
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="px-4 py-1.5 border-gray/60 border shadow rounded-[10px] hover:border-[#BB86FC] hover:text-[#BB86FC] transition z-10"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
