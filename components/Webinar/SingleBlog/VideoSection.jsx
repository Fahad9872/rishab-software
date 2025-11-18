"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import {
  FaFacebookF,
  FaEnvelope,
  FaLinkedinIn,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="">
      {/* Video Wrapper */}
      <div className=" bg-black py-10">
        <div className="relative rounded-xl  border-2 border-white overflow-hidden shadow-lg max-w-[1400px] mx-auto ">
          {!playing ? (
            <div className="relative">
              {/* Thumbnail */}
              <Image
                src="https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-bd33d4e/www.rishabhsoft.com/wp-content/uploads/2025/02/Ep-3-R-Tech-Talks-Role-of-Consulting-in-Sustainable-Tech-Partnerships_Webinar-Page_May-2022.jpg" // <-- add your thumbnail path here
                alt="Video Thumbnail"
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover"
              />

              {/* Play Button */}
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/90 text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition">
                  ▶
                </div>
              </button>
            </div>
          ) : (
            <ReactPlayer
              url="https://youtu.be/MTk2xH2mOq8" // replace with your video link
              width="100%"
              height="500px"
              playing={playing}
              controls
            />
          )}
        </div>
      </div>

      {/* Gradient Footer */}
      <div className="relative my-5 max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-[#7f21d3] to-[#d0175b] text-white p-5 md:p-6 rounded-b-xl">
          <h2 className="text-lg md:text-xl font-semibold mb-3">
            Role of Reliability in Sustainable Tech Partnership
          </h2>

          <hr />
          {/* Date + Tag */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
              <span>February 11, 2025</span>
              <span className="bg-black/30 px-3 py-1 rounded-md text-xs font-medium">
                R-Tech Talks
              </span>
            </div>
            {/* Social Share */}
            <div className="flex items-center gap-3 text-white text-lg">
              <FaFacebookF className="cursor-pointer hover:text-black transition" />
              <FaEnvelope className="cursor-pointer hover:text-black transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-black transition" />
              <FaWhatsapp className="cursor-pointer hover:text-black transition" />
              <FaTimes className="cursor-pointer hover:text-black transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
