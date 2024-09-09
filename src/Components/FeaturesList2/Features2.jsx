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


    const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1023;

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

                <div className={styles.checkMarks2}>
                  {item.bracket1 ? <div className={styles.checkContainer}>
                    {item.name == 'Monthly price. Save up to $17.98/mo.*' ? 
                      (<div className={styles.priceText}>
                        <p style={{fontSize: '14px', textDecoration: 'line-through', color: 'lightgray'}}>$15.98/mo.</p>
                        <p className={styles.exceptionText}>$9.99/mo.*</p>
                      </div>)
                       :
                    item.name == 'Subscriptions included in each plan' ? 
                        <p className={styles.exceptionText}>Disney+ and Hulu, both with ads</p>
                        :
                      <img src={GreenMark} className={styles.greenCheck} alt="" />
                    }
                      </div> 
                        :
                      <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}>
                        <span className='text-center' style={NullMark}></span>
                      </div>
                  }

                    {isDesktop && <div style={{width: '2px', height: '21px', backgroundColor: 'white'}}></div>}

                  {item.bracket2 ? <div className={styles.checkContainer}>
                    {item.name == 'Monthly price. Save up to $17.98/mo.*' ?
                     (<div className={styles.priceText}>
                      <p style={{fontSize: '14px', textDecoration: 'line-through', color: 'lightgray'}}>$26.97/mo.</p>
                      <p className={styles.exceptionText}>$14.99/mo.*</p>
                     </div>)
                      :
                    item.name == 'Subscriptions included in each plan' ? 
                      <p className={styles.exceptionText}>Disney+, Hulu, and ESPN+, all with ads</p>
                        :
                    <img src={GreenMark} className={styles.greenCheck} alt="" />
                    }
                    </div> 
                      : 
                    <div className={`text-center d-flex justify-content-center align-items-center ${styles.checkContainer}`}> 
                        <span className='text-center' style={NullMark}></span>
                    </div>
                  }

                    {isDesktop && <div style={{width: '2px', height: '21px', backgroundColor: 'white'}}></div>}

                  {item.bracket3 ? <div className={styles.checkContainer}>
                    {item.name == 'Monthly price. Save up to $17.98/mo.*' ? 
                      (<div className={styles.priceText}>
                        <p style={{fontSize: '14px', textDecoration: 'line-through', color: 'lightgray'}}>$42.97/mo.</p>
                        <p className={styles.exceptionText}>$24.99/mo.*</p>
                      </div>)
                        :
                      item.name == 'Subscriptions included in each plan' ? 
                        <p className={styles.exceptionText}>Disney+ and Hulu without ads, ESPN+ with ads</p>
                          :
                      <img src={GreenMark} className={styles.greenCheck} alt="" />
                    }
                      </div> 
                        : 
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




export const DelicateFeatures2 = () => {

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
            <div className={styles.delicatefeaturesFlex2}>

            <div className={styles.featureName_checkMarksGrp2}>
              <p className={`${styles.delicateTitle}`}>{item.name} &nbsp; 
                  <img src={info} style={features}/>
              </p>
            </div>

            <div className={styles.delicatecheckMarks}>
                {item.bracket1 ? <div className={styles.notpopularcheckContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> :
                                 <div className={`text-center d-flex justify-content-center align-items-center ${styles.notpopularcheckContainer}`}>
                                    <span className='text-center my-2' style={NullMark}></span>
                                  </div>
                }
                {item.bracket2 ? <div className={styles.delicatecheckContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                  <div className={`text-center d-flex justify-content-center align-items-center ${styles.delicatecheckContainer}`}> 
                                     <span className='text-center my-2' style={NullMark}></span>
                                  </div>
                }
                {item.bracket3 ? <div className={styles.notpopularcheckContainer}><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div> : 
                                 <div className={`text-center d-flex justify-content-center align-items-center ${styles.notpopularcheckContainer}`}>
                                   <span className='text-center my-2' style={NullMark}></span>
                                 </div>
                }
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