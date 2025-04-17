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
    imageUrl: "https://validboards.in/wp-content/uploads/2023/03/image-2.png",
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


const CategoryPage = () => {
  const param = useParams();
  const CategoryName = param.id.split("-").join(" ").toUpperCase();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-white mt-20">
      <div className="relative bg-[#4fe1aa] py-16">
        <div className="max-w-7xl mx-auto px-4 z-100">
          <p className="text-[#215944] font-semibold mb-2 tracking-wider">
            READ STORIES ON
          </p>
          <h1 className="text-5xl font-bold mb-6 text-white">{CategoryName}</h1>
          <p className="text-amber-50 max-w-2xl leading-relaxed">
            Discover inspiring stories about environmental conservation,
            sustainable living, and innovative solutions for a better tomorrow.
          </p>
        </div>
      </div>
      <CategoryCarousel />
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
