import { useState } from "react";
import styles from "../styles/Login/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result.user);
            navigate("/dashboard");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEmailSignup = async () => {
        try {
            const result = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            updateProfile(firebase.auth().currentUser, {
                displayName: `${firstName} ${lastName}`,
            })
                .then(() => {
                    navigate("/dashboard");
                })
                .catch((error) => {
                    setError(error.message);
                });
        } catch (error) {
            setError(error.message);
        }
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
                            Create your account
                        </h3>
                    </div>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col">
                                <label className={styles.label}>
                                    First Name{" "}
                                </label>
                                <br />
                                <input
                                    type={"text"}
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    placeholder="First Name"
                                    className={styles.input}
                                />
                            </div>
                            <div className="col">
                                <label className={styles.label}>
                                    Last Name{" "}
                                </label>
                                <br />
                                <input
                                    type={"text"}
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    placeholder="Last Name"
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <label className={styles.label}>Work Email</label>
                        <br />
                        <input
                            type={"email"}
                            placeholder="Add Email Address"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <div className="my-3">
                            <input type={"checkbox"} className="me-2" />
                            <label>
                                I agree to Change Block Data Platform{" "}
                                <span style={{ color: "#05BE70" }}>
                                    Terms of Service
                                </span>
                            </label>
                        </div>
                    </div>
                    <button
                        className={styles.btn_login}
                        onClick={handleEmailSignup}
                    >
                        Create Account
                    </button>
                    <button
                        className={styles.btn_google}
                        onClick={handleGoogleLogin}
                    >
                        <FontAwesomeIcon icon={faGoogle} className="my-auto" />
                        Sign up with Google
                    </button>
                    <p className="mt-3">
                        Already a user?{" "}
                        <Link
                            to={"/login"}
                            style={{ textDecoration: "none" }}
                            children={
                                <span style={{ color: "#05be70" }}>Login</span>
                            }
                        />
                    </p>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Signup;
