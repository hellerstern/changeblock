import React from 'react'
import styles from "../../styles/Pricing/pricing_header.module.css"
const PricingHeader = () => {
  return (
    <div className={styles.pricing_header}>
        <h1 className={styles.princing_header_heading}>Getting actionable insight about your business when you use our tool</h1>
        <p className={styles.pricing_header_text}>Select a plan that best suits your needs</p>
        {/* <div className={styles.pricing_toggle}>
          <p>Monthly</p>
          <div className={styles.pricing_toggle_btn}>
          <div style={{width:"18px", height:"18px", backgroundColor:"#FFFFFF", borderRadius:"15px"}}>

          </div>
          </div>
          <p>Yearly</p>
        </div> */}
    </div>
  )
}

export default PricingHeader