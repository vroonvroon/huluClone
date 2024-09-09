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

  const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1023;

  return (
    <>
    {data.map((item) => {
        return (
            <>
                  <div className={`${styles.featureName_checkMarksGrp}`}>
                    <p className={` ${styles.featuresTitles1}`}>{item.name} &nbsp; 
                        {item.infoIcon && <img src={info} style={features}/>}
                    </p>
                    

                    <div className={styles.checkMarks}>
                      {item.bracket1 ? 
                         <div className={styles.checkContainer}>
                           {item.name == 'Monthly price' ? 
                              <p>$7.99/mo.</p> 
                               : 
                              <img src={GreenMark} className={styles.greenCheck} alt="" />
                            }
                         </div> 
                           :                   
                          <div className={`text-center d-flex justify-content-center ${styles.checkContainer}`}>
                            <span className='text-center' style={NullMark}></span>
                          </div>
                      }
                        {isDesktop && <div style={{width: '1px', height: '21px', backgroundColor: 'white'}}></div>}

                      {item.bracket2 ? 
                          <div className={styles.checkContainer}>
                            {item.name == 'Monthly price' ? 
                              <p>$17.99/mo.</p>
                                :
                              <img src={GreenMark} className={styles.greenCheck} alt="" />
                            }
                          </div> 
                           : 
                          <div className={`text-center ${styles.checkContainer}`}>
                            <span className='' style={NullMark}></span>
                          </div>
                      }
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


// FOR HOME PAGE ONLY//
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


// FOR AMERICAN HORROR STORY PAGE ONLY//
export const DelicateFeatures1 = () => {

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
              <div className={`${styles.delicatefeaturesFlex} `}>

                  <div className={`${styles.delicatefeatureName2_checkMarksGrp}`}>
                    <p className={` ${styles.delicatefeaturesTitles}`}>{item.name} &nbsp; 
                        {item.infoIcon && <img src={info} style={features}/>}
                    </p>
                  </div>

              <div className={styles.checkMarks}>
                  {item.bracket1 ? <div className={styles.notpopularcheckContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : <div className={`text-center d-flex justify-content-center ${styles.notpopularcheckContainer}`}>
                    <span className='text-center' style={NullMark}></span></div>
                  }
                  {item.bracket2 ? <div className={styles.delicatecheckContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                      <div className={`text-center ${styles.notpopularcheckContainer}`}>
                                    <span className='' style={NullMark}></span></div>
                  }
              </div>
            </div>
            </>
        )
    })}

        <div div className={styles.moreInfo4_2}>
          <p>†For current-season shows in the streaming library only</p>
          <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
        </div>
    </>
  )
}


export default Features