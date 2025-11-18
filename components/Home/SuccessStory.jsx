import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenWidth from "../hooks/useScreenWidth";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion"; // 👈 import framer-motion

const data = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Ravi",
    subject: "Mechanical Engineering",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Pulok",
    subject: "Mechanical Engineering",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Kibria",
    subject: "Mechanical Engineering",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Fahad",
    subject: "Mechanical Engineering",
  },
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Ravi",
    subject: "Mechanical Engineering",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Pulok",
    subject: "Mechanical Engineering",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Kibria",
    subject: "Mechanical Engineering",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Fahad",
    subject: "Mechanical Engineering",
  },
];

// Custom Arrows
// Custom Arrows (Desktop only)
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
    <div className="md:py-20  py-10 bg-[#111111] text-[#E1E1E1]">
      <div className=" px-5 relative">
        <div className="md:max-w-[1400px] mx-auto mb-5">
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
            className="font-normal md:text-[20px] text-[16px] md:w-[60%] text-[#787878]"
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
              <div className="bg-[#f8faff] border border-gray/70 rounded-xl p-6  h-[350px] flex flex-col justify-between shadow-sm relative hover:shadow-md transition">
                {/* Expand Icon (Top Right) */}
                <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition">
                  <BsArrowUpRight className="w-4 h-4 text-gray-700" />
                </button>

                {/* Icon */}
                <div className="flex items-center justify-center">
                  <div className=" flex items-center justify-center">
                    {/* Replace with your own SVG or image */}
                    <img
                      className="h-[80px] w-[100px] mt-5"
                      src="https://www.rishabhsoft.com/wp-content/uploads/2025/02/application-engieering.gif"
                      alt=""
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[20px] font-medium text-black mb-2">
                    Data & Analytics
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Turn data into insights that fuel smart strategies &amp;
                    reveal hidden opportunities
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Mobile Arrows */}
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
