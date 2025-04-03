import { Play } from "lucide-react";

const villageContent = {
  title: "Shots of Rural India",
  icon: "🌾",
  categories: [
    "Product",
    "Service",
    "E-commerce",
    "Blogging",
    "YouTube Content",
  ],
  articles: [
    {
      title: "Bharat Darshan",
      description: "Exploring the rich culture of Indian villages.",
      image:
        "https://th-i.thgim.com/public/news/cities/Delhi/ouwas7/article38032811.ece/alternates/FREE_1200/DEL25-Park2",
    },
    {
      title: "Organic Farming Revolution",
      description: "How Indian farmers are adopting organic methods.",
      image:
        "https://content.jdmagicbox.com/v2/comp/chennai/r2/044pxx44.xx44.190401231857.n6r2/catalogue/nammalvar-organic-farming-revolution-ashok-nagar-chennai-organic-farms-vk4rf65526-250.jpg",
    },
    {
      title: "Handicrafts of Rural India",
      description: "Discover the beauty of handmade village crafts.",
      image:
        "https://www.ksgindia.com/images/blog/19%20JUNE%202023/17%20JULY%202023/SS13.png",
    },
    {
      title: "Rural Womenpreneurs",
      description: "Empowering rural women through small businesses.",
      image:
        "https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/110189.rural-women.jpg",
    },
    {
      title: "Sustainable Rural Development",
      description: "Initiatives bringing change in Indian villages.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz_SxHlIT7p7tK_wXQgL9aX1bA1wsUSzMFg&s",
    },
  ],
};

const Shots = () => {
  return (
    <div className="md:p-15 sm:p-6 p-4">
      {/* Section Title */}
      <div className="flex items-center gap-2 mb-4 justify-between">
        {/* <span className="text-2xl">{villageContent.icon}</span> */}
        <h2 className="text-2xl font-bold">{villageContent.title}</h2>
        <p className="text-sm hover:text-[#004697] cursor-pointer hidden sm:block">
          SEE ALL
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {villageContent.articles.map((article, index) => (
          <div key={index} className="relative group cursor-pointer">
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 object-cover rounded-lg"
            />

            {/* Play Button (Overlay) */}
            <div className="absolute top-[8rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 p-3 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
              <Play className="text-white w-6 h-6" />
            </div>

            {/* Article Text */}
            <div className="mt-2">
              <h3 className="text-md font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shots;
