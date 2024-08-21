import React, { useState, useEffect } from 'react'
import styles from './DelicateDropDown.module.css';
import DownArrow from '../../src/assets/images/Down_Arrow.svg'


const DelicateDropDown = ({series, setSeries, activeSeries}) => {
    
    const [isActive, setIsActive] = useState(false);
    const options= ['Delicate', 'NYC', 'Double Feature', '1984', 'Apocalypse', 'Cult', 'Roanoke', 'Hotel', 'Freak Show', 'Coven', 'Asylum', 'Murder House'];


    const handleSelect = (option) => {
        setSeries(option);
        setIsActive(false);
        // fetchData(option); // fetch data when a title is clicked
    }


  return (
    <>
    <div className={styles.seriesContainer} onClick={() => setIsActive(!isActive)}>{series ? series : 'Delicate'}
        <img src={DownArrow} alt="" className={isActive? styles.arrowActive : styles.arrow}/>  

        {isActive && <div className={styles.seriesDropdownContent}>
        {options.map((option, index) => {
            return (
            <p key={index} className={option === series? styles.seriesDropdownItemActive : styles.seriesDropdownItem} onClick={() => {
                handleSelect(option);
            }}>
                {option}
            </p>
            )
        })}
    </div>}
    </div>
    {activeSeries && <div>
        {/* display the fetched data here */}
        <h2>{activeSeries.title}</h2>
        <p>{activeSeries.description}</p>
        {/* add more fields as needed */}
      </div>}
    </>
  )
};

export default DelicateDropDown;
