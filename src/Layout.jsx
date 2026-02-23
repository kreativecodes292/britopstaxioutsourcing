import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterTop from "./components/FooterTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import About from "./pages/About.jsx"
import WhatsAppButton from "./components/WhatsAppButton.jsx";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
              <WhatsAppButton
          phone="447521440329"
          message="Hello! I am interested in your UK cab call outsourcing services. Could you please provide more details?"
        />
      <Navbar />

      {/* Routed Pages */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          {/* Add more pages as needed */}
        </Routes>
      </div>

      <FooterTop />
    </div>
  );
};

export default Layout; // ✅ Make sure this line is here
