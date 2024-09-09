import React, { useState } from 'react'
import { AddOnData2 } from './AddOnData2'
import styles from '../AddOns1/AddOns.module.css'
import greencheck from '/src/assets/images/Pricing_Checkmark_green-light.svg'
import infoIcon from '/src/assets/images/Info_Icon_White.svg'
import DarkGreenMark from '../../assets/images/ForDelicate/Pricing_Checkmark_green-dark.svg';


const AddOns2 = () => {

    const [data] = useState(AddOnData2);

    const isMobile = window.innerWidth < 767;
 
  return (
    <>
    {data.map((item) => {
        return (
            <>
               <div className={styles.optionsFlex}>
                <p className={styles.AddOnDataTitle}>{item.name} &nbsp; 
                  {item.infoIcon && <img src={infoIcon}/>}
                </p>

                <div className={styles.AddOnDataCheckMarks2}>
                    <div className='col-lg-4 text-center'><img src={greencheck} className={styles.greenCheck} alt="" /></div>

                    {!isMobile && <div style={{width: '1px', height: '21px', backgroundColor: 'white'}}></div>}

                    <div className='col-lg-4 text-center'><img src={greencheck} className={styles.greenCheck} alt="" /></div>

                    {!isMobile && <div style={{width: '1px', height: '21px', backgroundColor: 'white'}}></div>}

                    <div className='col-lg-4 text-center'><img src={greencheck} className={styles.greenCheck} alt="" /></div>
                </div>
              </div>
            </>
        )
    })}
      
    </>
  )
}


export const FXAddOns2 = () => {

  const [data] = useState(AddOnData2);

return (
  <>
  {data.map((item) => {
      return (
          <>
             <div className={styles.optionsFlex}>
              <p className={styles.AddOnDataTitle}>{item.name} &nbsp; 
                {item.infoIcon && <img src={infoIcon}/>}
              </p>

              <div className={styles.AddOnDataCheckMarks}>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
              </div>
            </div>
          </>
      )
  })}
    
  </>
)
}


export const DelicateAddOns2 = () => {

  const [data] = useState(AddOnData2);

return (
  <>
  {data.map((item) => {
      return (
          <>
             <div className={styles.optionsFlex}>
              <p className={styles.delicateAddOnDataTitle}>{item.name} &nbsp; 
                {item.infoIcon && <img src={infoIcon}/>}
              </p>

              <div className={styles.AddOnDataCheckMarks}>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
                  <div className='col-lg-4 text-center'><img src={DarkGreenMark} className={styles.greenCheck} alt="" /></div>
              </div>
            </div>
          </>
      )
  })}
    
  </>
)
}

export default AddOns2
