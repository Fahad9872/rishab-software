"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Animation duration constants
const REVEAL_DURATION = 0.8; // Duration for the text reveal/hide slide
const FLASH_DURATION = 0.05; // Quick flash duration

export default function Together() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false); // New state to manage the reveal/hide cycle
  const currentWord = words[wordIndex];

  // Logic for cycling words and timing the mask animation
  useEffect(() => {
    let timer;

    if (!isRevealed) {
      // Phase 1: Reveal complete. Wait for a pause (1.8s) before starting the hide cycle.
      timer = setTimeout(() => {
        setIsRevealed(true); // Start the hiding animation
      }, 1000);
    } else {
      // Phase 2: Hiding complete. Switch to the next word and reset for reveal.
      // Wait for the reveal duration plus a small buffer to ensure the mask is fully closed/open.
      timer = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsRevealed(false); // Start the reveal animation on the new word
      }, REVEAL_DURATION * 1000 + 50);
    }

    return () => clearTimeout(timer);
  }, [isRevealed, wordIndex]);

  // Framer Motion variant for the smooth mask animation (reveals the text)
  const maskVariants = {
    // Hidden (Word is visible, mask is off-screen to the right)
    visible: {
      x: "100%",
      transition: { duration: REVEAL_DURATION, ease: [0.8, 0, 0.2, 1] },
    },
    // Mask in place (Word is hidden, mask covers the whole area, aligned to the left)
    hidden: {
      x: "0%",
      transition: { duration: REVEAL_DURATION, ease: [0.8, 0, 0.2, 1] },
    },
  };

  // Counters
  const solutions = useCounter(1400, 2000);
  const years = useCounter(25, 2000);
  const clients = useCounter(40, 2000);
  const employees = useCounter(800, 2000);

  return (
    <section className="w-full px-5 py-16 my-10 md:py-20 border-2 border-[#525252]/50 shadow-[0_0_80px_rgba(155,81,224,0.4)] bg-[#181818] text-[#E1E1E1] rounded-2xl border border-gray/50">
      <h1 className="text-[30px] md:text-[55px] text-center font-semibold mb-6 flex gap-2 justify-center">
        Together We{" "}
        <span className="text-purple-600 flex items-center gap-2 relative overflow-hidden">
          {/* STATIC WORD - Always rendered. Wrapped in a span for measuring width later if needed, but critical now */}
          <span className="relative z-10 whitespace-nowrap">{currentWord}</span>

          {/* MASK/WIPE BLOCK (Slides right to left, and left to right) */}
          <motion.div
            className="absolute inset-0 bg-[#181818] z-20 origin-left" // Match component background color
            variants={maskVariants}
            initial="hidden"
            // If isRevealed is FALSE, the word is revealing (x: 100% -> 0%)
            // If isRevealed is TRUE, the word is hiding (x: 0% -> 100%)
            animate={isRevealed ? "visible" : "hidden"}
            // The white flash effect seen in the video:
            // This mask momentarily becomes white (from the left edge)
            // when it starts hiding the word.
            style={{
              backgroundColor: isRevealed ? "white" : "#181818",
              // Temporarily increase Z-index when it becomes white to ensure it covers everything
              zIndex: isRevealed ? 40 : 20,
              // Set initial X position based on state for smooth cycling
              x: isRevealed ? 0 : "100%",
            }}
          />

          {/* CURSOR: Simple blinking indicator */}
          {/* <motion.div
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              times: [0, 0.5, 0.5, 1],
              ease: "easeInOut",
              delay: isRevealed ? 0 : REVEAL_DURATION, // Blink after reveal finishes
            }}
            className="w-[4px] bg-white self-center absolute z-30"
            style={{
              height: "1.2em",
              right: "-12px",
            }}
          >
            Hello
          </motion.div> */}
        </span>
      </h1>
      <h2 className="text-[20px] md:text-[25px] font-medium text-center mb-6">
        Empowering Your Growth with Disruptive Digital Solutions and Reliable
        Expertise
      </h2>
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            As a **Digital Engineering** and **Enterprise Transformation**
            leader, we empower businesses to scale, innovate, and thrive in
            today’s digital-first world through technology rooted in trust and
            transparency. We leverage emerging capabilities such as **Cloud**,
            **Data Engineering & Analytics**, **AI**, **Automation**, & **App
            Engineering** to drive digital transformation and unlock new
            opportunities.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            With a strategic vision from the very start, our talent workforce
            has a proven track record of crafting digital foundations that fuel
            lasting transformation. We have successfully served across 25+
            countries and we expertly steer our clients through their digital
            journey in an agile way towards customer delight as “WE CARE.”
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Every ace alliance starts with a plan, ready to elevate?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-3 rounded-xl bg-[#9B51E0] text-white transition duration-300 hover:bg-[#BB86FC] hover:shadow-xl hover:shadow-[#9B51E0]/50 active:scale-95 shadow-lg"
          >
            Let’s Collaborate!
          </motion.button>
        </div>

        {/* Right Stats with borders */}
        <div className="grid grid-cols-2 ">
          <div className="md:p-5 p-2 border-r border-gray-600 mx-1 mb-4 text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {solutions}+
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Solutions Delivered
            </p>
          </div>
          <div className="md:p-5 p-2 border-b border-gray-600 text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {years}+
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Years of Leading the
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Digital Revolution
            </p>
          </div>
          <div className="md:p-5 p-2 border-t border-gray-600 mx-2 text-center md:text-left">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {clients}+
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Global Clients with 5+
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Years of Tenure
            </p>
          </div>
          <div className="md:p-5 p-2 border-l border-gray-600 ml-[-5px] text-center md:text-left mt-3">
            <p className="md:text-[45px] text-[30px] font-medium text-purple-600">
              {employees}+
            </p>
            <p className="text-gray-400 md:text-[16px] text-[14px]">
              Employees and Growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
