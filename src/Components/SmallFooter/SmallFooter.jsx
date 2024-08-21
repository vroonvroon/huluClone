import React from 'react'
import styles from './SmallFooter.module.css'

const SmallFooter = () => {
  return (
    <>
     <footer style={{backgroundColor: '#141414'}}>
            <div className={styles.links}>
                <p>ABOUT</p>
                <p>CAREERS</p>
                <p>HELP</p>
                <p>ADVERTISING</p>
            </div>

            <div className={styles.extraLinks}>
                <div className={styles.abtAds} style={{display: 'flex'}}>
                    {/* <img src={aboutAds} alt="" /> */}
                    <p>ABOUT ADS</p>
                </div>
                <p>TERMS OF USE</p> 
                {/* <p>PRIVACY POLICY</p>  */}
                <p>YOUR CALIFORNIA PRIVACY RIGHTS</p> 
                {/* <p>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</p>  */}
                <p>&#169; 2024 Hulu, LLC</p>
            </div>
        </footer>
    </>
  )
}

export default SmallFooter