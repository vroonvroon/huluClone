import React from 'react'
import styles from './WelcomePlansCard.module.css'


const WelcomePlansCard = ({trial, ads, price, popular, logo}) => {
  const buttons = document.querySelector('.PriceButton');

  return (
    <>
    <div className={styles.plans}>
        <span className={popular ? styles.pill : styles.nopill}>
          MOST POPULAR
        </span>
        <p className={styles.plansHeading}>{trial}</p>
        <img src={logo} style={{width: '80px'}} alt="" />
        <p className={styles.plansSubheading}>{ads}</p>
        <button className={styles.PriceButton}>{price}</button>
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


export {WelcomePlansCard, FXWelcomePlansCard}

