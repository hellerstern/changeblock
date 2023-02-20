import React from "react";
import styles from "../../styles/FAQ/FaqQuestion.module.css";

const FaqQuestion = ({question,answer}) => {
  return (
    <div className={styles.faq_question}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className={styles.faq_questiontag}>
{question}        </h3>
        <img src="images/drop-down.png" alt="Dropdown" />
      </div>
      <p className={styles.faq_answer}>
       {answer}
      </p>
    </div>
  );
};

export default FaqQuestion;
