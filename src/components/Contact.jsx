import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const sendMail = (Data) => {
    emailjs.send("service_xfawmwb", "template_2622vy1", Data);
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendMail(formData);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  return (
    <div className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-blue-500 p-4 rounded-full text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Email Us
                  </h3>
                  <p className="text-gray-600">contact@example.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-green-500 p-4 rounded-full text-white">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri from 9am to 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300">
                <div className="bg-purple-500 p-4 rounded-full text-white">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">
                    123 Business Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Open for meetings by appointment
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
                  >
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100 focus:bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100 focus:bg-white resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>
              {submitStatus.message && (
                <p
                  className={`text-center text-sm mt-4 ${
                    submitStatus.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-amber-400 to-orange-500 text-white py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
