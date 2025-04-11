import { ChevronRight, Clock, Calendar, Share2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Blogs = () => {
  const { id, name } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white shadow-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to={"/"} className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link
              to={`/category/${id}`}
              className="hover:text-blue-600 transition-colors"
            >
              {id[0].toUpperCase().concat(id.slice(1))}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of Sustainable Art: A New Perspective
          </h1>

          {/* Article Meta */}
          <div className="flex items-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>March 15, 2024</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Art & Culture</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8 transform hover:scale-[1.01] transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80"
              alt="Sustainable Art Installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center mb-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            alt="Author"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Sarah Anderson
            </h3>
            <p className="text-gray-600">
              Environmental Art Curator | Sustainability Advocate
            </p>
          </div>
          <button className="ml-auto flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed mb-6">
            In the ever-evolving landscape of contemporary art, sustainability
            has emerged as more than just a trend—it's becoming a fundamental
            principle that shapes how artists approach their craft. This
            transformation is not merely about using eco-friendly materials;
            it's about reimagining the entire creative process through the lens
            of environmental consciousness.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            The Rise of Eco-Conscious Creation
          </h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <img
              src="https://static.wixstatic.com/media/fc89c7_d027d3a71afa4acfa8b2a4b418669c85~mv2.webp/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fc89c7_d027d3a71afa4acfa8b2a4b418669c85~mv2.webp"
              alt="Eco-friendly Art Materials"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80"
              alt="Sustainable Art Installation"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          <p className="text-gray-800 leading-relaxed mb-6">
            Artists worldwide are pioneering innovative approaches to
            sustainable art creation. From repurposed materials to solar-powered
            installations, the boundaries between art and environmental
            stewardship continue to blur, creating new possibilities for
            meaningful expression.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 my-8">
            "Art has the power to change perspectives and inspire action. When
            we create with sustainability in mind, we're not just making
            art—we're making a statement about the future we want to see."
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Looking Ahead: The Future of Sustainable Art
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            As we look to the future, the intersection of technology and
            sustainable art practices offers exciting possibilities. Digital art
            platforms are reducing the need for physical materials, while
            augmented reality installations are creating immersive experiences
            with minimal environmental impact.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
