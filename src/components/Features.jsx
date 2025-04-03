const Features = () => {
  const featuredSections = [
    {
      title: "Inspiring Changemakers",
      icon: "🌟",
      articles: [
        {
          title: "Rural Women Entrepreneurs",
          description:
            "Meet the women who are transforming their communities through sustainable business initiatives.",
          image:
            "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Sustainable Farming",
          description:
            "How organic farming practices are revolutionizing Indian agriculture.",
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Tech Innovation",
          description:
            "Young innovators creating solutions for rural India's challenges.",
          image:
            "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
      ],
    },
    {
      title: "Entrepreneur",
      icon: "🚀",
      articles: [
        {
          title: "Startup Success Stories",
          description: "Inspiring journeys of entrepreneurs making an impact.",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Innovation Hubs",
          description: "The rise of co-working spaces and startup incubators.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy69E-mXio8zL7IhnTOM0oH9c5SwKIi3UDg&s",
        },
        {
          title: "Young Founders",
          description: "How young entrepreneurs are shaping the future.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f7ASNYPQjsjmnFrjgZLQB81QTQ2tqKj1yA&s",
        },
      ],
    },
    {
      title: "Brands",
      icon: "🏢",
      articles: [
        {
          title: "Emerging Indian Brands",
          description: "Discover the local brands reshaping industries.",
          image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Luxury Meets Sustainability",
          description: "Eco-conscious brands making luxury sustainable.",
          image:
            "https://media.licdn.com/dms/image/v2/D4E12AQF1taI1fWpwig/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681061772463?e=2147483647&v=beta&t=58etEuBz5OFxPYuBKFYYTzReAZNhq6AnlsVLPRdJySs",
        },
        {
          title: "Traditional to Global",
          description: "How Indian brands are expanding internationally.",
          image:
            "https://images.stockcake.com/public/0/2/8/028b7f4d-c77a-4813-8cd4-aee22758e4eb_large/global-cultural-unity-stockcake.jpg",
        },
      ],
    },
    {
      title: "Women Empowerment",
      icon: "👩‍💼",
      articles: [
        {
          title: "Women Leading Change",
          description: "How women are breaking barriers in various sectors.",
          image:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Women in STEM",
          description:
            "The rise of women in science, technology, and engineering.",
          image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Empowering Through Education",
          description: "How education is changing lives of women across India.",
          image:
            "https://achyutasamanta.com/wp-content/uploads/2020/11/Empowering-Girls-through-Education-Achyuta-Samanta-Blog.jpg",
        },
      ],
    },
    {
      title: "Shows",
      icon: "📺",
      articles: [
        {
          title: "Glam Talent Showcase",
          description:
            "Highlighting the best talents through our exclusive shows.",
          image:
            "https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlbnwwfHx8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Music Concert Night",
          description:
            "Enjoy electrifying performances from top artists around the globe.",
          image:
            "https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg",
        },
        {
          title: "Award Ceremony",
          description:
            "Celebrating excellence in entertainment and performance.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9McCVXCfhyI3i_-Eo-M_g_Flbi8V64ljZQ&s",
        },
      ],
    },
    {
      title: "Break of Heritage",
      icon: "🏛️",
      articles: [
        {
          title: "Preserving Our Roots",
          description: "The importance of heritage in modern India.",
          image:
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
        },
        {
          title: "Timeless Temples",
          description: "Exploring the architectural marvels of ancient India.",
          image:
            "https://i0.wp.com/indiacurrents.com/wp-content/uploads/2024/05/A-view-of-Brihadisvara-Temple-Gangaikonda-Cholapuram.jpg?fit=1200%2C675&ssl=1",
        },
        {
          title: "Heritage Festivals",
          description:
            "Celebrating India's rich culture through traditional festivals.",
          image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {featuredSections.map((section, index) => (
        <div key={index} className="mb-16">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              {/* <span className="mr-2">{section.icon}</span> */}
              {section.title}
            </h2>
            <p className="text-sm hover:text-[#004697] cursor-pointer hidden sm:block">
              SEE ALL
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.articles.map((article, articleIndex) => (
              <div
                key={articleIndex}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
