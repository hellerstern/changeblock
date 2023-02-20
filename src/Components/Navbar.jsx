import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-black">
            {/* <a className="navbar-brand" href="/"></a> */}
            <Link
                to={"/"}
                style={{ textDecoration: "none" }}
                className="navbar-brand"
            >
                <img src="images/logo.svg" alt="Logo" className="img-fluid" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link
                            to={"/features"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="nav-link">Features</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/pricing"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="nav-link">Pricing</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/faq"} style={{ textDecoration: "none" }}>
                            <p className="nav-link">FAQ</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/contact-us"}
                            style={{ textDecoration: "none" }}
                        >
                            <p className="nav-link">Contact Us</p>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <Link to="/login" style={{ textDecoration: "None" }}>
                        <li className="nav-item">
                            <button className="button-login">Login</button>
                        </li>
                    </Link>
                    <Link to="/signup" style={{ textDecoration: "None" }}>
                        <li className="nav-item">
                            <button className="button-signup">Signup</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
