import styles from "../../styles/BusinessIdeasSection.module.css";

const BusinessIdeasSection = () => {
    return (
        <section className={styles.wrapper}>
            <div className="py-5">
                <div className="row">
                    <div className={`col-lg-6 ${styles.content}`}>
                        <h3>
                            Ready to get your business <br /> Idea Scenarios
                            Checked
                        </h3>
                        <p>
                            See the power of InsightX in action! Get your
                            business idea scenarios checked and unlock valuable
                            insights to make better decisions. Let InsightX help
                            you uncover hidden value in your business idea with
                            comprehensive analysis and interpretation of complex
                            climate data. Take advantage of our what-if
                            analysis, information extraction, text
                            summarisation, and aspect-based sentiment analysis
                            for unparalleled insights!
                        </p>
                        <button className={styles.btn_readmore}>
                            Read More
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="images/mock-dashboard.png"
                            alt="mock of dashboard"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessIdeasSection;
