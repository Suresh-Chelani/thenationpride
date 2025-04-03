import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003087] text-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-4">Stories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#62E389]">Sustainability Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Startup Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Travel Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Farming Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Education Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Health care Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Visual Stories</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-4">More Stories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#62E389]">Changemakers Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Culture Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">History Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Food Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Innovation Stories</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Wildlife Stories</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#62E389]">Advertise With Us</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Work with us</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Terms of use</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Grievance</a></li>
            <li><a href="#" className="hover:text-[#62E389]">Archives</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#62E389]"><Facebook size={24} /></a>
              <a href="#" className="hover:text-[#62E389]"><Twitter size={24} /></a>
              <a href="#" className="hover:text-[#62E389]"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#62E389]"><Youtube size={24} /></a>
              <a href="#" className="hover:text-[#62E389]"><Linkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">SEND FEEDBACK</h3>
            <a href="mailto:contact@thenationpride.com" className="text-[#62E389] hover:underline">
              contact@thenationpride.com
            </a>
          </div>
          <div>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-12"
              />
            </a>
          </div>
        </div>
      <div className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-6">
          <div>
          <h3 className="font-semibold mb-1">NEW</h3>
            <div className="bg-[#62E389] h-1"></div>
            <h3 className="text-xl font-semibold mt-1">Fill your inbox with positivity!</h3>
            <p className="text-2xl font-bold">WEEKLY DIGEST</p>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 rounded bg-transparent border border-white text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-transparent border border-white text-white placeholder-white"
            />
            <button className="px-6 py-2 bg-[#62E389] text-white rounded hover:bg-[#50c974]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Newsletter Section */}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-2 right-8 bg-[#62E389] p-3 rounded-full hover:bg-[#50c974] transition-colors border-4 border-white"
      >
        <ArrowUp size={24} />
      </button>

       {/* Copyright Section */}
       <div className="max-w-7xl mx-auto mt-12 text-center border-t border-gray-600 pt-8 flex flex-wrap justify-around">
        <p className="text-sm text-gray-300">© Copyright 2025 by The Nation Pride.</p>
        <p className="text-sm text-gray-300">Passionately Created And Designed By {" "}
            <a className="hover:text-[#50c974]" target="_blank" href="https://sharvinmanagement.com/" alt="companysite">⁓Sharvin Management Pvt. Ltd.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;