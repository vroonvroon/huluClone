import React, { useState, useEffect } from 'react'
import styles from './Dropdown.module.css'
import errorIcon from '/src/assets/images/error-icon.svg'


const Gender = ({user, setUser}) => {
    
    const [isActive, setIsActive] = useState(false);
    const options= ['Man', 'Woman', 'Non-binary', 'Prefer not to say'];
    const [gender, setGender] = useState();


    const handleSelect = (option) => {
        setUser({
          ...user,
            gender: option
        });
        setGender(option);
        setIsActive(false);
    }


  return (
    <>
    <div className={styles.mainContainer}>
        <div className={gender ? styles.genderdropdown : styles.genderDropdownError} onClick={() => setIsActive(!isActive)}>
          {gender ? gender : 'Select'}
        </div>
        {isActive && (
          <div className={styles.dropdownContent}>
            {options.map((option) => (
              <div onClick={() => {
                    handleSelect(option);
                    console.log(option);
                    setGender(option); 
                    setIsActive(false); 
                }}
                className={styles.dropdownItem}
              >
                {option}
              </div>
            ))}
          </div>
        )}
        {!gender && (
          <div className={styles.errorContainer}>
            <img src={errorIcon} alt="" />
            <p className={styles.errorText}>Required.</p>
          </div>
        )}
      </div>
    </>
  )
};



export const Gender2 = ({value, name, user, setUser}) => {
    
  const [isActive, setIsActive] = useState(false);
  const options= ['Man', 'Woman', 'Non-binary', 'Prefer not to say'];
  const [gender, setGender] = useState(value);

  const handleSelect = (option) => {
      setUser({
        ...user,
          gender: option,
      });
      setGender(option);
      setIsActive(false);
  }

  useEffect(() => {
    setGender(value);
  }, [value]);


return (
  <>
  <div className={styles.mainContainer2}>
      <div className={styles.genderdropdown2} onClick={() => setIsActive(!isActive)}>
        {gender ? gender : 'Select'}
      </div>
      {isActive && (
        <div className={styles.dropdownContent2}>
          {options.map((option) => (
            <div onClick={() => {
                  handleSelect(option);
                  console.log(option);
                  setGender(option); 
                  setTimeout(() => setIsActive(false), 100);
              }}
              className={styles.dropdownItem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {!gender && (
        <div className={styles.errorContainer}>
          <img src={errorIcon} alt="" />
          <p className={styles.errorText}>Required.</p>
        </div>
      )}
    </div>
  </>
)
};
    

export default Gender;