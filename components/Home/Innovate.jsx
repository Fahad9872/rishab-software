"use client";
import React from "react";

export default function Innovate() {
  return (
    <section className=" bg-[#111111] text-[#E1E1E1] flex items-center justify-center px-6 py-20 relative overflow-hidden ">
      {/* Left Globe Image (absolute positioned to screen left) */}

      <img
        src="https://www.rishabhsoft.com/wp-content/uploads/2024/11/Globe-01.svg"
        alt="Globe Graphic"
        className="w-[380px] object-contain hidden md:block absolute left-[-80px] "
      />

      <div className="flex items-center justify-center max-w-[1400px] mx-auto">
        <div></div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 md:ml-auto text-center md:text-left relative z-10">
          <h1 className="text-3xl md:text-4xl font-medium  leading-snug">
            Create, Innovate & Lead with the Best!
          </h1>
          <p className="mt-4 text-xl md:text-3xl  ">
            Jobs in Tech can be monotonous{" "}
            <span className="text-purple-600 font-semibold">repeat</span>
            <br />
            But that’s not how we operate.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            At Rishabh Software, you get to dive into exciting projects with the
            pros, master new tech, and level up your career alongside a
            passionate team!
          </p>

          <button className="mt-6 px-6 py-3 rounded-md bg-[#9B51E0] text-white transition duration-300 hover:bg-[#BB86FC] hover:shadow-xl hover:shadow-[#9B51E0]/50 active:scale-95 shadow-lg font-medium shadow-md hover:opacity-90 transition">
            Explore Opportunities to Excel
          </button>
        </div>
      </div>
    </section>
  );
}
