import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const FAQsData = [
  {
    id: 1,
    question: "Why should I choose IELTScare?",
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-gray-700 md:text-[16px] text-[14px] leading-relaxed">
        <li>IELTScare provides an all-in-one platform for IELTS preparation, including personalized study plans, practice tests, and expert guidance.</li>
        <li>We offer comprehensive study materials and mock tests to help you achieve your desired band score.</li>
      </ul>
    `,
  },
  {
    id: 2,
    question: "What courses does IELTScare offer?",
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-gray-700 md:text-[16px] text-[14px] leading-relaxed">
        <li>IELTScare offers courses for all four IELTS sections: Listening, Reading, Writing, and Speaking.</li>
        <li>We provide self-paced courses, live coaching sessions, and one-on-one mentorship.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: "How does IELTScare help with IELTS Speaking?",
    answer: `
      <ul class="list-disc pl-5 space-y-2 text-gray-700 md:text-[16px] text-[14px] leading-relaxed">
        <li>AI-powered speaking assessments</li>
        <li>Live mock interviews with certified trainers</li>
        <li>Real-time feedback to improve fluency, pronunciation, and confidence</li>
      </ul>
    `,
  },
  {
    id: 4,
    question: "Does IELTScare offer mock tests?",
    answer: `
      <p class="text-gray-700 md:text-[16px] text-[14px] leading-relaxed">
        Yes! IELTScare offers full-length IELTS mock tests that simulate the real exam experience. Our mock tests help you assess your strengths and weaknesses and provide detailed performance analysis.
      </p>
    `,
  },
  {
    id: 5,
    question: "Who can use IELTScare’s services?",
    answer: `
      <p class="text-gray-700 md:text-[16px] text-[14px] leading-relaxed">
        IELTScare’s services are available to anyone preparing for the IELTS exam, whether you're a student, working professional, or planning to migrate abroad. Our courses are designed for both Academic and General Training candidates.
      </p>
    `,
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState([]);

  const toggleFAQ = (i) => {
    if (isOpen.includes(i)) {
      setIsOpen(isOpen.filter((e) => e !== i));
    } else {
      setIsOpen([...isOpen, i]);
    }
  };

  return (
    <div section className="relative py-12 bg-[#f0f0f0]">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
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
      {/* Heading */}
      <div className="md:max-w-[1400px] px-3 md:mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">
          FAQ
        </h2>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-300">
          {FAQsData.map((element, i) => (
            <div key={i} className="py-5">
              {/* Question Row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(i)}
              >
                <p className="font-medium text-gray-900 md:text-[20px] text-[16px]">
                  {element.question}
                </p>
                <span className="text-[24px] text-pink-600">
                  {isOpen.includes(i) ? <CiCircleMinus /> : <CiCirclePlus />}
                </span>
              </div>

              {/* Answer */}
              {isOpen.includes(i) && (
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{ __html: element.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
