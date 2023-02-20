import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <header>
            <img
                src="images/Header-background.png"
                alt="Header"
                className={styles.header_image}
            />
            <div className={styles.header_content}>
                <h1>
                    Transforming Complex Climate Data into Actionable
                    Information
                </h1>
                <p>
                    With Changblock's insightX the power is in your hands to
                    transform complex climate data into actionable, intelligent
                    information. Explore our platform today and discover the
                    power of data-driven insights.
                </p>
                <div className="d-flex">
                    <Link to="/signup" style={{ textDecoration: "None" }}>
                        <button className={styles.button_register}>
                            Register for Free
                        </button>
                    </Link>

                    <button className={styles.button_demo}>Watch a Demo</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
