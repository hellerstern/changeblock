import React from "react";
import styles from "../../styles/Features/features.module.css";

const FeaturesDetail = () => {
    return (
        <div style={{ padding: "100px 100px 0" }}>
            <div className={styles.features_detail_container}>
                <div style={{ paddingRight: "90px" }}>
                    <h3 className={styles.features_detail_heading}>
                        What-If Analysis Tool
                    </h3>
                    <p className={styles.features_detail_text}>
                        The what-if analysis feature of InsightX enables users
                        to assess the risk and likelihood of a project
                        succeeding or failing based on comparative analysis of
                        similar projects, as well as up-to-date economic and
                        political trends. This tool helps to anticipate the
                        risks associated with new projects and make informed
                        decisions.
                    </p>
                </div>
                <img src="images/feature-analysis.png" alt="Feature Detail" />
            </div>
            <div
                className={styles.features_detail_container}
                style={{ flexDirection: "row-reverse" }}
            >
                <div style={{ paddingLeft: "90px" }}>
                    <h3 className={styles.features_detail_heading}>
                        Information Extraction
                    </h3>
                    <p className={styles.features_detail_text}>
                        The information extraction feature of InsightX enables
                        users to quickly and easily extract key information from
                        a document, such as people, places, and other details.
                        It can identify entities, relationships, and other
                        relevant data and convert it into structured forms for
                        further analysis.
                    </p>
                </div>
                <img src="images/feature-info.png" alt="Feature Detail" />
            </div>
            <div className={styles.features_detail_container}>
                <div style={{ paddingRight: "90px" }}>
                    <h3 className={styles.features_detail_heading}>
                        Summarisation
                    </h3>
                    <p className={styles.features_detail_text}>
                        The summarisation feature of InsightX provides optimal
                        summarisation of domain-specific text by using advanced
                        algorithms that extract the most relevant information,
                        condense the content, and identify key phrases. This
                        allows users to quickly and accurately obtain an
                        overview of any text material.
                    </p>
                </div>
                <img
                    src="images/feature-summarization.png"
                    alt="Feature Detail"
                />
            </div>
            <div
                className={styles.features_detail_container}
                style={{ flexDirection: "row-reverse" }}
            >
                <div style={{ paddingLeft: "90px" }}>
                    <h3 className={styles.features_detail_heading}>
                        Entity Extraction
                    </h3>
                    <p className={styles.features_detail_text}>
                        The aspect-based sentiment analysis feature of InsightX
                        enables users to gain a deeper understanding of climate
                        data by providing an aggregate sentiment score for each
                        aspect of the data. It provides an in-depth
                        understanding of the sentiment associated with different
                        aspects, allowing users to identify trends and
                        opportunities.
                    </p>
                </div>
                <img src="images/feature-entity.png" alt="Feature Detail" />
            </div>
        </div>
    );
};

export default FeaturesDetail;
