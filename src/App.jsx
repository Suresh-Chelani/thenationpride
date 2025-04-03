import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import Shots from "./components/Shots";
import "./App.css";

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
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
