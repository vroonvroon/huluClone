import React from 'react'
import styles from './WelcomePlansCard.module.css'


const WelcomePlansCard = ({trial, ads, price, price2, popular, logo}) => {

  const screenWidth = window.innerWidth;
  const isMobile = screenWidth < 768;

  return (
    <>
    <div className={styles.plans}>
        <span className={popular ? styles.pill : styles.nopill}>
          MOST POPULAR
        </span>
        <p className={styles.plansHeading}>{trial}</p>
        <img src={logo} style={{width: '80px'}} alt="" />
        <p className={styles.plansSubheading}>{ads}</p>
        <button className={styles.PriceButton}>{isMobile ? price2 : price}</button>
    </div>
    </>
  )
}


const FXWelcomePlansCard = ({ads, price, popular, logo}) => {
  return (
    <>
    <div className={styles.plans}>
        <span className={popular ? styles.pill : styles.nopill}>
          MOST POPULAR
        </span>
        <img src={logo} style={{width: '80px'}} alt="" />
        <p className={styles.plansSubheading}>{ads}</p>
        <button className={styles.FXPriceButton}>{price}</button>
    </div>
    </>
  )
}


const  FXWelcomePlansCard2 = ({ads, price, popular, trial}) => {
  return (
    <>
    <div className={popular? styles.plans2 : styles.plans2Color}>
        <span className={popular ? styles.pill : styles.nopill}>
          MOST POPULAR
        </span>
        <img style={{width: '80px'}} alt="" />
        <div style={{marginBottom: '10px', marginTop: '20px'}}>
          <p>{trial}</p>
          <p className={styles.plansSubheading}>{ads}</p>
        </div>
        <button className={styles.FXPriceButton}>{price}</button>
    </div>
    </>
  )
}


export {WelcomePlansCard, FXWelcomePlansCard, FXWelcomePlansCard2}

