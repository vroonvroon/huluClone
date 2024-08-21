import React, { useState } from 'react'
import { FeaturesData2 } from './FeaturesData2'
import GreenMark from '/src/assets/images/Pricing_Checkmark_green-light.svg'
import info from '/src/assets/images/info-icon.svg' 
import styles from '../FeaturesList1/Features1.module.css'
import DarkGreenMark from '../../assets/images/ForDelicate/Pricing_Checkmark_green-dark.svg';


const Features2 = () => {

    const NullMark = {
        display: 'block',
        height: '2px',
        width: '24px', 
        backgroundColor: '#b8becc',
   }

   const features = {
    filter: 'brightness(100)'
   } 

    const [data] = useState(FeaturesData2);

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={styles.featuresFlex2}>

              <div className={styles.featureName_checkMarksGrp2}>
                <p className={`${styles.featuresTitles2}`}>{item.name} &nbsp; 
                    <img src={info} style={features}/>
                </p>

                <div className={styles.checkMarks}>
                  {item.bracket1 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> :
                                   <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}>
                                      <span className='text-center' style={NullMark}></span>
                                    </div>
                  }
                  {item.bracket2 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> : 
                                    <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}> 
                                       <span className='text-center' style={NullMark}></span>
                                    </div>
                  }
                  {item.bracket3 ? <div className={styles.checkContainer}><img src={GreenMark} className={styles.greenCheck} alt="" /></div> : 
                                   <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}>
                                     <span className='text-center' style={NullMark}></span>
                                   </div>
                  }
               </div>
              </div>
            </div>
            </>
        )
    })}
     <div className={styles.moreInfo42}>
            <p>*Savings compared to regular monthly price of each service. Terms apply.</p>
            <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
            <p>†For current-season shows in the streaming library only</p>
      </div>
    </>
  )
}

export const FXFeatures2 = () => {

  const NullMark = {
      display: 'block',
      height: '2px',
      width: '24px', 
      backgroundColor: '#b8becc',
 }

 const features = {
  filter: 'brightness(100)'
 } 

  const [data] = useState(FeaturesData2);

return (
  <>
  {data.map((item) => {
      return (
          <>
            <div className={styles.featuresFlex2}>

            <div className={styles.featureName_checkMarksGrp2}>
              <p className={`${styles.featuresTitles2}`}>{item.name} &nbsp; 
                  <img src={info} style={features}/>
              </p>

              <div className={styles.FX2checkMarks}>
                {item.bracket1 ? <div className={styles.checkContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> :
                                 <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}>
                                    <span className='text-center' style={NullMark}></span>
                                  </div>
                }
                {item.bracket2 ? <div className={styles.checkContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                  <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}> 
                                     <span className='text-center' style={NullMark}></span>
                                  </div>
                }
                {item.bracket3 ? <div className={styles.checkContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                 <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}>
                                   <span className='text-center' style={NullMark}></span>
                                 </div>
                }
             </div>
            </div>
          </div>
          </>
      )
  })}
   <div className={styles.moreInfo42}>
          <p>*Savings compared to regular monthly price of each service. Terms apply.</p>
          <p>**Switches from Live TV to Hulu take effect as of the next billing cycle</p>
          <p>†For current-season shows in the streaming library only</p>
    </div>
  </>
)
}

export default Features2