import React, { useState } from 'react'
import { FeaturesData3 } from './FeaturesData3'
import GreenMark from '/src/assets/images/Pricing_Checkmark_green-light.svg'
import info from '/src/assets/images/info-icon.svg' 
import styles from '../FeaturesList1/Features1.module.css'

const Features3 = () => {

    const NullMark = {
        display: 'flex',
        height: '2px',
        width: '15px',
        backgroundColor: '#b8becc'
   }

   const features = {
    filter: 'brightness(100)'
   } 

    const [data] = useState(FeaturesData3);

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={styles.featuresFlex3}>

                <div className={`${styles.featureName_checkMarksGrp}`}>
                  <p className={styles.featuresTitles3}>{item.name} &nbsp; 
                      {item.infoIcon && <img src={info} style={features}/>}
                  </p>

                  <div className={styles.checkMarks}>

                    {item.bracket1 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> : <div className={`text-center d-flex justify-content-center ${styles.checkContainer}`}><span className='text-center' style={NullMark}></span></div>}
                    {item.bracket2 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> : <div className={styles.checkContainer}><span className='text-center' style={NullMark}></span></div>}

                </div>

              </div>
              </div>
            </>
        )
    })}
     <div className={styles.moreInfo43}>
            <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
            <p>†For current-season shows in the streaming library only</p>
            <p>††Live TV channels will include ad breaks</p>
      </div>
    </>
  )
}

export default Features3