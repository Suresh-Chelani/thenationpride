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
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
