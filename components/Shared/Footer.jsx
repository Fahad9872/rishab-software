import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "url('https://www.rishabhsoft.com/nitropack_static/YDvgvLbsGCOErAorXOnUelcLZzwIpWGd/assets/images/optimized/rev-05d8ef3/www.rishabhsoft.com/wp-content/uploads/2024/11/footer-dark-gradient.jpg')",
      }}
      className="relative bg-[#111111] text-[#E1E1E1] bg-cover bg-center bg-no-repeat text-white mt-16"
    >
      {/* Top Divider Shape */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-[30px] md:h-[80px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-[#181818] "
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 md:pt-20 md:pb-10 pt-5">
        {/* 4 Column Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-[1400px] mx-auto px-5">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Work</li>
              <li>Partners</li>
              <li>Life at Rishabh</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Artificial Intelligence</li>
              <li>Application Engineering</li>
              <li>Cloud</li>
              <li>Data & Analytics</li>
              <li>Digital Engineering</li>
              <li>Microsoft Technology Services</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Adtech</li>
              <li>Digital Manufacturing</li>
              <li>Fintech</li>
              <li>Healthtech</li>
              <li>Logistics and SCM</li>
              <li>Retail</li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Insights</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Press Releases</li>
              <li>White Papers</li>
              <li>Webinars</li>
            </ul>
          </div>
        </div>

        {/* Reviews & Logos Section */}
        <div className="bg-[#f1f5fd] mt-12">
          <div className="max-w-[1400px] mx-auto text-black rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                alt="Rishabh Logo"
                className="h-10"
              />
            </div>
            <div className="flex items-center gap-3 text-red-500">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="text-sm">25 REVIEWS</p>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              <span>⭐⭐⭐⭐⭐</span>
              <p className="text-sm text-black">GoodFirms</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-gray-700 md:pt-8 px-5 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto text-center md:text-left">
          <div>
            <p>Email On Us</p>
            <div className="flex justify-center md:justify-start items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span className="text-gray-400">sales@rishabhsoft.com</span>
            </div>
          </div>
          <div className="text-gray-400 space-y-1 text-sm">
            <p>US Toll Free: +1-877-RISHABH</p>
            <p>US: +1-201-484-7302</p>
          </div>
          <div className="text-gray-400 space-y-1 text-sm">
            <p>AU: +61 2 8311 1544</p>
            <p>UK: +44 207 031 8422</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 px-5 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400 text-sm max-w-[1400px] mx-auto text-center md:text-left">
          <p>Copyright © 2025 Rishabh Software. All Rights Reserved.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
