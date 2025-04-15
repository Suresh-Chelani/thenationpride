import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import Shots from "./components/Shots";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import BrandCampaigns from "./components/BrandCampaigns";
import AdvertiseWithUs from "./components/AdvertiseWithUs";
import Stories from "./components/stories";

const App = () => {
  return (
    <Router>
      <div className="min-h-[100vh]">
        {/* Navigation */}
        <Header />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Category />
              <Shots />
              <Features />
            </>
          } />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/category/:id/:name" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<BrandCampaigns/>}/>
          <Route path="/advertise" element={<AdvertiseWithUs/>}/>
          <Route path="/stories" element={<Stories/>}/>
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
