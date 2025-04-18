import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <footer className="relative bg-[#4fe1aa] text-gray-800 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Stories</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Sustainability Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Startup Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Travel Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Farming Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Education Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Health care Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Visual Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                More Stories
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Changemakers Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Culture Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    History Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Food Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Innovation Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Wildlife Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Advertise With Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Work with us
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:underline transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Grievance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline transition-colors duration-200"
                  >
                    Archives
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  FOLLOW US
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:underline transition-colors duration-200"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  SEND FEEDBACK
                </h3>
                <a
                  href="mailto:contact@thenationpride.com"
                  className="text-[#215944] hover:underline transition-colors duration-200"
                >
                  contact@thenationpride.com
                </a>
              </div>
              <div>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-12 hover:opacity-90 transition-opacity duration-200"
                  />
                </a>
              </div>
            </div>

            {/* Column 5 */}
            <div className="space-y-6">
              <div className="flex flex-col items-start justify-between gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">NEW</h3>
                  <div className="bg-[#215944] h-1"></div>
                  <h3 className="text-xl font-bold mt-1 text-gray-900">
                    Fill your inbox with positivity!
                  </h3>
                  <p className="text-2xl font-bold text-white">WEEKLY DIGEST</p>
                </div>
                <div className="w-full md:w-auto flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="px-4 py-2 rounded-lg bg-white/80 border-2 border-white text-gray-900 placeholder-gray-600 focus:border-[#215944] focus:outline-none focus:ring-2 focus:ring-amber-900/20 transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg bg-white/80 border-2 border-white text-gray-900 placeholder-gray-600 focus:border-[#215944] focus:outline-none focus:ring-2 focus:ring-amber-900/20 transition-all duration-200"
                  />
                  <button className="relative overflow-hidden text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 border-2 border-white hover:border-[#215944] shadow-lg hover:shadow-xl">
                    <span className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#215944_0%,#215944_8%,#a4e1ca_8%,#a4e1ca_16%,#4fe1aa_16%,#4fe1aa_24%,#215944_24%,#215944_32%,#a4e1ca_32%,#a4e1ca_40%,#4fe1aa_40%,#4fe1aa_48%)] bg-[length:200%_200%] animate-wave"></span>
                    <span className="relative z-10">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="max-w-7xl mx-auto mt-12 text-center border-t border-amber-900/20 pt-8 flex flex-wrap justify-around">
            <p className="text-sm text-[#215944] font-medium">
              © Copyright 2025 by The Nation Pride.
            </p>
            <p className="text-sm text-[#215944] font-medium">
              Passionately Created And Designed By{" "}
              <a
                className="text-gray-900 hover:text-[#215944] transition-colors duration-200"
                target="_blank"
                href="https://sharvinmanagement.com/"
                alt="companysite"
              >
                ⁓Sharvin Management Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 z-100 right-8 bg-[#215944] p-3 rounded-full hover:bg-[#4fe1aa] active:bg-[#4fe2bb] transform hover:scale-110 transition-all duration-200 border-2 border-white shadow-lg"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      </footer>
    </div>
  );
}

export default App;
