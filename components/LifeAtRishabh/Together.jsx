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

const Together = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: "",
    prevArrow: "",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 bg-[#181818] text-[#E1E1E1]">
      <div className=" px-5 relative w-[98%] mx-auto">
        <div className="text-center md:w-[50%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold  mb-3 text-center">
            Deciding. Experiencing. Thriving. Together.
          </h2>
          <p className="text-[#555555] text-lg mb-8 text-center">
            At Rishabh, our culture forms the foundation of success. We
            understand how work plays an integral part in the lives of our
            people. Acknowledging the same, we go above and beyond to provide
            our people with the benefits and support that makes them grow and
            flourish. Add to that an environment where anyone feels comfortable
            to be their unfiltered selves, communicating their challenges and
            putting ideas into action.
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default Together;
