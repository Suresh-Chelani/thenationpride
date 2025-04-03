import { useState, useRef } from "react";
import {
  Users,
  Leaf,
  Wheat,
  Laptop,
  Theater,
  UtensilsCrossed,
  Cog as Yoga,
  Plane,
  GraduationCap,
  FlaskRound as Flask,
  Briefcase,
  LandPlot,
  TreePine,
  Lightbulb,
  Palette,
  Gem,
  Building2,
  Users2,
  Tv,
  Star,
  Castle,
  Home,
  Mountain,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const categories = [
  { name: "Changemakers", icon: Users, color: "bg-red-100 text-red-500" },
  { name: "Sustainability", icon: Leaf, color: "bg-green-100 text-green-500" },
  { name: "Farming", icon: Wheat, color: "bg-yellow-100 text-yellow-600" },
  { name: "Tech", icon: Laptop, color: "bg-blue-100 text-blue-500" },
  { name: "Culture", icon: Theater, color: "bg-purple-100 text-purple-500" },
  {
    name: "Food",
    icon: UtensilsCrossed,
    color: "bg-orange-100 text-orange-500",
  },
  { name: "Wellness", icon: Yoga, color: "bg-teal-100 text-teal-500" },
  { name: "Travel", icon: Plane, color: "bg-indigo-100 text-indigo-500" },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-emerald-100 text-emerald-500",
  },
  { name: "Science", icon: Flask, color: "bg-pink-100 text-pink-500" },
  { name: "Entrepreneur", icon: Briefcase, color: "bg-gray-100 text-gray-700" },
  { name: "Politics", icon: LandPlot, color: "bg-red-100 text-red-600" },
  { name: "Climate", icon: TreePine, color: "bg-green-100 text-green-700" },
  {
    name: "Innovation",
    icon: Lightbulb,
    color: "bg-yellow-100 text-yellow-400",
  },
  { name: "Creativity", icon: Palette, color: "bg-blue-100 text-blue-600" },
  { name: "Glamour", icon: Gem, color: "bg-pink-100 text-pink-400" },
  { name: "Brands", icon: Building2, color: "bg-gray-100 text-gray-500" },
  {
    name: "Women Empowerment",
    icon: Users2,
    color: "bg-purple-100 text-purple-600",
  },
  { name: "Shows", icon: Tv, color: "bg-red-100 text-red-500" },
  { name: "Glam Talent", icon: Star, color: "bg-fuchsia-100 text-fuchsia-500" },
  {
    name: "Break of Heritage",
    icon: Castle,
    color: "bg-orange-100 text-orange-600",
  },
  { name: "Village Velly", icon: Home, color: "bg-green-100 text-green-600" },
  {
    name: "Bharat Darshan",
    icon: Mountain,
    color: "bg-blue-100 text-blue-500",
  },
  {
    name: "Divyas Toy",
    icon: Gamepad2,
    color: "bg-yellow-100 text-yellow-500",
  },
];

const CategoriesCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Changemakers");
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-12 relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden scroll-smooth"
        >
          <div className="grid grid-rows-2 grid-flow-col gap-4 w-max">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const path = category.name.toLowerCase().split(" ").join("-");
              const isSelected = category.name === selectedCategory;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category.name),
                      navigate(`/category/${path}`);
                  }}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 min-w-[160px]
                  ${
                    isSelected
                      ? "ring-2 ring-[#003087] shadow-md"
                      : "hover:shadow-md"
                  }
                  ${category.color} m-1 cursor-pointer`}
                >
                  <div className="p-3 rounded-full bg-white/50 mb-3">
                    <Icon size={24} />
                  </div>
                  <span className="font-medium text-sm text-center">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
