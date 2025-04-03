// import React, {useState} from 'react';
// import { Plane as Plant, Sprout, Bird, Lightbulb, Heart, Palette, Coffee, Plane, Book, GraduationCap } from 'lucide-react';
import { useEffect } from "react";
import CategoryCarousel from "./CategoryCarousel";
import { useParams } from "react-router-dom";

const articles = [
  {
    category: "SUSTAINABILITY",
    subcategory: "Zero Waste",
    title: "How These 6 Indian Villages Went Completely Zero-Waste",
    date: "03 APR 2025",
    readTime: "5 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    category: "FARMING",
    subcategory: "Sustainable Living",
    title:
      "Greywater Recycling, Rain Harvesting, Not a Single Tree Cut: Duo's Nainital Homestay Is a Sustainable Dream",
    date: "31 MAR 2025",
    readTime: "7 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1595274459742-4a41d35784ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    category: "INNOVATION",
    subcategory: "Urban Development",
    title: "Why White Rooftops Are Becoming Popular in Indian Cities",
    date: "27 MAR 2025",
    readTime: "5 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    category: "TECHNOLOGY",
    subcategory: "AI & Automation",
    title: "How AI Is Transforming Indian Agriculture",
    date: "25 MAR 2025",
    readTime: "6 MIN READ",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5612AQG2daGmq5c5gw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1719317339101?e=2147483647&v=beta&t=-Yje4cn5exR4LX8_f7kzrpfLuBkjxvwf-M2umbP2JiE",
  },
  {
    category: "HEALTH",
    subcategory: "Nutrition",
    title: "10 Superfoods That Every Indian Should Include in Their Diet",
    date: "22 MAR 2025",
    readTime: "4 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
  {
    category: "ECONOMY",
    subcategory: "Startups",
    title: "Indian Startups That Are Revolutionizing Renewable Energy",
    date: "20 MAR 2025",
    readTime: "8 MIN READ",
    imageUrl:
      "https://en-media.thebetterindia.com/uploads/2023/03/Untitled-design-1-1678716705.jpg",
  },
  {
    category: "EDUCATION",
    subcategory: "E-Learning",
    title: "The Rise of Online Learning Platforms in India",
    date: "18 MAR 2025",
    readTime: "6 MIN READ",
    imageUrl:
      "https://validboards.in/wp-content/uploads/2023/03/image-2.png",
  },
  {
    category: "TRAVEL",
    subcategory: "Eco-Tourism",
    title: "10 Hidden Eco-Friendly Travel Destinations in India",
    date: "15 MAR 2025",
    readTime: "7 MIN READ",
    imageUrl:
      "https://www.nritravelogue.com/wp-content/uploads/2024/10/eco-friendly-destinations-in-india.jpg",
  },
  {
    category: "FASHION",
    subcategory: "Sustainable Fashion",
    title: "Why Sustainable Fashion Is the Future in India",
    date: "10 MAR 2025",
    readTime: "5 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  },
];

// const categories = [
//     { name: 'Farming', icon: Plant, color: 'bg-emerald-100 text-emerald-600' },
//     { name: 'Startup', icon: Sprout, color: 'bg-blue-100 text-blue-600' },
//     { name: 'Wildlife', icon: Bird, color: 'bg-amber-100 text-amber-600' },
//     { name: 'Innovation', icon: Lightbulb, color: 'bg-purple-100 text-purple-600' },
//     { name: 'Health Care', icon: Heart, color: 'bg-red-100 text-red-600' },
//     { name: 'Culture', icon: Palette, color: 'bg-pink-100 text-pink-600' },
//     { name: 'Food', icon: Coffee, color: 'bg-orange-100 text-orange-600' },
//     { name: 'Travel', icon: Plane, color: 'bg-sky-100 text-sky-600' },
//     { name: 'History', icon: Book, color: 'bg-yellow-100 text-yellow-600' },
//     { name: 'Education', icon: GraduationCap, color: 'bg-indigo-100 text-indigo-600' }
//   ];

const CategoryPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState('Farming');
  const param = useParams();
  const CategoryName = param.id.split("-").join(" ").toUpperCase();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-white mt-20">
      {/* Category Header */}
      {/* <div className="text-center py-12 bg-white">
        <p className="text-gray-600 mb-2">READ STORIES ON -</p>
        <h1 className="text-4xl font-bold text-[#003087] relative inline-block">
          SUSTAINABILITY
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#62E389]"></div>
        </h1>
      </div> */}

      {/* Categories Scroll */}
      {/* <div className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex space-x-4 min-w-max pb-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-200 hover:border-[#003087] hover:text-[#003087] transition-colors"
              >
                <Icon size={20} className="text-[#62E389]" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div> */}

      <div className="bg-gradient-to-r from-[#003087] to-[#004db3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#62E389] font-medium mb-2">READ STORIES ON</p>
          <h1 className="text-5xl font-bold mb-6">{CategoryName}</h1>
          <p className="text-gray-200 max-w-2xl">
            Discover inspiring stories about environmental conservation,
            sustainable living, and innovative solutions for a better tomorrow.
          </p>
        </div>
      </div>
      <CategoryCarousel />
      {/* Categories Grid */}
      {/* <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = category.name === selectedCategory;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105
                    ${isSelected ? 'ring-2 ring-[#003087] shadow-md' : 'hover:shadow-md'}
                    ${category.color}`}
                >
                  <div className="p-3 rounded-full bg-white/50 mb-3">
                    <Icon size={24} />
                  </div>
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-[#003087] font-semibold mb-2">
                {article.category}
              </div>
              <h3 className="text-xl font-bold mb-4 line-clamp-2 hover:text-[#003087]">
                <a href="#">{article.title}</a>
              </h3>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
