import BusinessIdeasSection from "../Components/Home/BusinessIdeasSection";
import CompaniesSection from "../Components/Home/CompaniesSection";
import CountriesSection from "../Components/Home/CountriesSection";
import DecisionToolSection from "../Components/Home/DecisionToolSection";
import Footer from "../Components/Home/Footer";
import GetToKnowSection from "../Components/Home/GetToKnowSection";
import Header from "../Components/Home/Header";
import NerSection from "../Components/Home/NerSection";
import SlideSection from "../Components/Home/SlideSection";
import ThreeTabsSection from "../Components/Home/ThreeTabsSection";
import Navbar from "../Components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <CompaniesSection />
            <NerSection />
            <DecisionToolSection />
            <ThreeTabsSection />
            <SlideSection />
            <CountriesSection />
            <BusinessIdeasSection />
            <GetToKnowSection />
            <Footer />
        </div>
    );
};

export default Home;
