import Image from "next/image";
import { useRouter } from "next/router";
import banner from "../../assets/Pages/Home/images/ielts-banner.png";
export default function Banner({ name, image }) {
  const router = useRouter();
  return (
    <section
      className="px-2 py-4 md:h-[750px] text-white bg-cover bg-center relative z-10 text-white"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      {/* Top banner */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main content */}
      <div className=" mx-auto  relative z-10 text-white flex flex-col lg:flex-row items-end rounded-[20px] md:max-w-[1600px] mx-auto">
        {/* Text content */}
        <div className="lg:w-7/12 py-5 lg:py-16">
          <div className="mb-4 text-[#BB86FC] font-medium md:text-sm text-[12px] border border-[#BB86FC] rounded-[20px] w-fit px-3 py-1 ">
            ⭐ Your Gateway to IELTS Success
          </div>
          <p className="text-[24px] md: md:text-[45px] text-[30px] font-semibold md:leading-[50px] leading-[30px] mb-6">
            Achieve Your Dream Score with{" "}
            <span className="text-[#BB86FC]">{name}</span>{" "}
            <br className="md:block hidden" /> The Ultimate IELTS Preparation
            Platform
          </p>
          <p className="md:text-[20px] md:block hidden text-[14px] text-white md:leading-[25px] mb-6">
            Get expert guidance, practice tests, and personalized strategies to
            ace <br className="" /> the IELTS exam with confidence.
          </p>
          <p className="md:text-[20px] block md:hidden text-[14px] text-white md:leading-[25px] mb-6">
            Get expert guidance, practice tests, and personalized strategies to
            ace the IELTS exam with confidence.
          </p>

          <button
            onClick={() => {
              router.push("/");
            }}
            className="bg-[#BB86FC] text-white md:px-16 px-10 rounded-[20px] py-3 "
          >
            Start Preparing Now
          </button>
        </div>

        {/* Image content */}
        <div className="lg:w-5/12 md:my-[50px] flex justify-center w-min-h-[420px]">
          <Image
            width={550}
            height={420}
            sizes="(max-width: 768px) 100vw, 550px"
            priority={true} // If the image isn't above the fold, set priority to false
            fetchPriority="high"
            src={banner.src}
            alt="Ostello App Mockup"
            // Retaining z-index only
          />
        </div>
      </div>
    </section>
  );
}
