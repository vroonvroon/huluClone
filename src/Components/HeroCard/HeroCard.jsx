import React from 'react'
import styles from './HeroCard.module.css'

 

const HeroCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <p className={styles.pack}>{props.name}</p>

        <div className={styles.packInfo}>
          <img src={props.img} className={props.name.includes('DISNEY BUNDLE TRIO BASIC') ? styles.CTAButtonImg : styles.CTAButtonImg1}/>
          <p className={styles.info}>{props.price}</p>
        </div>
        <button className={styles.CTAButton}>{props.but}</button>
       
      </div> 
    </div>
  )
}

export default HeroCard