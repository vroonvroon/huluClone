import React from 'react'
import styles from '../Billing.module.css'

const BasePage = () => {
  return (
    <>
      <div className={styles.basePage}>
        <p className={styles.issueQuestion}>What type of feedback would you like to leave today?</p>
          <div className={styles.fcardButtons}>
            <input type="radio" id="option1" name="feedback-options" style={{display:'none'}}/> 
            <label htmlFor="option1" className={styles.feedbackOpt}>Suggest a Hulu improvement</label>
            <input type="radio" id="option2" name="feedback-options" style={{display:'none'}}/>
            <label htmlFor="option2" className={styles.feedbackOpt}>Help Center feedback</label>
          </div>

          <button className={styles.submitbtn} onClick={pageDisplay}>NEXT</button>
      </div>
    </>
  )
}

export default BasePage