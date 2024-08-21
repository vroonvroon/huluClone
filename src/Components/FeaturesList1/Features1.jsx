import React, { useState } from 'react'
import { FeaturesData } from './FeaturesData'
import GreenMark from '/src/assets/images/Pricing_Checkmark_green-light.svg'
import info from '/src/assets/images/info-icon.svg' 
import styles from './Features1.module.css'
import DarkGreenMark from '../../assets/images/ForDelicate/Pricing_Checkmark_green-dark.svg';

const Features = () => {

  const NullMark = {
        height: '2px',
        width: '10px', 
        display: 'flex',
        backgroundColor: '#b8becc'
  }

  const features = {
    filter: 'brightness(100)'
  } 

  const [data] = useState(FeaturesData);

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={`${styles.featuresFlex} `}>

                  <div className={`${styles.featureName_checkMarksGrp}`}>
                    <p className={` ${styles.featuresTitles}`}>{item.name} &nbsp; 
                        {item.infoIcon && <img src={info} style={features}/>}
                    </p>

                    <div className={styles.checkMarks}>

                      {item.bracket1 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> :                   <div className={`text-center d-flex justify-content-center ${styles.checkContainer}`}>
                                       <span className='text-center' style={NullMark}></span></div>
                      }

                      {item.bracket2 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> : 
                                          <div className={`text-center ${styles.checkContainer}`}>
                                        <span className='' style={NullMark}></span></div>
                      }
                    </div>

               </div>
            </div>
            </>
        )
    })}

        <div div className={styles.moreInfo4}>
          <p>†For current-season shows in the streaming library only</p>
          <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
        </div>
    </>
  )
}

export const FXFeatures = () => {

  const NullMark = {
        height: '2px',
        width: '24px', 
        display: 'flex',
        backgroundColor: '#b8becc'
  }

  const features = {
    filter: 'brightness(100)'
  } 

  const [data] = useState(FeaturesData);

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={`${styles.featuresFlex} `}>

                  <div className={`${styles.featureName_checkMarksGrp}`}>
                    <p className={` ${styles.featuresTitles}`}>{item.name} &nbsp; 
                        {item.infoIcon && <img src={info} style={features}/>}
                    </p>

                    <div className={styles.checkMarks}>

                      {item.bracket1 ? <div className={styles.checkContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> :                   <div className={`text-center d-flex justify-content-center ${styles.checkContainer}`}>
                                       <span className='text-center' style={NullMark}></span></div>
                      }

                      {item.bracket2 ? <div className={styles.checkContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                          <div className={`text-center ${styles.checkContainer}`}>
                                        <span className='' style={NullMark}></span></div>
                      }
                    </div>

               </div>
            </div>
            </>
        )
    })}

        <div div className={styles.moreInfo4}>
          <p>†For current-season shows in the streaming library only</p>
          <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
        </div>
    </>
  )
}


export default Features