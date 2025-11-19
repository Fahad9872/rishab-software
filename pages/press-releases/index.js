import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import { MdKeyboardArrowRight } from "react-icons/md";

const PressReleasess = [
  {
    id: 1,
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-2356490/www.rishabhsoft.com/wp-content/uploads/2025/06/AWS_ebook-768x440.jpg", // replace with your actual image
    title:
      "AWS Cost Optimization: A CTO’s Guide to Smarter AWS Cost Management",
    description:
      "Achieve Optimal AWS Spending with Proven Cost Management Approaches",
    buttonText: "Download",
  },
  {
    id: 2,
    image:
      "https://assets.allcode.com/wp-content/uploads/2021/07/top-aws-service-list-2023-scaled.webp",
    title: "AI Transformation: Driving Growth with Intelligent Automation",
    description:
      "Unlock the power of AI to streamline business processes and scale operations.",
    buttonText: "Download",
  },
];

export default function PressReleases() {
  return (
    <div className="bg-[#181818] text-[#E1E1E1]">
      <NavBar />
      <div className="md:max-w-[1600px] px-3 md:mx-auto">
        <div className="my-10 ">
          {/* Breadcrumb */}
          <div className="text-[18px] text-gray-600 mb-6">
            <span className="text-gray-500">Home</span>{" "}
            <span className="mx-1">›</span>{" "}
            <span className="text-purple-600 font-medium">Press Releases</span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PressReleasess.map((item) => (
              <div
                key={item.id}
                className="border-2 border-[#525252]/50 shadow-[0_0_80px_rgba(155,81,224,0.4)] bg-[#181818] text-[#E1E1E1] p-5 rounded-2xl"
              >
                {/* Image */}
                <div className="relative w-full mb-3  flex items-center justify-center ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain rounded-2xl"
                  />
                </div>

                {/* Text Content */}
                <div className=" flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button className="mt-4 w-max flex items-center gap-2 font-medium">
                    <MdKeyboardArrowRight /> Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
