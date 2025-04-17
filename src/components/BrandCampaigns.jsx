import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award, Newspaper, Megaphone, BarChart, Heart } from 'lucide-react';

function BrandCampaigns() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Brand Campaigns That Make an Impact
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Partner with us to create meaningful campaigns that resonate with millions of socially conscious readers across India.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Target className="h-12 w-12 text-[#4fe1aa] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Targeted Reach</h3>
          <p className="text-gray-600">
            Connect with our engaged audience of change-makers, innovators, and conscious citizens who care about social impact.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-[#4fe1aa] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Authentic Engagement</h3>
          <p className="text-gray-600">
            Create genuine connections through storytelling that aligns with your brand's values and social mission.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <TrendingUp className="h-12 w-12 text-[#4fe1aa] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Measurable Impact</h3>
          <p className="text-gray-600">
            Track your campaign's success with detailed analytics and insights into audience engagement and reach.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Award className="h-12 w-12 text-[#4fe1aa] mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Award-Winning Content</h3>
          <p className="text-gray-600">
            Work with our experienced team to create compelling content that wins hearts and awards.
          </p>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800" 
              alt="Success story 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Rural Education Initiative</h3>
              <p className="text-gray-600 mb-4">Reached 2M+ readers and raised ₹50L for rural schools</p>
              <span className="text-[#4fe1aa] font-medium">Read Case Study →</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Success story 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Clean Water Campaign</h3>
              <p className="text-gray-600 mb-4">3M+ impressions and 100+ community partnerships</p>
              <span className="text-[#4fe1aa] font-medium">Read Case Study →</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800" 
              alt="Success story 3" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sustainable Living</h3>
              <p className="text-gray-600 mb-4">5M+ reach and 200K+ direct engagements</p>
              <span className="text-[#4fe1aa] font-medium">Read Case Study →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Types */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Campaign Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Newspaper className="h-12 w-12 text-[#4fe1aa] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Featured Stories</h3>
            <p className="text-gray-600">In-depth articles about your impact initiatives</p>
          </div>
          <div className="text-center">
            <Megaphone className="h-12 w-12 text-[#4fe1aa] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Amplification</h3>
            <p className="text-gray-600">Multi-channel social media campaigns</p>
          </div>
          <div className="text-center">
            <BarChart className="h-12 w-12 text-[#4fe1aa] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impact Reports</h3>
            <p className="text-gray-600">Detailed coverage of your CSR initiatives</p>
          </div>
          <div className="text-center">
            <Heart className="h-12 w-12 text-[#4fe1aa] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Events</h3>
            <p className="text-gray-600">On-ground activation and coverage</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#afdfcd] rounded-lg shadow-md p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hands with India's largest impact-driven platform and create meaningful change together.
        </p>
        <button className="bg-white text-[#4fe1aa] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Your Campaign
        </button>
      </div>
    </motion.div>
  );
}

export default BrandCampaigns;