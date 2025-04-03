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
  Store as Brands,
  HeartHandshake as WomenEmpowerment,
  Tv as Shows,
  Star as GlamTalent,
  Landmark as BreakOfHeritage,
  Home as VillageVelly,
  Globe as BharatDarshan,
  Package as DivyasToy,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Category = () => {
  const categories = [
    { name: "Changemakers", icon: Users, color: "text-red-500" },
    { name: "Sustainability", icon: Leaf, color: "text-green-500" },
    { name: "Farming", icon: Wheat, color: "text-yellow-600" },
    { name: "Tech", icon: Laptop, color: "text-blue-500" },
    { name: "Culture", icon: Theater, color: "text-purple-500" },
    { name: "Food", icon: UtensilsCrossed, color: "text-orange-500" },
    { name: "Wellness", icon: Yoga, color: "text-teal-500" },
    { name: "Travel", icon: Plane, color: "text-indigo-500" },
    { name: "Education", icon: GraduationCap, color: "text-emerald-500" },
    { name: "Science", icon: Flask, color: "text-pink-500" },
    { name: "Entrepreneur", icon: Briefcase, color: "text-gray-700" },
    { name: "Politics", icon: LandPlot, color: "text-red-600" },
    { name: "Climate", icon: TreePine, color: "text-green-700" },
    { name: "Innovation", icon: Lightbulb, color: "text-yellow-400" },
    { name: "Creativity", icon: Palette, color: "text-blue-600" },
    { name: "Glamour", icon: Gem, color: "text-pink-400" },
    { name: "Brands", icon: Brands, color: "text-gray-500" },
    {
      name: "Women Empowerment",
      icon: WomenEmpowerment,
      color: "text-purple-600",
    },
    { name: "Shows", icon: Shows, color: "text-red-500" },
    { name: "Glam Talent", icon: GlamTalent, color: "text-fuchsia-500" },
    {
      name: "Break of Heritage",
      icon: BreakOfHeritage,
      color: "text-orange-600",
    },
    { name: "Village Velly", icon: VillageVelly, color: "text-green-600" },
    { name: "Bharat Darshan", icon: BharatDarshan, color: "text-blue-500" },
    { name: "Divyas Toy", icon: DivyasToy, color: "text-yellow-500" },
  ];
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          const path = category.name.toLowerCase().split(" ").join("-");
          return (
            <button
              key={category.name}
              onClick={() =>
                navigate(`/category/${path}`)
              }
              className="flex items-center cursor-pointer justify-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors group"
            >
              <IconComponent
                className={`w-5 h-5 ${category.color} group-hover:text-blue-500`}
              />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
