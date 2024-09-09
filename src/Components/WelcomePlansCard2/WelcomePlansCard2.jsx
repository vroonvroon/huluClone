import React from 'react'
import styles from './WelcomePlansCard2.module.css'

const WelcomePlansCard = ({savings, ads, planName, price, price2, popular, logo}) => {

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 767;

  return (
    <>
    <div className={styles.plans}>
        <span className={popular ? styles.pill : styles.nopill}>BEST VALUE</span>
        <p className={styles.plansHeading}>{savings}</p>
        <p className={styles.planText}>{planName}</p>
        <img src={logo} className={styles.planLogo} alt="" />
        <p className={styles.plansSubheading}>{ads}</p>
        <button className={styles.PriceButton}>{isMobile ? price2 : price}</button>
    </div>
    </>
  )
}

export const FX2WelcomePlansCard = ({savings, ads, planName, price, popular, logo}) => {
  return (
    <>
    <div className={styles.plans}>
        <span className={popular ?  styles.pill : styles.nopill}>BEST VALUE</span>
        <p className={styles.plansHeading}>{savings}</p>
        <p className={styles.planText}>{planName}</p>
        <img src={logo} className={styles.planLogo} alt="" />
        <p className={styles.plansSubheading}>{ads}</p>
        <button className={styles.FX2PriceButton}>{price}</button>
    </div>
    </>
  )
}


export const DelicateWelcomePlansCard = ({trial, planName, price, popular, logo}) => {
  return (
    <>
    <div className={popular? styles.popularPlan : styles.delicatePlans}>
        <span className={trial?  styles.pill : styles.delicatenopill}>3 DAY FREE TRIAL</span>
        <img src={logo} className={styles.delicateplanLogo} alt="" />
        <p className={styles.delicateplanText}>{planName}</p>
        <button className={styles.delicate2PriceButton}>{price}</button>
    </div>
    </>
  )
}

export default WelcomePlansCard