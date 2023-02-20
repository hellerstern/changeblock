import styles from "../../styles/Dashboard/Heading.module.css";

const Heading = ({ selectedTab, headingDesc }) => {
  return (
    <div className={styles.box}>
      {(() => {
        if (selectedTab === "WhatIf") {
          return (
            <div>
              <h4>{headingDesc["WhatIf"]["heading"]}</h4>
              <p>{headingDesc["WhatIf"]["desc"]}</p>
            </div>
          );
        } else if (selectedTab === "InformationExtraction") {
          return (
            <div>
              <h4>{headingDesc["InformationExtraction"]["heading"]}</h4>
              <p>{headingDesc["InformationExtraction"]["desc"]}</p>
            </div>
          );
        } else if (selectedTab === "EntityExtraction") {
          return (
            <div>
              <h4>{headingDesc["EntityExtraction"]["heading"]}</h4>
              <p>{headingDesc["EntityExtraction"]["desc"]}</p>
            </div>
          );
        } else if (selectedTab === "Summary") {
          return (
            <div>
              <h4>{headingDesc["Summarization"]["heading"]}</h4>
              <p>{headingDesc["Summarization"]["desc"]}</p>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default Heading;
