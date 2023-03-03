import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import PricingHeader from "../Components/Pricing/PricingHeader";
import Upgradeplanforpricing from "../Components/Upgradeplanforpricing/Upgradeplanforpricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingHeader/>
      <Upgradeplanforpricing></Upgradeplanforpricing>
      <GetToKnowSection />
      <Footer />
    </div>
  );
};

export default Pricing;
