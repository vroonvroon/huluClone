import React, { useState, useEffect } from 'react'
import styles from '../Dropdowns/Dropdown.module.css'
import errorIcon from '/src/assets/images/error-icon.svg'


const Year = ({user, setUser}) => {
    
    const [isActive, setIsActive] = useState(false);
    const options= ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'];
    const [yearSetter, setYearSetter] = useState(false);
    const [year, setYear] = useState();

    
    const handleSelect = (option) => {
        setUser({
          ...user,
          birthdate: {
            ...user.birthdate,
            year: option
          }
        });
        setYear(option);
        setIsActive(false);
    }


  return (
    <>
    <div className={styles.mainContainer}>
        <div name='year' className={year ? styles.yearDropdown : styles.yearDropdownError} onClick={(e) => setIsActive(!isActive)}>{year ? year : 'Year'}
                {isActive && (<div className={styles.yearDropdownContent}>
                    {options.map((option) => (
                    <div onClick={() => {
                        handleSelect(option);
                        console.log("year", option);
                        setYear(option); 
                        setIsActive(false); 
                    }} 
                        className={styles.yearDropdownItem}> {option} 
                    </div> 
                    ))}  
                </div>
                )}
        </div>
        {!year && <div className={styles.errorContainer}>
            <img src={errorIcon} alt="" />
            <p className={styles.errorText}>Required.</p>
        </div>}
    </div>
    </>
  )
};


export const Year2 = ({value, name, user, setUser}) => {
    
  const [isActive, setIsActive] = useState(false);
  const options= ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'];
  const [yearSetter, setYearSetter] = useState(false);
  const [year, setYear] = useState(value);

  
  const handleSelect = (option) => {
      setUser({
        ...user,
        birthdate: {
          ...user.birthdate,
          year: option
        }
      });
      setYear(option);
      setIsActive(false);
  }

  useEffect(() => {
    setYear(value);
  }, [value]);


return (
  <>
  <div className={styles.mainContainer}>
      <div name='year' className={year ? styles.yearDropdown : styles.yearDropdownError} onClick={(e) => setIsActive(!isActive)}>{year ? year : 'Year'}
              {isActive && (<div className={styles.yearDropdownContent}>
                  {options.map((option) => (
                  <div onClick={() => {
                      handleSelect(option);
                      console.log("year", option);
                      setYear(option); 
                      setIsActive(false); 
                  }} 
                      className={styles.yearDropdownItem}> {option} 
                  </div> 
                  ))}  
              </div>
              )}
      </div>
      {!year && <div className={styles.errorContainer}>
          <img src={errorIcon} alt="" />
          <p className={styles.errorText}>Required.</p>
      </div>}
  </div>
  </>
)
};

export default Year;