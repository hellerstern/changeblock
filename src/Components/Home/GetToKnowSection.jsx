import styles from "../../styles/GetToKnowSection.module.css";

const GetToKnowSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container text-center py-5">
        <h3>Stay in the Know</h3>
        <p>
          ChangeBlock InsightX sends monthly updates on the market, the state of
          digital carbon and the latest trends. Enter your email below to stay
          in the know.
        </p>
        <div
          className="getToKnowSection-div-container d-flex justify-content-center"
          style={{
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <input
            type={"text"}
            placeholder="Enter your email"
            style={{ width: "300px", padding: "10px", paddingLeft: "20px" }}
          />
          <button style={{ width: "200px", padding: "10px 30px" }}>
            Access Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowSection;
