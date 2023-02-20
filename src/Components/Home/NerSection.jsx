// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/NerSection.module.css";
import { Link } from "react-router-dom";

const NerSection = () => {
    return (
        <section className={`${styles.ner_section}`}>
            <div className={`container py-5`}>
                {/* <p className="text-center pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                </p> */}
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="images/ner_bar.png"
                            alt="ner"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-4">
                            {/* <p className="">NER TOOL(Entity Recognition)</p> */}
                            {/* <div className={styles.green_rect}></div> */}
                            <h1 className={`${styles.heading}`}>
                                Get Instant Answers with InsightX
                            </h1>
                            <p>
                                With so much climate data available, it's often
                                difficult to access the information that matters
                                most. That's where ChangeBlock's InsightX comes
                                in, our all-in-one dashboard utilises
                                state-of-the-art deep learning algorithms to
                                convert complex climate data into valuable,
                                actionable information for crucial decision
                                making, accessible through a user-friendly web
                                interface. InsightX delivers comprehensive
                                analysis and interpretation of complex climate
                                data. The platform integrates what-if analysis,
                                information extraction, text summarisation, and
                                aspect-based sentiment analysis to extract
                                valuable insights. Get access to round-the-clock
                                expertise with InsightX at your fingertips.
                            </p>
                        </div>
                        <Link to={"/signup"} style={{ textDecoration: "none" }}>
                            <button className={styles.readmore_btn}>
                                Get Started{" "}
                                {/* <FontAwesomeIcon
                                icon={faArrowRight}
                                className="my-auto"
                            /> */}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NerSection;
