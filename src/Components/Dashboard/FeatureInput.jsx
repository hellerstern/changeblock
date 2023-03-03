import { useEffect } from "react";
import styles from "../../styles/Dashboard/FeatureInput.module.css";

const FeatureInput = ({
  randomIndex,
  featuresInput,
  setFeaturesInput,
  handleFeaturesChange,
  featuresDescription,
}) => {
  console.log("featuresInput: ", featuresInput);
  useEffect(() => {
    handleFeaturesChange();
    console.log(featuresDescription);
  }, [featuresInput]);
  const list = Object.keys(featuresInput).map((key, i) => (
    // <p key={i}>
    //     <span>Key Name: </span>
    //     <span>Value: </span>
    // </p>
    <div>
      <label className="label">{key}</label>
      <br />
      <p className="fs-6 fw-light">{featuresDescription[key]}</p>
      <input
        value={featuresInput[key][0]}
        size={40}
        disabled={false}
        type="number"
        className={`mb-2 ${styles.input}`}
        onChange={(e) => {
          setFeaturesInput({
            ...featuresInput,
            [key]: [parseFloat(e.target.value)],
          });
        }}
      />
    </div>
  ));
  return (
    <div className="p-3" style={{ overflow: "scroll", height: "500px" }}>
      {list}
    </div>
  );
};

export default FeatureInput;
