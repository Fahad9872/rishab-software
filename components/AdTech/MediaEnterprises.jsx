import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Programmatic Advertising",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">
          Unlock Precision-targeted Advertising Through Automated Bidding
        </h2>
        <p className="mb-2">
          We can help you develop tailored Ad Tech solutions to launch new
          features and outpace the competition. Our expert AdTech developers
          stand ready to support you in optimizing DSPs, SSPs, DMPs, and ad
          exchanges – enhancing infrastructure, refining UI, and providing
          detailed reporting.
        </p>
        <p className="mb-2">
          Our expertise lies in developing real-time bidding and programmatic
          advertising platforms designed for omnichannel advertising, including
          display, mobile, video, CTV, and OTT. Our team is proficient at
          designing and developing every element of the programmatic advertising
          ecosystem.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Demand-side platforms (DSPs)</li>
          <li>Supply-side platforms (SSPs)</li>
          <li>Ad networks</li>
          <li>Ad server software development</li>
          <li>RTB Ad exchange</li>
        </ul>
      </div>
    ),
  },
  {
    title: "RTB and Advertising Campaigns Automation",
    content: (
      <p>Content for RTB and Advertising Campaigns Automation goes here.</p>
    ),
  },
  {
    title: "CTV Exchange",
    content: <p>Content for CTV Exchange goes here.</p>,
  },
  {
    title: "Demand-side Platforms (DSPs)",
    content: <p>Content for DSPs goes here.</p>,
  },
  {
    title: "Supply-side Platforms (SSPs)",
    content: <p>Content for SSPs goes here.</p>,
  },
  {
    title: "Ad Exchange Marketplaces",
    content: <p>Content for Ad Exchange Marketplaces goes here.</p>,
  },
];

export default function MediaEnterprises() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Title */}
      <motion.p
        className="font-medium md:text-[40px] text-[20px] mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Build-to-Order AdTech Solutions for Modern Advertising Agencies & Media
        Enterprises
      </motion.p>

      {/* Flex wrapper */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Sidebar */}
        <div className="md:w-1/3 bg-gray-50 md:p-4 rounded-xl shadow-sm">
          <div className="space-y-6 border-l border-gray-700 ">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer font-semibold transition-colors ${
                  activeTab === index
                    ? "text-pink-500 border-l-2 border-pink-500 pl-3 ml-[-1px]"
                    : "text-white hover:text-pink-400 pl-3"
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 flex-grow  shadow-[0_0_80px_rgba(155,81,224,0.4)] overflow-hidden border-2 border-[#525252]/50 shadow-md rounded-2xl md:p-6 transition-all duration-300 ease-in-out">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}
