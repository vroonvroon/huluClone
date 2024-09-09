import React, { useState, useEffect } from 'react'
import styles from './AddOns.module.css'
import greencheck from '/src/assets/images/Pricing_Checkmark_green-light.svg'
import infoIcon from '/src/assets/images/Info_Icon_White.svg'
import { AddOnData } from './AddOnData1'
import DarkGreenMark from '../../assets/images/ForDelicate/Pricing_Checkmark_green-dark.svg';



const AddOns = () => {

    const [data] = useState(AddOnData);

    const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1023

  return (
    <>
    {data.map((item) => {
        return (
            <>
              <div className={styles.optionsFlex}>
                <p className={styles.AddOnDataTitle}>{item.name}</p>
                  <div className={styles.AddOnDataCheckMarks}>
                    <div className='col-lg-2 px-4 text-center' style={{width: '220px'}}><img src={greencheck} className={styles.greenCheck}  alt="" /></div>

                    {isDesktop && <div style={{width: '1px', height: '21px', backgroundColor: 'white'}}></div>}
                    
                    <div className='col-lg-2 px-4 text-center' style={{width: '220px'}}><img src={greencheck} className={styles.greenCheck}  alt="" /></div>
                  </div>
              </div>
            </>
        )
    })}
    
    </>
  )
}


export const FXAddOns = () => {

  const [data] = useState(AddOnData);

return (
  <>
  {data.map((item) => {
      return (
          <>
            <div className={styles.optionsFlex}>
              <p className={styles.AddOnDataTitle}>{item.name}</p>
                <div className={styles.AddOnDataCheckMarks}>
                  <div className='col-lg-2 px-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck}  alt="" /></div>
                  <div className='col-lg-2 px-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck}  alt="" /></div>
                </div>
            </div>
          </>
      )
  })}
  
  </>
)
}



export const DelicateAddOns = () => {

  const [data] = useState(AddOnData);

return (
  <>
  {data.map((item) => {
      return (
          <>
            <div className={styles.optionsFlex}>
              <p className={styles.delicateAddOnDataTitle}>{item.name}</p>
                <div className={styles.AddOnDataCheckMarks}>
                  <div className='col-lg-2 px-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck}  alt="" /></div>
                  <div className='col-lg-2 px-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck}  alt="" /></div>
                </div>
            </div>
          </>
      )
  })}
  
  </>
)
}


export default AddOns

