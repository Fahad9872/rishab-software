import Image from "next/image";
import { useRouter } from "next/router";
import banner from "../../assets/Pages/Home/images/ielts-banner.png";

export default function Banner({ name, image }) {
  const router = useRouter();
  return (
    <section
      className="px-5 md:py-4 py-20 md:h-[750px] my-auto text-white bg-cover bg-center relative z-10"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content */}
      <div className="relative z-10 text-white flex flex-col lg:flex-row items-center justify-center md:h-full md:max-w-[1600px] mx-auto">
        {/* Text content */}
        <div className="lg:w-7/12 py-5 lg:py-16">
          <p className="text-[24px] md:text-[45px] font-semibold md:leading-[50px] leading-[30px] mb-6">
            {name}
          </p>
          <p className="md:text-[20px] md:block hidden text-[14px] text-white md:leading-[25px] mb-6">
            From data strategy and integration to advanced analytics and
            AI-driven insights, we empower you to make smarter, faster, and more
            informed decisions with our data and analytics consulting.
          </p>
          <p className="md:text-[20px] block md:hidden text-[14px] text-white md:leading-[25px] mb-6">
            Get expert guidance, practice tests, and personalized strategies to
            ace the IELTS exam with confidence.
          </p>

          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-[#BB86FC] text-white md:px-16 px-10 rounded-[20px] py-3"
          >
            Talk To The Data Expert
          </button>
        </div>

        {/* Image content */}
        <div className="lg:w-5/12 md:my-[50px] flex justify-center md:block hidden min-h-[420px]"></div>
      </div>

      {/* Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="w-full md:h-[80px] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-[#111111] "
          ></path>
        </svg>
      </div>
    </section>
  );
}
