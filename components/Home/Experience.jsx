import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenWidth from "../hooks/useScreenWidth";
import { motion } from "framer-motion"; // 👈 import framer-motion

const cards = [
  {
    title: "Real-time Digital Ad Inventory Management",
    defaultText: "For a DOOH giant with 120,000+ ad panels worldwide",
    hoverText:
      "Modernizing with real-time analytics for scalability and performance",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DevOps Implementation",
    defaultText: "30% reduction in operational cost",
    hoverText: "Driving automation with CI/CD pipelines and monitoring",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ad Order Management",
    defaultText: "50% increase in booking of available assets",
    hoverText:
      "Streamlined workflows with automation for ad inventory management",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DevOps Implementation",
    defaultText: "30% reduction in operational cost",
    hoverText: "Driving automation with CI/CD pipelines and monitoring",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ad Order Management",
    defaultText: "50% increase in booking of available assets",
    hoverText:
      "Streamlined workflows with automation for ad inventory management",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DevOps Implementation",
    defaultText: "30% reduction in operational cost",
    hoverText: "Driving automation with CI/CD pipelines and monitoring",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ad Order Management",
    defaultText: "50% increase in booking of available assets",
    hoverText:
      "Streamlined workflows with automation for ad inventory management",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
];

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

const SuccessStory = () => {
  const sliderRef = useRef(null);
  const { screenWidth } = useScreenWidth();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth > 768 ? 4 : 1,
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
    <div className="md:py-20 py-10 bg-[#111111] text-[#E1E1E1]">
      <div className=" px-5 relative">
        <div className="justify-between items-start gap-6 md:max-w-[1400px] mx-auto mb-4">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-medium md:text-[40px] text-[30px] lg:flex-1"
          >
            Where Experience Meets Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="font-normal md:text-[20px] text-[16px] text-[#787878]"
          >
            Delivering Real Solutions, Driving Real Impact, Achieving Remarkable
            Results
          </motion.h2>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-3">
              {" "}
              {/* 👈 gap between slides */}
              <div className="relative group rounded-2xl overflow-hidden min-h-[250px] cursor-pointer">
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:hidden block">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                      {card.defaultText}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <p className="text-sm mb-3">{card.hoverText}</p>
                    <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium w-fit">
                      Learn More
                    </button>
                  </div>
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

export default SuccessStory;
