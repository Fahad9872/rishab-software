import React from "react";

const Banner = () => {
  return (
    <div>
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
        <div className="relative z-10 text-center px-4 mx-auto max-w-[1400px]">
          <h2 className="text-white text-xl md:text-2xl font-medium mb-3">
            Our Vision
          </h2>
          <h2 className="text-white text-3xl md:text-6xl font-semibold">
            Continually Enhancing Value for Our Global Customers
          </h2>
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
    </div>
  );
};

export default Banner;
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
</section>;
