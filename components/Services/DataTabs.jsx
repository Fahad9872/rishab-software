"use client";
import { useState } from "react";

const tabsData = [
  {
    title: "Data Strategy",
    content: `Our data consultants design robust data strategies that align with business goals,
    driving efficiency, innovation, and long-term growth.`,
  },
  {
    title: "Data Governance",
    content: (
      <>
        <p className="mb-3">
          Our data consultants implement enterprise-grade governance frameworks
          that maximize data asset value while ensuring regulatory compliance.
          Our result-driven data and analytics consulting services deliver
          automated controls and policies that maintain data integrity at scale.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Data Quality Framework</b> to deploy automated quality controls
            for accurate and trusted reporting
          </li>
          <li>
            <b>Metadata Management Solution</b> to enable enterprise-wide data
            visibility and regulatory compliance
          </li>
          <li>
            <b>Compliance & Risk Management</b> to automate regulatory adherence
            while accelerating innovation initiatives
          </li>
          <li>
            <b>Data Stewardship Program</b> to establish organizational
            excellence in data asset management
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Business Intelligence Consulting",
    content: `We enable enterprises to unlock insights through dashboards, analytics, and BI solutions.`,
  },
  {
    title: "Data Engineering Consulting",
    content: `Our team builds modern pipelines and architectures for scalable data engineering.`,
  },
  {
    title: "Big Data Consulting",
    content: `We design and deploy big data platforms that scale with your enterprise.`,
  },
  {
    title: "Data Migration & Modernization",
    content: `We migrate legacy systems into modern cloud-first architectures with minimal disruption.`,
  },
  {
    title: "Data Management",
    content: `We help organizations establish secure, governed, and sustainable data management practices.`,
  },
];

export default function DataTabs() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active: Data Governance

  return (
    <section className="bg-black text-white py-16 pb-[120px] px-4 md:px-12 lg:px-20 relative">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Enterprise Data and Analytics Consulting Services to Build an
        <br className="hidden md:block" /> Insight-Driven Organization
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
        {/* Tabs list */}
        <div className="space-y-6 border-l border-gray-700 ">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer font-semibold transition-colors ${
                activeIndex === index
                  ? "text-pink-500 border-l-2 border-pink-500 pl-3 ml-[-1px]"
                  : "text-white hover:text-pink-400 pl-3"
              }`}
            >
              {tab.title}
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="md:col-span-2 bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl p-8 shadow-lg">
          <div className="text-white text-[15px] md:text-base leading-relaxed">
            {tabsData[activeIndex].content}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full md:h-[80px] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
