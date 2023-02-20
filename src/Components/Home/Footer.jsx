import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <div className="container d-flex justify-content-between">
                <img src="images/logo.svg" alt="logo" />
                <div>
                    <img src="images/facebook-footer.png" alt="facebook" />
                    <img
                        src="images/twitter-footer.png"
                        alt="twitter"
                        className="mx-3"
                    />
                    <img src="images/linkedin-footer.png" alt="linkedin" />
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <div className={`d-flex ${styles.links}`}>
                    <Link style={{ textDecoration: "none" }} to="/faq">
                        <p>FAQ</p>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/features">
                        <p>Features</p>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/pricing">
                        <p>Pricing</p>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/contact-us">
                        <p>Contact Us</p>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/">
                        <p>Terms Of Service</p>
                    </Link>
                </div>
                <p>© 2023 ChangeBlock Data Platform</p>
            </div>
        </footer>
    );
};

export default Footer;
