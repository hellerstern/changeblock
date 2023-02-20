import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import BusinessIdeasSection from "../Components/Home/BusinessIdeasSection";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import TermSection from "../Components/Terms/TermSection";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <TermSection/>
      <GetToKnowSection />
      <Footer />
    </div>
  );
};

export default Terms;
