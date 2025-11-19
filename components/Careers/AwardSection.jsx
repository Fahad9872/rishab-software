import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScreenWidth from "../hooks/useScreenWidth";

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

const AwardSection = () => {
  const { screenWidth } = useScreenWidth();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth > 768 ? 4 : 1,
    slidesToScroll: 1,
    autoplay: true,

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
    <div className="py-10 bg-[#111111] text-[#E1E1E1]">
      <div className=" px-5 relative max-w-[1400px] mx-auto">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="md:w-[80%] text-center mx-auto my-10">
          <p className="font-medium text-[30px] ">
            Be part of an award-winning company where your talents are nurtured
            and your success is celebrated.
          </p>
          <p>
            Explore our opportunities and embark on a fulfilling career journey
            today.
          </p>

          <button
            type="submit"
            className="w-fit py-2 px-4 mt-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            View Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
