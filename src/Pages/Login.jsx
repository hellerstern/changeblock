import { useState } from "react";
import styles from "../styles/Login/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            // console.log(result.user);
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate("/dashboard");
            })
            .catch((error) => {
                // An error happened.
                setError(error.message);
            });
    };

    return (
        <div>
            <div className="">
                <img
                    src="images/auth-background.png"
                    alt="background"
                    className={styles.background}
                />
            </div>
            <div className="d-flex align-items-center justify-content-center pt-5">
                <div className={styles.box}>
                    <div className="text-center">
                        <img
                            src="images/logo-black.png"
                            className="img-fluid"
                            alt="logo"
                            width={150}
                        />
                        <h3
                            className={`justify-content-center ${styles.heading}`}
                        >
                            Login to your Account
                        </h3>
                    </div>
                    <div className="mt-4">
                        <label className={styles.label}>Work Email</label>
                        <br />
                        <input
                            type={"email"}
                            placeholder="Add Email Address"
                            className={styles.input}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label className={styles.label}>Password</label>
                        <br />
                        <input
                            type={"password"}
                            placeholder="Enter Password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label className={styles.forgotPassword}>
                        Forgot Password?
                    </label>
                    <button className={styles.btn_login} onClick={handleLogin}>
                        Login
                    </button>
                    <button
                        className={styles.btn_google}
                        onClick={handleGoogleLogin}
                    >
                        <FontAwesomeIcon icon={faGoogle} className="my-auto" />
                        Sign up with Google
                    </button>
                    <p className="mt-3">
                        Don't have an account?{" "}
                        <Link
                            to={"/signup"}
                            style={{ textDecoration: "none" }}
                            children={
                                <span style={{ color: "#05be70" }}>
                                    Create an account
                                </span>
                            }
                        />
                    </p>
                    {error && (
                        <div style={{ maxWidth: "400px" }}>
                            <p>{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
