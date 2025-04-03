import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="85"
                viewBox="0 -50 562 562"
              >
                <g transform="rotate(45, 256, 256)">
                  <path
                    fill="#004697"
                    d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566  
c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566  
c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418  
c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0  
c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936  
C512,137.911,498.388,101.305,474.655,74.503z"
                  />
                </g>
                <text
                  x="160"
                  y="170"
                  fontFamily="Arial"
                  fontSize="90"
                  fill="white"
                  fontWeight="bold"
                >
                  the
                </text>
                <text
                  x="130"
                  y="250"
                  fontFamily="Arial"
                  fontSize="90"
                  fill="#59ffb9"
                  fontWeight="bold"
                >
                  nation
                </text>
                <text
                  x="140"
                  y="340"
                  fontFamily="Arial"
                  fontSize="90"
                  fill="white"
                  fontWeight="bold"
                >
                  pride
                </text>
              </svg>
            </div>
          </div>

          <div className="md:flex flex space-x-4 md:space-x-8 items-center">
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-[#004697] hidden md:flex uppercase"
            >
              Stories
            </a>
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-[#004697] hidden md:flex uppercase"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-[#004697] hidden md:flex uppercase"
            >
              Brand Campaigns
            </a>
            <a
              href="#"
              className="text-gray-700 text-gray-900 hover:text-[#004697] hidden md:flex uppercase"
            >
              Advertise With Us
            </a>
            <a
              href="#"
              className="relative overflow-hidden text-white px-6 py-3 rounded-full font-semibold transition-all duration-500 border-2 border-transparent hover:border-[#59ffb9] shadow-lg hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#004697_0%,#004697_10%,#59ffb9_10%,#59ffb9_20%,#004697_20%,#004697_30%,#59ffb9_30%,#59ffb9_40%)] bg-[length:200%_200%] animate-wave"></span>
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
          {["Home", "Topics", "About", "Stories", "Brand Campaigns"].map(
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
        </nav>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-50"
          style={{
            width: `${scrollProgress}%`,
            background: `repeating-linear-gradient(
  to right,
  #004697 0%,
  #004697 10%,
  #59ffb9 30%,
  #59ffb9 20%
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
