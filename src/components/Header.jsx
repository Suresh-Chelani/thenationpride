import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-10">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-5 cursor-pointer"
          >
            <h2 className="text-2xl">The Nation Pride</h2>
          </div>

          <div className="md:flex flex space-x-4 md:space-x-8 items-center">
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-amber-900 hidden md:flex uppercase"
            >
              Stories
            </a>
            <Link
              to={"/about"}
              className="text-gray-700 text-gray-900 hover:text-amber-900 hidden md:flex uppercase"
            >
              About
            </Link>
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-amber-900 hidden md:flex uppercase"
            >
              Brand Campaigns
            </a>
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-amber-900 hidden md:flex uppercase"
            >
              Advertise With Us
            </a>
            <a
              href="#"
              className="relative overflow-hidden text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 border-2 border-transparent hover:border-amber-300 shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#854d0e_0%,#854d0e_10%,#f59e0b_10%,#f59e0b_20%,#854d0e_20%,#854d0e_30%,#f59e0b_30%,#f59e0b_40%)] bg-[length:200%_200%] animate-wave"></span>
              <span className="relative z-10">Subscribe</span>
            </a>

            <div className="flex items-center space-x-4 cursor-pointer">
              <Search className="w-5 h-5 text-gray-600" />
              <button
                className="w-5 h-5 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X size={28} />
                ) : (
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 bg-white w-64 p-4 shadow-lg bg-opacity-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>
        <h2 className="text-sm font-semibold">The Nation Pride</h2>
        <nav className="mt-4 space-y-3">
          {["Home", "Topics", "About", "Stories", "Brand Campaigns,"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block p-2 rounded hover:bg-gray-200"
              >
                {item}
              </a>
            )
          )}
          <Link
            to={"/contact"}
            onClick={() => {
              setIsOpen(false);
            }}
            className="block p-2 rounded hover:bg-gray-200"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-50"
          style={{
            width: `${scrollProgress}%`,
            background: `repeating-linear-gradient(
              45deg,
rgb(95, 75, 39) 0%,
              #f59e0b 10%,
              #f97316 10%,
              #f97316 20%
            )`,
          }}
        />
      </div>
    </nav>
  );
};

export default Header;

/*

<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,10 a50,50 0 0,1 50,50 viiiiiiiiiii20 h20 a50,50 0 0,1 0,100 h-70 v-120 a50,50 0 0,1 50,-50z" fill="#004697"/>
  <text x="50" y="70" font-family="Arial" font-size="25" font-weight="bold" fill="white">the</text>
  <text x="50" y="105" font-family="Arial" font-size="25" font-weight="bold" fill="#59ffb9">nation</text>
  <text x="50" y="140" font-family="Arial" font-size="25" font-weight="bold" fill="white">pride</text>
</svg>

*/
