// components/CareerTransformationSection.jsx
import Image from "next/image";

export default function CareerTransformationSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left side - Image with layered shapes */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          {/* Background shapes */}
          <div className="absolute -left-6 top-10 w-48 h-56 bg-gray-300 opacity-40 clip-triangle"></div>
          <div className="absolute -left-12 top-20 w-56 h-64 bg-gray-300 opacity-20 clip-triangle"></div>

          {/* Person image */}
          <img
            src="https://www.rishabhsoft.com/wp-content/uploads/elementor/thumbs/Career-Transformation-min-r2llw8v7g4jxb6taexjo6cncqtb9c2o3el9nlgm14i.png" // replace with your image path
            alt="Student"
            className="relative z-10"
          />

          {/* Pink triangle logo */}
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Gear up for{" "}
            <span className="text-purple-600">Career Transformation</span>
          </h2>
          <p className="text-lg text-[#d81b60] mt-2 font-medium">
            Rise, Refine, Redefine:
          </p>
          <p className="mt-3 font-semibold text-gray-800">
            Your Next-Level Leap into Tech’s Future
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            From bytes to breakthroughs, propel your profession forward with
            skill-sharpening programs and expert mentorship
          </p>

          <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition">
            Explore RISE
          </button>
        </div>
      </div>

      {/* Triangle clip-path styles */}
    </section>
  );
}
