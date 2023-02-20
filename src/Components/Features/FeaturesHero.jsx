import React from "react";
import styles from "../../styles/Features/features.module.css";
const FeaturesHero = () => {
    return (
        <div className={styles.features_hero}>
            <h1 className={styles.features_hero_heading}>
                Get more insights on what our tool can do for your business
            </h1>
            <p className={styles.features_hero_text}>
                Stop guessing, get the insights you need to make smart business
                decisions with InsightX! Our tool helps you unlock the power of
                climate data and make data-driven decisions with confidence!
            </p>
        </div>
    );
};

export default FeaturesHero;
