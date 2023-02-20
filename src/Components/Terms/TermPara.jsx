import React from 'react'
import styles from "../../styles/Terms/TermsSection.module.css"

const TermPara = ({heading, para}) => {
  return (
    <div style={{marginBottom:"30px"}}>
        <h2 className={styles.term_paraHeading}>{heading}</h2>
        <p className={styles.term_para}>{para}</p>
    </div>
  )
}

export default TermPara