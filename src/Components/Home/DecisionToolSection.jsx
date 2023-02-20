import styles from "../../styles/DecisionToolSection.module.css";

const DecisionToolSection = () => {
    return (
        <section className="container py-5">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className={styles.header}>
                        Make decisions with <br /> InsightX Faster
                    </h3>
                    <div className="d-flex">
                        <img
                            src="images/target-icon.svg"
                            alt="target"
                            className="mb-auto"
                        />
                        <div className={`${styles.content} pt-4`}>
                            <h5>Conduct target analysis for your business</h5>
                            <p>
                                InsightX's what-if analysis tool empowers users
                                to make informed decisions in real-time. By
                                inputting project variables, the tool calculates
                                the likelihood of success and provides
                                confidence levels and recommendations for
                                improvement. The easy-to-use interface
                                streamlines decision-making, allowing for faster
                                and accurate results.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img
                            src="images/bar-icon.png"
                            alt="bar"
                            className="mb-auto"
                        />
                        <div className={`${styles.content} pt-4`}>
                            <h5>Aspect Based Sentiment</h5>
                            <p className="">
                                Unlock deeper insights from text documents.
                                InsightX empowers users to accurate identify,
                                track opinions and sentiments from large volumes
                                of text data, providing valuable insights and
                                enabling informed decision making.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img
                        src="images/business-img.png"
                        alt="business"
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
};

export default DecisionToolSection;
