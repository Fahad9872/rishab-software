import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ChooseOstello from "@/components/Home/ChooseOstello";
import Vision from "@/components/Home/Vision";
import SuccessStory from "@/components/Home/SuccessStory";
import Together from "@/components/Home/Together";
import ContactSection from "@/components/Home/ContactSection";
import LatestInsights from "@/components/Home/LatestInsights";
import ClientChatter from "@/components/Home/ClientChatter";
import BannerSection from "@/components/Home/BannerSection";
import AwardSection from "@/components/Careers/AwardSection";
import ResumeForm from "@/components/LifeAtRishabh/ResumeForm";
import CTASection from "@/components/Careers/CTASection";
import CareerTransformationSection from "@/components/Careers/CareerTransformationSection";

const industries = [
  {
    id: 1,
    title: "Media & Entertainment",
    description:
      "We deliver tailored software solutions for the media and entertainment industry, driving digital adoption in live streaming, media analytics, digital advertising, and publishing. From seamless video streaming to AI-driven audience insights and cross-platform engagement, we build adaptable, on-demand platforms that enhance your digital strategy. Whether you are a local ad agency or a global DOOH provider, we optimize operations and personalize content with advanced analytics while modernizing IT infrastructure using cloud technology for efficient data management and distribution.",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-2356490/www.rishabhsoft.com/wp-content/uploads/2025/01/Real-estate-1.jpg",
  },
  {
    id: 2,
    title: "Real Estate",
    description:
      "We build fully tailored PropTech solutions that integrate AI-powered property valuations, immersive virtual tours, and automated facility management to streamline every aspect of your property management lifecycle. With features like smart property listing management, automated maintenance tracking, and advanced analytics dashboards, you’ll reduce operational costs and close deals faster for a higher ROI. Our mobile-first approach ensures your team and clients can access critical information anytime, anywhere.",
    image:
      "https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-2356490/www.rishabhsoft.com/wp-content/uploads/2025/01/Travel-.jpg",
  },
];
export default function Career() {
  return (
    <div className="">
      <NavBar />
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#e3275d] via-[#9b2fa8] to-[#3a3aff]">
        {/* Background arcs overlay */}
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 320"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Left arcs */}
            <circle
              cx="0"
              cy="160"
              r="320"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="80"
            />
            <circle
              cx="0"
              cy="160"
              r="480"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="80"
            />

            {/* Right arcs */}
            <circle
              cx="1920"
              cy="160"
              r="320"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="80"
            />
            <circle
              cx="1920"
              cy="160"
              r="480"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="80"
            />
          </svg>
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-2xl md:text-4xl font-semibold">
            Join Us on a Journey to Technology <br /> Excellence
          </h2>

          <div className="border border-white rounded-md px-5 py-3 text-white w-fit mx-auto mt-5">
            View Current Openings
          </div>
        </div>

        {/* Bottom curved white shape */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none">
          <svg
            className="w-full h-[30px] md:h-[80px]"
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
      </section>
      <div className="md:max-w-[1400px] px-3 md:mx-auto">
        <div className="my-10">
          {/* Breadcrumb */}
          <div className="text-[18px] text-gray-600 mb-6">
            <span className="text-gray-500">Home</span>{" "}
            <span className="mx-1">›</span>{" "}
            <span className="text-purple-600 font-medium"> Careers</span>
          </div>
          <div className="md:w-[80%] mx-auto text-center">
            <p className="text-[30px] font-medium text-center mb-3">
              Career at Rishabh​
            </p>
            <p>
              Leverage abundant opportunities to grow with Rishabh software.
              Over the years, we have developed a global talent pool that has
              brought in innovation with their new ideas. Today, the same
              entrepreneurial spirit drives our culture of collaboration,
              diversity, creativity, growth, and success. And, we are always
              looking for exceptional talent! If you need a mid-career switch or
              are a software developer ready to hit the road to success, we
              would like to hear from you.
            </p>
          </div>
        </div>
      </div>
      <AwardSection />
      <ResumeForm />

      <div className="max-w-[1400px] mx-auto">
        {industries.map((item, index) => (
          <div
            key={item.id}
            className="items-center bg-purple-50 rounded-2xl p-6 md:p-10 mb-10"
          >
            {/* Alternate image position */}
            {index % 2 === 0 ? (
              <div className=" md:grid grid-cols-2 items-center justify-between gap-5">
                {/* Text */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <button className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition">
                    Explore
                  </button>
                </div>
                {/* Image */}
                <div className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            ) : (
              <div className="md:grid grid-cols-2 items-center justify-between gap-5">
                {/* Image */}
                <div className=" ">
                  <img
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                {/* Text */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <button className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition">
                    Explore
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <CTASection />
      <CareerTransformationSection />
      <Footer />
    </div>
  );
}
