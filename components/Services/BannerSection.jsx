import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import Carousel from "react-elastic-carousel";

const data = [
  {
    id: 1,
    section: (
      <Banner
        name={"Brand Ethos"}
        image={
          "https://img.lovepik.com/background/20211021/large/lovepik-ai-technology-background-image_400731806.jpg"
        }
      />
    ),
    name: "Brand Ethos",
  },
  {
    id: 2,
    section: (
      <Banner
        name={"Work Intelligence"}
        image={
          "https://www.shutterstock.com/image-vector/set-most-famous-cryptocurrency-coins-600nw-1975856621.jpg"
        }
      />
    ),
    name: "Work Intelligence",
  },
  {
    id: 3,
    section: (
      <Banner
        name={"Cloud Powered Innovation"}
        image={
          "https://www.shutterstock.com/image-vector/set-most-famous-cryptocurrency-coins-600nw-1975856621.jpg"
        }
      />
    ),
    name: "Cloud Powered Innovation",
  },
  {
    id: 4,
    section: (
      <Banner
        name={"MS Ecosystem Excellence"}
        image={
          "https://media.licdn.com/dms/image/v2/D5612AQFdijG9GiQ5xA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1672101149693?e=2147483647&v=beta&t=H-8sMdS9gObn1qvloiEJeLRuMZa4jYGPNBuum1oimHk"
        }
      />
    ),
    name: "MS Ecosystem Excellence",
  },
  {
    id: 5,
    section: (
      <Banner
        name={"AI Innoavation"}
        image={
          "https://www.thetambellinigroup.com/wp-content/uploads/2019/11/top-of-mind-AI-revolution-post.png"
        }
      />
    ),
    name: "AI Innoavation",
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

const logos = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

const BannerSection = ({ name }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplaySpeed = 5000; // 3 seconds per slide

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,

    afterChange: (current) => setActiveIndex(current),
  };

  const handleTabClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 2 }, // mobile
    { width: 640, itemsToShow: 3 }, // small tablets
    { width: 1024, itemsToShow: 5 }, // desktop
  ];

  return (
    <div className=" bg-purple-50 ">
      <Banner
        name={name}
        image={
          "https://img.lovepik.com/background/20211021/large/lovepik-ai-technology-background-image_400731806.jpg"
        }
      />
    </div>
  );
};

export default BannerSection;
