"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaPlay } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const tabs = ["topic"];

const topicData = [
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
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-2356490/www.rishabhsoft.com/wp-content/uploads/2025/06/AWS_ebook-768x440.jpg",
    categories: ["Partnership"],
    episode: "Episode 1",
  },
  {
    id: 2,
    title: "Role of Agility in Sustainable Tech Partnership",
    image:
      "https://assets.allcode.com/wp-content/uploads/2021/07/top-aws-service-list-2023-scaled.webp",
    categories: ["Partnership"],
    episode: "Episode 2",
  },
  {
    id: 3,
    title: "Role of Consulting in Sustainable Tech Partnership",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-2356490/www.rishabhsoft.com/wp-content/uploads/2025/06/AWS_ebook-768x440.jpg",
    categories: ["Partnership"],
    episode: "Episode 3",
  },
];

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("topic");
  const [openTab, setOpenTab] = useState("topic"); // controls accordion toggle
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

  const data = topicData;

  const filteredCaseStudies =
    selectedItems.length === 0
      ? caseStudies
      : caseStudies.filter((study) =>
          study.categories.some((cat) => selectedItems.includes(cat))
        );
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="p-4 md:p-8">
        {/* Breadcrumb */}

        {/* Tabs */}
        <div className="flex ">
          {tabs.map((tab) => {
            const isActive = openTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setOpenTab(isActive ? "" : tab)}
                className={`flex items-center justify-between px-4 py-3 w-full font-medium text-sm md:text-base border ${
                  isActive
                    ? "border-purple-500 text-purple-500"
                    : "border-gray/50 text-gray-700"
                }`}
              >
                <span>
                  {tab}
                  {tab === "topic" && isActive && selectedItems.length > 0
                    ? ` (${selectedItems.length} Selected)`
                    : ""}
                </span>
                <span>{isActive ? <FaMinus /> : <FaPlus />}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Buttons (Accordion Content) */}
        {openTab === "topic" && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {data.map((item) => {
              const isSelected = selectedItems.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => handleSelect(item)}
                  className={`px-4 py-2 rounded-md border text-sm md:text-base transition-colors ${
                    item === "All"
                      ? "border-purple-400 text-purple-500"
                      : isSelected
                      ? "border-purple-500 text-purple-500"
                      : "border-gray/50 text-gray-700 hover:border-purple-500 hover:text-purple-500"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            {selectedItems.length > 0 && (
              <button
                onClick={() => setSelectedItems([])}
                className="ml-auto text-sm text-gray-500 hover:text-purple-500"
              >
                Clear All
              </button>
            )}
          </div>
        )}

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredCaseStudies.map((item) => (
            <div
              key={item.id}
              className="border-2 border-[#525252]/50 shadow-[0_0_80px_rgba(155,81,224,0.4)] bg-[#181818] text-[#E1E1E1] rounded-2xl overflow-hidden flex flex-col    p-5"
            >
              {/* Image */}
              <div className="relative w-full mb-3  flex items-center justify-center ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain rounded-2xl"
                />
              </div>

              {/* Text Content */}
              <div className=" flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {item.description}
                </p>

                {/* Button */}
                <button className="mt-4 w-max flex items-center gap-2 font-medium">
                  <MdKeyboardArrowRight /> Read More
                </button>
              </div>
            </div>
          ))}
          {filteredCaseStudies.length === 0 && (
            <p className="col-span-full text-center text-gray-600">
              No case studies found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
