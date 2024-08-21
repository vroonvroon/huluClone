import React, { useEffect, useState, useRef } from 'react'
import styles from '../Dropdowns/Dropdown.module.css'
import errorIcon from '/src/assets/images/error-icon.svg'


const Month = ({user, setUser}) => {
    
  const [isActive, setIsActive] = useState(false);
  const options= ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November', 'December']
  const [month, setMonth] = useState();


  const handleSelect = (option) => {
      setUser({
       ...user,
        birthdate: {
         ...user.birthdate,
          month: option
        }
      });
      setMonth(option);
      setIsActive(false);
  }


return (
  <>
  <div className={styles.mainContainer}>
      <div name='month' className={month? styles.monthDropdown : styles.monthDropdownError} onClick={(e) => setIsActive(!isActive)}>{month? month : "Month"}

              {isActive && (<div className={styles.monthDropdownContent}>
                  {options.map((option) => (
                  <div onClick={() => {
                      handleSelect(option);
                      console.log("month", option);
                      setMonth(option); 
                      setIsActive(false); 
                  }} 
                      className={styles.monthDropdownItem}> {option} 
                  </div> 
                  ))} 
              </div>
              )}
      </div>
      {!month && <div className={styles.errorContainer}>
          <img src={errorIcon} alt="" />
          <p className={styles.errorText}>Required.</p>
      </div>}
  </div>
  </>
)
};

export const Month2 = ({value, name, setUser, user}) => {
  
  // console.log(`Month component: value prop = ${JSON.stringify(value)}`);
    
  const [isActive, setIsActive] = useState(false);
  const options= ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November', 'December']
  const [month, setMonth] = useState(value);


  const handleSelect = (option) => {
      setUser({
       ...user,
        birthdate: {
         ...user.birthdate,
          month: option
        }
      });
      setMonth(option);
      setIsActive(false);
  }

  useEffect(() => {
    setMonth(value);
  }, [value]);


return (
  <>
  <div className={styles.mainContainer}>
      <div name='month' className={month? styles.monthDropdown : styles.monthDropdownError} onClick={(e) => setIsActive(!isActive)}>{month ? month : "Month"}

              {isActive && (<div className={styles.monthDropdownContent}>
                  {options.map((option) => (
                  <div onClick={() => {
                      handleSelect(option);
                      console.log("month", option);
                      setMonth(option); 
                      setIsActive(false); 
                  }} 
                      className={styles.monthDropdownItem}> {option} 
                  </div> 
                  ))} 
              </div>
              )}
      </div>
      {!month && <div className={styles.errorContainer}>
          <img src={errorIcon} alt="" />
          <p className={styles.errorText}>Required.</p>
      </div>}
  </div>
  </>
)
};

export default Month