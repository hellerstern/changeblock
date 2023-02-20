import styles from "../../styles/ThreeTabsSection.module.css";

const ThreeTabsSection = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container py-5">
                <h3 className={`text-center mb-5 ${styles.heading}`}>
                    WHY YOU SHOULD CHOOSE CHANGEBLOCK’S INSIGHTX
                </h3>
                <div className="row flex-wrap">
                    <div className="col-lg text-center bg-white p-4">
                        <img src="images/trend-icon.png" alt="trend" />
                        <h5>Comprehensive Analysis</h5>
                        <p>
                            InsightX offers a complete solution for climate data
                            analysis by integrating what-if analysis,
                            information extraction, text summarisation, and
                            aspect-based sentiment analysis. This ensures that
                            users have access to a comprehensive view of their
                            data, leading to better decision making.
                        </p>
                    </div>
                    <div className="col-lg text-center bg-white p-4 mx-lg-4">
                        <img src="images/hierarchy.png" alt="hierarchy" />
                        <h5>Advanced Deep Learning Techniques</h5>
                        <p>
                            The platform leverages advanced deep learning
                            techniques to extract valuable insights from complex
                            and fragmented climate data. This leads to more
                            accurate and reliable results, providing users with
                            a competitive edge.
                        </p>
                    </div>
                    <div className="col-lg text-center bg-white p-4">
                        <img
                            src="images/monitor-icon.png"
                            alt="dashboard monitor"
                        />
                        <h5>Intuitive Dashboard</h5>
                        <p>
                            The platform's easy-to-use dashboard is designed to
                            provide a seamless user experience. Users can access
                            all the tools they need in one place, allowing them
                            to quickly and efficiently make decisions based on
                            the data at hand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeTabsSection;
