import { useState } from "react";
import styles from "../../styles/SlideSection.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SlideSection = () => {
    const images = [
        "images/product-developer.png",
        "images/insurance-broker.png",
        "images/forestry-investors.png",
        "images/plastic-investors.png",
        "images/other-business.png",
    ];
    const names = [
        "Project Developers",
        "Insurance Brokers",
        "Forestry Investors",
        "Plastic Offsetting Investors",
        "Other Businesses",
    ];
    const descs = [
        "InsightX helps project developers in the climate space identify and mitigate risks through advanced analysis and interpretation of complex climate data. Utilise what-if analysis, information extraction, summarisation and aspect-based sentiment analysis to drive successful project planning and execution.",
        "InsightX helps insurance brokers determine premiums by analysing complex climate data through what-if analysis and sentiment analysis to accurately assess project risk and success likelihood. Make better decisions with InsightX.",
        "InsightX helps forestry project investors make informed decisions by providing comprehensive analysis and interpretation of complex climate data through what-if analysis, and aspect-based sentiment analysis. Invest with confidence with InsightX",
        "InsightX empowers plastic offsetting investors by providing data-driven analysis of project success likelihood and offering actionable insights to optimize investment decisions in the climate space.",
        "InsightX helps businesses in the climate space make the right decisions based on accurate analysis of large, complex climate data. Our platform offers what-if analysis, information extraction, text summarisation, and sentiment analysis for quick and easy interpretation",
    ];
    const [name, setName] = useState("Project Developers");
    const [desc, setDesc] = useState(descs[0]);
    const [imgSrc, setImgSrc] = useState("images/product-developer.png");
    return (
        <section className={`${styles.wrapper} container`}>
            <h2>
                ChangeBlock Data Platform <br /> Intended Audience
            </h2>
            <div className="d-flex justify-content-evenly my-4">
                <button
                    className={
                        imgSrc === images[0]
                            ? styles.selected_button
                            : styles.unselected_button
                    }
                    onClick={() => {
                        setImgSrc(images[0]);
                        setName(names[0]);
                        setDesc(descs[0]);
                    }}
                >
                    Project Developers
                </button>
                <button
                    className={
                        imgSrc === images[1]
                            ? styles.selected_button
                            : styles.unselected_button
                    }
                    onClick={() => {
                        setImgSrc(images[1]);
                        setName(names[1]);
                        setDesc(descs[1]);
                    }}
                >
                    Insurance Brokers
                </button>
                <button
                    className={
                        imgSrc === images[2]
                            ? styles.selected_button
                            : styles.unselected_button
                    }
                    onClick={() => {
                        setImgSrc(images[2]);
                        setName(names[2]);
                    }}
                >
                    Forestry Investors
                </button>
                <button
                    className={
                        imgSrc === images[3]
                            ? styles.selected_button
                            : styles.unselected_button
                    }
                    onClick={() => {
                        setImgSrc(images[3]);
                        setName(names[3]);
                        setDesc(descs[3]);
                    }}
                >
                    Plastic Offsetting Investors
                </button>
                <button
                    className={
                        imgSrc === images[4]
                            ? styles.selected_button
                            : styles.unselected_button
                    }
                    onClick={() => {
                        setImgSrc(images[4]);
                        setName(names[4]);
                        setDesc(descs[4]);
                    }}
                >
                    Others Businesses
                </button>
            </div>
            <motion.img
                key={imgSrc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={imgSrc}
            ></motion.img>
            <div className={styles.box}>
                <h4>{name}</h4>
                <p>{desc}</p>
                <Link style={{ textDecoration: "none" }} to="signup">
                    <button className={styles.btn}>Sign Up for Free</button>
                </Link>
            </div>
        </section>
    );
};

export default SlideSection;
