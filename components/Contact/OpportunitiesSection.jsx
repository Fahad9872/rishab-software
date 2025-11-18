"use client";
import React from "react";

const opportunities = [
  {
    id: 1,
    title: "Partnership Opportunity",
    description: "Scouting for partnership opportunities? Get in touch.",
    color: "bg-[#0048ff]",
    pattern: (
      <>
        <div className="absolute right-6 top-6 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute right-12 top-12 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute right-6 top-16 w-6 h-6 bg-white/20 rounded-full"></div>
      </>
    ),
  },
  {
    id: 2,
    title: "Changing Jobs?",
    description: "Looking for a job? Apply here",
    color: "bg-[#e91e63]",
    pattern: (
      <>
        <div className="absolute right-12 top-6 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute right-6 top-12 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute right-12 top-20 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute right-20 top-12 w-6 h-6 bg-white/20 rounded-full"></div>
      </>
    ),
  },
  {
    id: 3,
    title: "Recent Graduate?",
    description:
      "Recent graduate looking to get hired? Get job-ready with LearnAtrise.",
    color: "bg-[#8e24aa]",
    pattern: (
      <>
        <div className="absolute right-16 top-6 w-6 h-6 bg-white/20 rounded-full"></div>
        <div className="absolute right-8 top-12 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute right-20 top-12 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute right-12 top-20 w-6 h-6 bg-white/20 rounded-full"></div>
      </>
    ),
  },
];

export default function OpportunitiesSection() {
  return (
    <div className="w-full px-5 md:px-10 lg:px-20  py-10">
      {/* Top hr line */}
      <hr className="mb-8 border-gray/30" />

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((item) => (
          <div
            key={item.id}
            className={`${item.color} relative rounded-2xl text-white p-6 overflow-hidden py-16`}
          >
            {/* Background pattern */}
            {item.pattern}

            {/* Text content */}
            <h3 className="text-[25px] font-semibold mb-2 relative z-10">
              {item.title}
            </h3>
            <p className="text-sm relative z-10">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
