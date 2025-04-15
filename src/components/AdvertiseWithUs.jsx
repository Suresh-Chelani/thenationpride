import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart,
  Globe,
  Users,
  Zap,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

function AdvertiseWithUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28"
    >
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Advertise With The Nation Pride
      </h1>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Reach millions of engaged readers who care about social impact and
        positive change. Our platform offers unique advertising opportunities
        that align with your brand's values.
      </p>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-[#F39C12] mb-2">10M+</div>
          <div className="text-gray-600">Monthly Page Views</div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-[#F39C12] mb-2">5M+</div>
          <div className="text-gray-600">Social Media Reach</div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-[#F39C12] mb-2">2M+</div>
          <div className="text-gray-600">Newsletter Subscribers</div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-4xl font-bold text-[#F39C12] mb-2">500+</div>
          <div className="text-gray-600">Brand Partners</div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Globe className="h-8 w-8 text-[#F39C12] mr-4" />
            <h3 className="text-2xl font-semibold">Wide Reach</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• 10+ Million Monthly Page Views</li>
            <li>• Pan-India Audience Coverage</li>
            <li>• High Social Media Engagement</li>
            <li>• Multi-language Content Support</li>
            <li>• Tier 1, 2 & 3 City Presence</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-[#F39C12] mr-4" />
            <h3 className="text-2xl font-semibold">Target Audience</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Socially Conscious Readers</li>
            <li>• Change-makers & Innovators</li>
            <li>• Corporate Decision Makers</li>
            <li>• NGOs and Social Organizations</li>
            <li>• Government Stakeholders</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <BarChart className="h-8 w-8 text-[#F39C12] mr-4" />
            <h3 className="text-2xl font-semibold">Performance Metrics</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Detailed Analytics Dashboard</li>
            <li>• Real-time Performance Tracking</li>
            <li>• Campaign Optimization Support</li>
            <li>• Audience Behavior Insights</li>
            <li>• ROI Measurement Tools</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-[#F39C12] mr-4" />
            <h3 className="text-2xl font-semibold">Ad Formats</h3>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li>• Native Content Integration</li>
            <li>• Display Advertising</li>
            <li>• Sponsored Stories</li>
            <li>• Video Content</li>
            <li>• Social Media Amplification</li>
          </ul>
        </div>
      </div>

      {/* Advertising Packages */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Advertising Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <div className="text-[#F39C12] text-3xl font-bold mb-4">
              ₹50,000
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>1 Featured Article</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Social Media Promotion</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Basic Analytics</span>
              </li>
            </ul>
            <button className="w-full bg-[#F39C12] text-white py-2 rounded-md hover:bg-[#E67E22] transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 border-2 border-[#F39C12] relative">
            <div className="absolute top-0 right-0 bg-[#F39C12] text-white px-4 py-1 rounded-bl-lg">
              Popular
            </div>
            <h3 className="text-2xl font-semibold mb-4">Professional</h3>
            <div className="text-[#F39C12] text-3xl font-bold mb-4">
              ₹1,50,000
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>3 Featured Articles</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Social Media Campaign</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Newsletter Feature</span>
              </li>
            </ul>
            <button className="w-full bg-[#F39C12] text-white py-2 rounded-md hover:bg-[#E67E22] transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <div className="text-[#F39C12] text-3xl font-bold mb-4">Custom</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Unlimited Articles</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Full Marketing Suite</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Dedicated Support</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-[#F39C12] mr-2" />
                <span>Custom Integration</span>
              </li>
            </ul>
            <button className="w-full bg-[#F39C12] text-white py-2 rounded-md hover:bg-[#E67E22] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <Mail className="h-8 w-8 text-[#F39C12] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">ads@thenationpride.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-8 w-8 text-[#F39C12] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+91 (800) 123-4567</p>
          </div>
          <div className="text-center">
            <Calendar className="h-8 w-8 text-[#F39C12] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Schedule a Meeting</h3>
            <p className="text-gray-600">Book a consultation</p>
          </div>
        </div>
        <div className="text-center">
          <Link
            to={"/contact"}
            className="inline-flex items-center bg-[#F39C12] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#E67E22] transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default AdvertiseWithUs;
