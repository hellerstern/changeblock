import styles from "../../styles/ContactUs/ContactSection.module.css";

const ContactSection = () => {
    return (
        <div>
            <img
                src="images/contactus-background.png"
                alt="contact us"
                className="img-fluid"
            ></img>
            <section className={`${styles.background}`}>
                <div>
                    <div className="">
                        <div className={styles.box}>
                            <h3 className={styles.heading}>Get in Touch</h3>
                            {/* <p className={styles.para}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent
                                vulputate libero et velit tildum interdum, ac
                                aliquet odio mattis. Lorem ipsum dolor sit amet,
                                consectetur electthadipiscing elit. Nunc
                                vulputate libero et velit interdum, ac
                            </p> */}
                            <form>
                                <div className="row mt-5">
                                    <div className="col-6">
                                        <label className={styles.label}>
                                            First Name
                                        </label>
                                        <br />
                                        <input
                                            placeholder="First Name"
                                            className={styles.input}
                                        />
                                        <label
                                            className={`${styles.label} mt-4`}
                                        >
                                            Email
                                        </label>
                                        <br />
                                        <input
                                            placeholder="Email Address"
                                            className={styles.input}
                                            type="email"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label className={styles.label}>
                                            Last Name
                                        </label>
                                        <br />
                                        <input
                                            placeholder="Last Name"
                                            className={styles.input}
                                        />
                                        <label
                                            className={`${styles.label} mt-4`}
                                        >
                                            Phone Number
                                        </label>
                                        <br />
                                        <input
                                            placeholder="Add Phone Number"
                                            className={styles.input}
                                            type="tel"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className={styles.label}>
                                        Message
                                    </label>
                                    <br />
                                    <textarea
                                        className={styles.input}
                                        rows={5}
                                        placeholder={"Add Description"}
                                    />
                                </div>
                                <div className="d-flex mt-4">
                                    <input type={"checkbox"} className="me-2" />
                                    <label>
                                        Yes, I would like to receive marketing
                                        communication regarding InsightX's
                                        products, services, events <br /> and
                                        more from InsightX and InsightX's
                                        regional partners
                                    </label>
                                </div>
                                <p className="mt-3">
                                    By clicking <strong>"Send Message"</strong>,
                                    you agree to you agree to processing of
                                    personal data according to the{" "}
                                    <span style={{ color: "#05be70" }}>
                                        Terms of Service
                                    </span>
                                </p>
                                <button className={styles.btn}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;
