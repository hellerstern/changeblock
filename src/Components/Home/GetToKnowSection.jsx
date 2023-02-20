import styles from "../../styles/GetToKnowSection.module.css";

const GetToKnowSection = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container text-center py-5">
                <h3>Stay in the Know</h3>
                <p>
                    ChangeBlock InsightX sends monthly updates on the market,
                    the state of digital carbon and the latest trends. Enter
                    your email below to stay in the know.
                </p>
                <div className="d-flex justify-content-center">
                    <input type={"text"} placeholder="Enter your email" />
                    <button>Access Now</button>
                </div>
            </div>
        </section>
    );
};

export default GetToKnowSection;
