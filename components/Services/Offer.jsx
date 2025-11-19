import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Offer = () => {
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
    <div className="py-10">
      <div className="px-5">
        <div className="md:max-w-[1600px] px-3 md:mx-auto relative">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Related Offerings
          </h2>
          <p className="text-[#555555] text-lg mb-8 md:w-3/4">
            Turn your data into decisions and challenges into opportunities with
            our wide range of offerings.
          </p>
        </div>
        {/* Slider with arrows inside */}
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="relative rounded-2xl shadow-md overflow-hidden 
                     bg-gradient-to-r from-indigo-100 via-white to-pink-50 
                     h-64 flex flex-col justify-center p-6 text-left 
                     transition-all duration-500 group cursor-pointer"
              >
                {/* Background hover image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 
                               transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-500 rounded-2xl"
                ></div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-white transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white text-sm transition-colors">
                    {item.subject}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
