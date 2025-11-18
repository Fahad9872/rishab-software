import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import logo from "../../assets/Pages/Home/images/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { capitalizeFirstLetter, isEmpty } from "../../utils/utils";
import { GoChevronDown } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const NavBar = () => {
  const text = `hover:text-white`;
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileResources, setOpenMobileResources] = useState(false);

  let userName = "Ravi";

  // Mega menu data
  const servicesData = [
    {
      title: "Data & Analytics",
      items: [
        "Data Analytics Consulting Services",
        "Data Modernization",
        "Big Data Services",
        "Business Intelligence Services",
        "Data Warehouse Consulting",
        "Data Engineering Services",
      ],
    },
    {
      title: "Digital Engineering",
      items: [
        "SaaS Development Services",
        "App Modernization",
        "Digital Product Engineering",
        "Digital Enterprise",
        "IoT Services",
      ],
    },
    {
      title: "Cloud",
      items: [
        "Cloud App Development",
        "Cloud Consulting",
        "Cloud Migration Services",
        "Cloud Integration",
        "Cloud Managed Services",
        "DevOps",
      ],
    },
    {
      title: "Artificial Intelligence",
      items: [
        "AI/ML Engineering",
        "GenAI Development Services",
        "AI Consulting",
        "AI Agent Development Services",
      ],
    },
    {
      title: "Application Engineering",
      items: [
        "Mobile App Development",
        "Quality Engineering Services",
        "Application Development And Maintenance",
        "Application Integration Services",
      ],
    },
    {
      title: "Microsoft Technology",
      items: [
        "Modern Workplace",
        "Data And AI Services",
        "Business Application Services",
        "Digital & App Innovation",
      ],
    },
  ];
  const industriesData = [
    {
      title: "Adtech",
      url: "industry/adtech",
    },
    {
      title: "Digital Manufacturing",
      url: "industry/digital-manufacturing",
    },
    {
      title: "Fintech",
      url: "industry/fintech",
    },
    {
      title: "Healthtech",
      url: "industry/healthtech",
    },
    {
      title: "Logistics And scm",
      url: "industry/logistics-and-scm",
    },
    {
      title: "Retail",
      url: "industry/retail",
    },
    {
      title: "Other",
      url: "other-industries",
    },
  ];
  const insightsData = [
    {
      title: "Blogs",
      url: "blogs",
    },
    {
      title: "Case Studies",
      url: "our-work",
    },
    {
      title: "Press Releases",
      url: "press-releases",
    },
    {
      title: "White Papers",
      url: "whitepaper",
    },
    {
      title: "Webiners",
      url: "webinar",
    },
  ];
  const aboutusData = [
    {
      title: "About Us",
      url: "about",
    },
    {
      title: "How We Engage",
      url: "engage",
    },
    {
      title: "Partners",
      url: "partners",
    },
    {
      title: "Life At Rishabh",
      url: "life-at-rishabh",
    },

    {
      title: "Careers",
      url: "careers",
    },
  ];

  const FAQsData = [
    {
      id: 1,
      question: "Why should I choose IELTScare?",
      answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare provides an all-in-one platform for IELTS preparation, including personalized study plans, practice tests, and expert guidance. We offer comprehensive study materials and mock tests to help you achieve your desired band score.
        </p>`,
    },
    {
      id: 2,
      question: "What courses does IELTScare offer?",
      answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare offers courses for all four IELTS sections: Listening, Reading, Writing, and Speaking. We provide self-paced courses, live coaching sessions, and one-on-one mentorship to cater to different learning styles.
        </p>`,
    },
    {
      id: 3,
      question: "How does IELTScare help with IELTS Speaking?",
      answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare provides AI-powered speaking assessments, live mock interviews with certified trainers, and real-time feedback to improve fluency, pronunciation, and confidence for the IELTS Speaking test.
        </p>`,
    },
    {
      id: 4,
      question: "Does IELTScare offer mock tests?",
      answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          Yes! IELTScare offers full-length IELTS mock tests that simulate the real exam experience. Our mock tests help you assess your strengths and weaknesses and provide detailed performance analysis.
        </p>`,
    },
    {
      id: 5,
      question: "Who can use IELTScare’s services?",
      answer: `<p className="text-[#645D69] md:text-[18px] text-[13px] p-4 md:leading-8 leading-[25px]">
          IELTScare’s services are available to anyone preparing for the IELTS exam, whether you're a student, working professional, or planning to migrate abroad. Our courses are designed for both Academic and General Training candidates.
        </p>`,
    },
  ];

  const [isOpen, setIsOpen] = useState([]);

  const accordionData = [
    {
      title: "Services",
      items: servicesData, // already has { title, items }
    },
    {
      title: "Industries",
      items: industriesData, // same structure
    },
    {
      title: "Insights",
      items: insightsData,
    },
    {
      title: "About",
      items: aboutusData,
    },
  ];
  function slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/&/g, "and") // replace "&" with "and"
      .replace(/[^a-z0-9]+/g, "-") // replace spaces & symbols with -
      .replace(/(^-|-$)+/g, ""); // remove leading/trailing -
  }
  const [openSections, setOpenSections] = React.useState([]); // tracks parent
  const [openSubItems, setOpenSubItems] = React.useState({}); // tracks sub-items per parent

  return (
    <div className=" relative">
      <div className="  bg-[#111111] text-[#E1E1E1] ">
        <div className="flex justify-between items-center md:px-10 px-3 relative md:max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="py-3" onClick={() => router.push(`/`)}>
            {/* <Image
              width={80}
              height={30}
              className="md:h-[40px] h-[30px] md:w-[40px] w-[30px] "
              sizes="(max-width: 768px) 100vw, 170px"
              priority={true}
              fetchPriority="high"
              src={logo}
              alt="Logo"
            /> */}
            <img
              src="https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-05d8ef3/www.rishabhsoft.com/wp-content/themes/hello-theme-child-master/assets/images/rspl-logo.svg"
              alt=""
              srcset=""
            />
          </div>

          {/* Desktop Menu */}
          <div>
            <nav className="md:flex hidden">
              {/* Home */}

              {/* Resources Mega Menu */}
              <div className=" mx-3 group ">
                <div className="flex items-center cursor-pointer py-[25px]">
                  <p className=" text-[16px]">Services</p>
                  <GoChevronDown className="ml-1 text-[16px]" />
                </div>

                {/* Mega Menu */}
                <div className="absolute top-[75px] left-0 w-full max-w-[1440px] bg-white shadow-lg rounded-b-[10px] z-50 hidden group-hover:block">
                  <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  ">
                    {servicesData.map((section, index) => (
                      <div key={index}>
                        <div className="bg-light-gray">
                          {/* group/section */}
                          <div
                            onClick={() => {
                              const slug = slugify(section.title);
                              router.push(`/services/${slug}`);
                            }}
                            className="text-[16px] font-semibold text-black mb-2 py-3 px-5 
                      hover:bg-[linear-gradient(to_right,#7f21d3_0%,#d0175b_100%)] 
                      hover:text-white cursor-pointer flex items-center justify-between group/section"
                          >
                            <h3>{section.title}</h3>
                            {/* Scoped hover to group/section only */}
                            <FaArrowRight className="text-white hidden group-hover/section:block" />
                          </div>
                        </div>

                        <ul className="mb-3 px-4">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              onClick={() => {
                                const slug = slugify(item);
                                router.push(`/services/${slug}`);
                              }}
                              className="text-[14px] text-[#333] cursor-pointer px-2 rounded-md py-2 
                     flex items-center justify-between group/item
                     hover:bg-[linear-gradient(to_right,#7f21d3_0%,#d0175b_100%)] 
                     hover:text-white"
                            >
                              <p>{item}</p>
                              {/* Scoped hover to group/item only */}
                              <FaArrowRight className="text-white hidden group-hover/item:block" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" mx-3 group ">
                <div className="flex items-center cursor-pointer py-[25px]">
                  <p className=" text-[16px]">Industries</p>
                  <GoChevronDown className="ml-1 text-[16px]" />
                </div>

                {/* Mega Menu */}
                <div className="absolute top-[75px] left-0 w-full max-w-[1440px] bg-white shadow-lg rounded-b-[10px] z-50 hidden group-hover:block">
                  <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 px-4 ">
                    {industriesData.map((section, index) => (
                      <div
                        onClick={() => {
                          router.push(`/${section?.url}`);
                        }}
                        key={index}
                      >
                        <div className="">
                          {/* group/section */}
                          <div
                            className="text-[16px] font-semibold text-black my-2 py-3 px-5 
                      hover:bg-[linear-gradient(to_right,#7f21d3_0%,#d0175b_100%)] 
                      hover:text-white cursor-pointer flex items-center justify-between group/section rounded-md"
                          >
                            <h3>{section.title}</h3>
                            {/* Scoped hover to group/section only */}
                            <FaArrowRight className="text-white hidden group-hover/section:block" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success Story */}
              <div onClick={() => router.push(`/our-work`)}>
                <p
                  className={`${text}  text-[16px] mx-3 cursor-pointer py-[25px]`}
                >
                  Our Work
                </p>
              </div>
              <div className=" mx-3 group ">
                <div className="flex items-center cursor-pointer py-[25px]">
                  <p className=" text-[16px]">Insights</p>
                  <GoChevronDown className="ml-1 text-[16px]" />
                </div>

                {/* Mega Menu */}
                <div className="absolute top-[75px] left-0 w-full max-w-[1440px] bg-white shadow-lg rounded-b-[10px] z-50 hidden group-hover:block">
                  <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 px-4 ">
                    {insightsData.map((section, index) => (
                      <div
                        onClick={() => {
                          router.push(`/${section?.url}`);
                        }}
                        key={index}
                      >
                        <div className="">
                          {/* group/section */}
                          <div
                            className="text-[16px] font-semibold text-black my-2 py-3 px-5 
                      hover:bg-[linear-gradient(to_right,#7f21d3_0%,#d0175b_100%)] 
                      hover:text-white cursor-pointer flex items-center justify-between group/section rounded-md"
                          >
                            <h3>{section.title}</h3>
                            {/* Scoped hover to group/section only */}
                            <FaArrowRight className="text-white hidden group-hover/section:block" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" mx-3 group ">
                <div className="flex items-center cursor-pointer py-[25px]">
                  <p className=" text-[16px]">About</p>
                  <GoChevronDown className="ml-1 text-[16px]" />
                </div>

                {/* Mega Menu */}
                <div className="absolute top-[75px] left-0 w-full max-w-[1440px] bg-white shadow-lg rounded-b-[10px] z-50 hidden group-hover:block">
                  <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 px-4 ">
                    {aboutusData.map((section, index) => (
                      <div key={index}>
                        <div className="">
                          {/* group/section */}
                          <div
                            onClick={() => {
                              router.push(`/${section?.url}`);
                            }}
                            className="text-[16px] font-semibold text-black my-2 py-3 px-5 
                      hover:bg-[linear-gradient(to_right,#7f21d3_0%,#d0175b_100%)] 
                      hover:text-white cursor-pointer flex items-center justify-between group/section rounded-md"
                          >
                            <h3>{section.title}</h3>
                            {/* Scoped hover to group/section only */}
                            <FaArrowRight className="text-white hidden group-hover/section:block" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Us */}

              {!isAuthenticated ? (
                <div className="md:flex hidden flex-row items-center gap-5">
                  <button
                    onClick={() => {
                      router.push("/contact-us");
                    }}
                    className="border-white border-2 text-white px-4 py-2 font-medium rounded-[10px]"
                  >
                    Contact
                  </button>
                  <FaSearch size={25} className="text-white" />
                </div>
              ) : (
                <div className="md:flex hidden justify-center text-black space-x-2">
                  <div className="flex items-center cursor-pointer">
                    <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center p-1 text-white">
                      {userName?.slice(0, 1).toUpperCase()}
                    </div>
                    <p className="text-white text-lg ml-2">
                      {!isEmpty(userName) && capitalizeFirstLetter(userName)}
                    </p>
                  </div>
                </div>
              )}
            </nav>
          </div>

          {/* Right Section */}

          {/* Mobile Menu */}
          <div className="md:hidden block">
            <div className="bg-white rounded px-3 py-2">
              <AiOutlineMenu
                className="text-black cursor-pointer"
                size={20}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            </div>
            <div
              className={`transition-all duration-300 ${
                !isMenuOpen ? "translate-x-full" : "translate-x-0"
              } w-[100vw] h-screen overflow-y-scroll bg-white shadow-4xl right-0 top-0 p-5 rounded-l-xl fixed z-50`}
            >
              <div className="flex justify-between items-center">
                <Link legacyBehavior prefetch={false} href={"/"}>
                  <Image
                    width={120}
                    height={30}
                    className="h-[50px] w-auto"
                    sizes="(max-width: 768px) 100vw, 120px"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
                <GiCancel
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl text-[#FF0000] cursor-pointer"
                />
              </div>

              {/* Mobile Nav */}
              <div className="mt-5 overflow-y-scroll">
                {accordionData.map((section, i) => (
                  <div key={i} className="w-full my-2 border-b-2 border-gray">
                    {/* Parent Header */}
                    <div
                      onClick={() => {
                        if (openSections.includes(i)) {
                          setOpenSections(openSections.filter((e) => e !== i));
                        } else {
                          setOpenSections([...openSections, i]);
                        }
                      }}
                      className="flex justify-between md:p-4 p-2 rounded-md cursor-pointer"
                    >
                      <p
                        className={`flex font-medium select-none text-[20px] ${
                          openSections.includes(i)
                            ? "bg-gradient-to-r from-[#7f21d3] to-[#d0175b] text-transparent bg-clip-text"
                            : "text-[#474747]"
                        }`}
                      >
                        {section.title}
                      </p>
                      <span className="text-[23px] text-primary">
                        {openSections.includes(i) ? <FaMinus /> : <FaPlus />}
                      </span>
                    </div>

                    {/* Parent Expanded Content */}
                    {openSections.includes(i) && (
                      <div className="p-4 bg-white rounded-md">
                        {section.items.map((item, idx) => (
                          <div key={idx} className="mb-4">
                            {/* Sub-header */}
                            <div
                              className={`flex justify-between items-center p-2 cursor-pointer rounded-md ${
                                item.items ? "cursor-pointer bg-gray-50" : ""
                              }`}
                              onClick={() => {
                                router.push(`/${item?.url}`);
                                if (item.items) {
                                  setOpenSubItems((prev) => ({
                                    ...prev,
                                    [`${i}-${idx}`]: !prev[`${i}-${idx}`],
                                  }));
                                }
                              }}
                            >
                              <h3
                                className={`text-[16px] font-semibold ${
                                  openSubItems[`${i}-${idx}`] && item.items
                                    ? "bg-gradient-to-r from-[#7f21d3] to-[#d0175b] text-transparent bg-clip-text"
                                    : "text-black"
                                }`}
                              >
                                {item.title}
                              </h3>

                              {/* Show plus/minus only if there are sub-items */}
                              {item.items && (
                                <span className="text-primary text-[20px]">
                                  {openSubItems[`${i}-${idx}`] ? (
                                    <FaMinus />
                                  ) : (
                                    <FaPlus />
                                  )}
                                </span>
                              )}
                            </div>

                            {/* Nested content */}
                            {openSubItems[`${i}-${idx}`] && item.items && (
                              <ul className="pl-4 mt-2">
                                {item.items.map((sub, subIdx) => (
                                  <li
                                    key={subIdx}
                                    className="text-[14px] text-[#333] py-1 hover:text-primary cursor-pointer"
                                  >
                                    {sub}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
