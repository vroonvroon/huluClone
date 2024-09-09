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


    const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1023;

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={styles.featuresFlex3}>

                <div className={`${styles.featureName_checkMarksGrp3}`}>
                  <p className={styles.featuresTitles3}>{item.name} &nbsp; 
                      {item.infoIcon && <img src={info} style={features}/>}
                  </p>


                  <div className={styles.checkMarks}>
                    {item.bracket1 ? 
                      <div className={styles.checkContainer3}>
                        {item.name == 'Monthly price' ?
                          (<p>$76.99/mo.</p>)
                            :
                            item.name == 'Subscriptions included in each plan' ? 
                              <p className={styles.exceptionText}>Hulu + Live TV, Disney+, and ESPN+, all with ads</p>
                              :
                          <img src={GreenMark} className={styles.greenCheck} alt="" />
                        }
                        </div> 
                          : 
                        <div className={`text-center d-flex justify-content-center ${styles.checkContainer3}`}>
                          <span className='text-center' style={NullMark}></span>
                      </div>
                    }
                    
                    {isDesktop && <div style={{width: '3px', height: '21px', backgroundColor: 'white'}}></div>}

                    {item.bracket2 ? 
                      <div className={styles.checkContainer3}>
                        {item.name == 'Monthly price' ? 
                          <p>$89.99/mo.</p>
                            :
                            item.name == 'Subscriptions included in each plan' ? 
                            <p className={styles.exceptionText}>Hulu + Live TV and Disney+ (both without ads), ESPN+ with ads††
                            </p>
                            :
                          <img src={GreenMark} className={styles.greenCheck} alt="" />
                        }
                        </div> 
                          : 
                        <div className={styles.checkContainer3}>
                          <span className='text-center' style={NullMark}></span>
                      </div>
                    }
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