"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Rise", "Innovate", "Transform", "Lead"];

function useCounter(target, duration) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Together() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 120;

    const type = () => {
      setDisplayedWord((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, wordIndex]);

  // Counters
  const solutions = useCounter(1400, 2000);
  const years = useCounter(25, 2000);
  const clients = useCounter(40, 2000);
  const employees = useCounter(800, 2000);

  return (
    <section className="w-full px-5 py-16 my-10 md:py-20 border-2 border-[#525252]/50 shadow-[0_0_80px_rgba(155,81,224,0.4)] bg-[#181818] text-[#E1E1E1] rounded-2xl border border-gray/50">
      <h1 className="text-[30px] md:text-[55px] text-center font-semibold mb-6">
        Together We <span className="text-purple-600">{displayedWord}</span>
      </h1>
      <h2 className="text-[20px] md:text-[25px] font-medium text-center mb-6">
        Empowering Your Growth with Disruptive Digital Solutions and Reliable
        Expertise
      </h2>
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            As a Digital Engineering and Enterprise Transformation leader, we
            empower businesses to scale, innovate, and thrive in today’s
            digital-first world through technology rooted in trust and
            transparency. We leverage emerging capabilities such as Cloud, Data
            Engineering & Analytics, AI, Automation, & App Engineering to drive
            digital transformation and unlock new opportunities.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            With a strategic vision from the very start, our talent workforce
            has a proven track record of crafting digital foundations that fuel
            lasting transformation. We have successfully served across 25+
            countries and we expertly steer our clients through their digital
            journey in an agile way towards customer delight as “WE CARE.”
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Every ace alliance starts with a plan, ready to elevate?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-3 rounded-xl bg-[#9B51E0] text-[#111111] transition duration-300 hover:bg-[#BB86FC] hover:shadow-xl hover:shadow-[#9B51E0]/50 active:scale-95 shadow-lg"
          >
            Let’s Collaborate!
          </motion.button>
        </div>

        {/* Right Stats with borders */}
        <div className="grid grid-cols-2 ">
          <div className="md:p-5 p-2  border-r border-gray/60 mx-1 mb-4 text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {solutions}+
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Solutions Delivered
            </p>
          </div>
          <div className="md:p-5 p-2 border-b border-gray/60  text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {years}+
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Years of Leading the
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Digital Revolution
            </p>
          </div>
          <div className="md:p-5 p-2 border-t  border-gray/60 mx-2  text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {clients}+
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Global Clients with 5+
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Years of Tenure
            </p>
          </div>
          <div className="md:p-5 p-2 border-l border-gray/60 ml-[-5px] text-center md:text-left mt-3">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {employees}+
            </p>
            <p className="text-gray/80 md:text-[16px] text-[14px]">
              Employees and Growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
