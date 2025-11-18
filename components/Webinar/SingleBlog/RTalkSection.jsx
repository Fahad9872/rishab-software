"use client";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function RTalkSection() {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className=" mx-auto ">
        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About the R-Tech Talks
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            As a first session in the series, hear from the specialists how
            reliability is the key ingredient for building strategic
            partnerships. And, in the time of unpredictable market dynamics, how
            to scale up business in a fast and sustainable manner with reliable
            partnerships.
          </p>

          {/* Speaker Cards */}
          <div className="flex flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-3 border-2 border-red-600 rounded-lg px-4 py-3 w-full sm:w-auto">
              <Image
                src="https://www.rishabhsoft.com/wp-content/uploads/2025/02/Andy-Hiliard_Jan-2022-150x150.jpeg" // Replace with actual image
                alt="Andy Hillard"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Andy Hillard</h4>
                <p className="text-sm text-gray-600">CEO, Accelerance</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-2 border-red-600 rounded-lg px-4 py-3 w-full sm:w-auto">
              <Image
                src="https://www.rishabhsoft.com/wp-content/uploads/2025/02/Vincent-Irrling_Jan-2022-150x150.jpeg" // Replace with actual image
                alt="Vincent Irrling"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Vincent Irrling</h4>
                <p className="text-sm text-gray-600">Co-founder, Kapsly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section with Gray Background */}
        <div className="bg-[#f0f0f0]">
          <div className=" max-w-[1400px] mx-auto rounded-lg py-5 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Overview
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For businesses, partner-driven growth has been a strategy across
              all sizes and verticals to experience significant gains. With tech
              partnerships, companies look to digitally transform their
              businesses to beat the market competition. As a result, the focus
              has interestingly shifted towards delivering solutions that
              address specific business outcomes by leveraging the offshore
              model even better. And, this is creating the window of opportunity
              for strategic tech partnerships...
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">Do You Know?</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle size={20} className=" mt-1" />
                <p>
                  EY suggests, 2/3 business leaders are considering the curation
                  of effective partner ecosystems. Also, more than 50% of polled
                  leaders are a little skeptical of business ecosystems and
                  partnerships.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                <p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Forbes suggests
                  </a>
                  , developing a value mindset to align business and customer
                  priorities over personal wins.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                <span>
                  <a href="#" className="text-blue-600 hover:underline">
                    BPI Network report suggests
                  </a>
                  , 57% of organizations utilize partnerships to acquire new
                  customers.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1400px] mx-auto">
          {/* Learn How To */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Learn How To?
            </h3>
            <hr className="mb-3 bg-gray" />
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Harness each other’s strengths, capabilities and network
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Achieve guaranteed growth of top-line revenue
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Bring operational efficiency, across diverse geographies
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Create a win-win situation for every stakeholder eventually
              </li>
            </ul>
          </div>

          {/* Whom Would It Help */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Whom Would It Help?
            </h3>
            <hr className="mb-3 bg-gray" />
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                CIOs, CEOs and IT Leaders
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Owners, Co-owners & Entrepreneurs
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle size={16} className=" mt-1" />
                Change Managers & Consultants
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
