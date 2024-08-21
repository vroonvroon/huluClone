import React, { useState, useEffect } from 'react';
import offices from '/src/assets/images/offices.jpg';
import styles from '../Offices/OfficesNumbers.module.css';

const Offices1 = () => {
  const officesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [officeRoll1, setOfficeRoll1] = useState(false);
  const [officeCount1, setOfficeCount1] = useState(0);

  let officeRollUpAnimation = {
    animation: `rollUp 1.2s ease-out forwards`,
    transition: '1.2s ease-out',
    transform: officeRoll1 ? 'translateY(-70%)' : 'translateY(100%)',
    opacity: officeRoll1 ? 1 : 0,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOfficeCount1((prevOfficeCount1) => {
        if (prevOfficeCount1 < 9) {
          return prevOfficeCount1 + 1;
        } else {
          clearInterval(intervalId);
          setOfficeRoll1(true);
          return prevOfficeCount1;
        }
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.offices}>
      <img src={offices} alt="" className={styles.boxesImg} />
      <div className={styles.counterInfo}>
        <div className={styles.numbersOnly}>
          <div className={styles.officeShizz} style={officeRollUpAnimation}>
            {officesArray.map((office, index) => (
              <p key={index} className={styles.thirdLine}>
                {office}
              </p>
            ))}
          </div>
        </div>
        <p>Offices across U.S.</p>
      </div>
    </div>
  );
};

export default Offices1;