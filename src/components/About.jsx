import { Users, Target, Heart, Award, Star, Building2 } from "lucide-react";
import { useEffect } from "react";
const About = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  }, [])
  return (
    <div className="py-28">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 animate-fade-in">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a passionate team dedicated to creating innovative
              solutions that make a difference. Our journey began with a simple
              idea: to build something meaningful that helps people and
              businesses thrive.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section className="bg-white py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Global Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">1M+</h3>
              <p className="text-gray-600">Customers Worldwide</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">24/7</h3>
              <p className="text-gray-600">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Passion</h3>
            <p className="text-gray-600">
              We put our heart into everything we do, driving innovation with
              enthusiasm.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Target className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every project, delivering outstanding
              results.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and collective creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-900 text-white py-16 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Sustainable Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to sustainability has helped reduce carbon
                emissions by 50% across our client projects. We've implemented
                green technologies in over 100 companies worldwide.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">
                Community Development
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Through our initiatives, we've supported 50+ local communities,
                provided education to 10,000+ students, and created employment
                opportunities for underserved populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Brand
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Building2 className="w-20 h-20 text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Brand Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2020, our brand has grown from a small startup to a
              global leader in innovative solutions. Our commitment to
              excellence and customer satisfaction has earned us recognition
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Award className="w-8 h-8 text-yellow-500 mb-2" />
              <h4 className="font-semibold">Quality First</h4>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Star className="w-8 h-8 text-purple-500 mb-2" />
              <h4 className="font-semibold">Innovation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150`}
                    alt={`Team Member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-2">Co-Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  15+ years of experience in technology and innovation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
