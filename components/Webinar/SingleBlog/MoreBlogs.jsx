"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaPlay } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const tabs = ["Category"];

const categoryData = [
  "All",
  "Analytics & Data Science",
  "Cloud Computing",
  "DevOps & Infra Management",
  "Digital Services",
  "Consumer Mobility",
  "Digital Commerce",
  "Enterprise Application Services",
  "Enterprise Mobility",
  "Partnership",
  "Product Engineering",
  "Quality Assurance",
  "R-Tech Talks",
];

const caseStudies = [
  {
    id: 1,
    title: "Role of Reliability in Sustainable Tech Partnership",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-bd33d4e/www.rishabhsoft.com/wp-content/uploads/2025/02/EP-1-Role-of-Reliability-in-Sustainable-Tech-Partnership.jpg",
    categories: ["Partnership"],
    episode: "Episode 1",
  },
  {
    id: 2,
    title: "Role of Agility in Sustainable Tech Partnership",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-bd33d4e/www.rishabhsoft.com/wp-content/uploads/2025/02/EP-2-R-Tech-Talks_Webinar-Landing-Page-Image.jpg",
    categories: ["Partnership"],
    episode: "Episode 2",
  },
  {
    id: 3,
    title: "Role of Consulting in Sustainable Tech Partnership",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-bd33d4e/www.rishabhsoft.com/wp-content/uploads/2025/02/Ep-3-R-Tech-Talks-Role-of-Consulting-in-Sustainable-Tech-Partnerships_Webinar-Page_May-2022.jpg",
    categories: ["Partnership"],
    episode: "Episode 3",
  },
];

export default function MoreBlogs() {
  const [activeTab, setActiveTab] = useState("Category");
  const [openTab, setOpenTab] = useState("Category"); // controls accordion toggle
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    if (item === "All") {
      setSelectedItems([]);
    } else if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const data = categoryData;

  const filteredCaseStudies =
    selectedItems.length === 0
      ? caseStudies
      : caseStudies.filter((study) =>
          study.categories.some((cat) => selectedItems.includes(cat))
        );

  const router = useRouter();

  return (
    <div className="p-4 md:p-8">
      <p className="text-center text-[25px] font-medium">More Webinars</p>
      <p className="text-center md:w-[70%] w-[95%] mx-auto">
        Optimize your cloud infrastructure, implement robust solutions, and stay
        ahead of trends with our resource hub.
      </p>
      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-lg border border-gray/50 shadow-sm overflow-hidden hover:shadow-lg transition p-4"
          >
            {/* Image */}
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-[200px] object-cover mb-3"
            />
            {/* Content */}
            <div className="">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {study.title}
              </h3>
              <div
                onClick={() => {
                  router.push(
                    "/webinar/role-of-reliability-in-sustainable-tech-partnership"
                  );
                }}
                className="flex items-center text-pink-600 font-medium mt-3 cursor-pointer"
              >
                <FaPlay className="mr-2 text-xs" />
                Watch Now
              </div>
            </div>
          </div>
        ))}
        {filteredCaseStudies.length === 0 && (
          <p className="col-span-full text-center text-gray-600">
            No case studies found for selected filters.
          </p>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md text-sm font-medium transition">
          View All
        </button>
      </div>
    </div>
  );
}
