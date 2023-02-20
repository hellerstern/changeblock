import { Link } from "react-router-dom";
import styles from "../../styles/CountriesSection.module.css";

const CountriesSection = () => {
    return (
        <section className={`${styles.wrapper} pt-5`}>
            <img
                src="images/road-background.png"
                alt="Header"
                className={styles.header_image}
            />
            <div className={styles.header_content}>
                <h3>24 Hours Expert Support</h3>
                <p>
                    InsightX is supported by a team of experts who are available
                    24 hours a day to provide users with the assistance they
                    need. Whether you need help getting started with the
                    platform or have questions about specific features, the
                    InsightX team is here to help. With dedicated support, users
                    can be confident that they can acquire the expertise they
                    need to make the most of the platform and achieve their
                    goals.
                </p>
                <div className="d-flex">
                    <Link to="/signup" style={{ textDecoration: "None" }}>
                        <button className={styles.button_get_started}>
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.header_countries}>
                <img src="images/countries-img.png" alt="global countries" />
            </div>
        </section>
    );
};

export default CountriesSection;
