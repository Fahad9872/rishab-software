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

export default function TabSection() {
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
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-5">
        <p>Home</p>
        <IoIosArrowBack className="rotate-180" />
        <p>Webinar</p>
      </div>

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
                {tab === "Category" && isActive && selectedItems.length > 0
                  ? ` (${selectedItems.length} Selected)`
                  : ""}
              </span>
              <span>{isActive ? <FaMinus /> : <FaPlus />}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Buttons (Accordion Content) */}
      {openTab === "Category" && (
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
        {filteredCaseStudies.map((study) => (
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
    </div>
  );
}
