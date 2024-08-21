import React, {useState} from "react";
import styles from '../../../Pages/CreateAccount/Dropdowns/Dropdown';


const BirthdateDropdowns = ({ options, value, onChange, error, setError }) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = (option) => {
      onChange(option);
      setIsActive(false);
    };
  
    return (
      <div className={styles.mainContainer}>
        <div
          className={error ? styles.dropdownError : styles.dropdown}
          onClick={(e) => setIsActive(!isActive)}
        >
          {value ? value : 'Select'}
          {isActive && (
            <div className={styles.dropdownContent}>
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleClick(option)}
                  className={styles.dropdownItem}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        {error && (
          <div className={styles.errorContainer}>
            <img src={errorIcon} alt="" />
            <p className={styles.errorText}>Required.</p>
          </div>
        )}
      </div>
    );
  };
  
export default BirthdateDropdowns;