import React, { useState, useEffect } from 'react'
import styles from '../Dropdowns/Dropdown.module.css'
import errorIcon from '/src/assets/images/error-icon.svg'


const Days = ({user, setUser}) => {
    
    const [isActive, setIsActive] = useState(false);
    const options= ['31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
    const [days, setDays] = useState();


    const handleSelect = (option) => {
        setUser({
          ...user,
          birthdate: {
            ...user.birthdate,
            day: option
          }
        });
        setDays(option);
        setIsActive(false);
    }
  

  return (
    <>
    <div className={styles.mainContainer}>
        <div name='day' className={days ? styles.daysDropdown :  styles.daysDropdownError } onClick={(e) => setIsActive(!isActive)}>{days ? days : 'Days'}
                {isActive && (<div className={styles.daysDropdownContent}>
                    {options.map((option) => (
                    <div onClick={() => {
                        handleSelect(option);
                        console.log("day", option);
                        setDays(option);
                        setIsActive(false); 
                    }} 
                        className={styles.daysDropdownItem}> {option} 
                    </div> 
                    ))} 
                </div>
                )}
        </div>
        {!days && <div className={styles.errorContainer}>
            <img src={errorIcon} alt="" />
            <p className={styles.errorText}>Required.</p>
        </div>}
    </div>
    </>
  )
};

export const Days2 = ({value, name, setUser, user}) => {

    console.log(`Day component: value prop = ${JSON.stringify(value)}`);
    
  const [isActive, setIsActive] = useState(false);
  const options= ['31', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
  const [days, setDays] = useState(value);


  const handleSelect = (option) => {
      setUser({
        ...user,
        birthdate: {
          ...user.birthdate,
          day: option
        }
      });
      setDays(option);
      setIsActive(false);
  }

  useEffect(() => {
    setDays(value);
  }, [value]);

return (
  <>
  <div className={styles.mainContainer}>
      <div name='day' className={days ? styles.daysDropdown :  styles.daysDropdownError } onClick={(e) => setIsActive(!isActive)}>{days ? days : 'Days'}
              {isActive && (<div className={styles.daysDropdownContent}>
                  {options.map((option) => (
                  <div onClick={() => {
                      handleSelect(option);
                      console.log("day", option);
                      setDays(option);
                      setIsActive(false); 
                  }} 
                      className={styles.daysDropdownItem}> {option} 
                  </div> 
                  ))} 
              </div>
              )}
      </div>
      {!days && <div className={styles.errorContainer}>
          <img src={errorIcon} alt="" />
          <p className={styles.errorText}>Required.</p>
      </div>}
  </div>
  </>
)
};

export default Days;