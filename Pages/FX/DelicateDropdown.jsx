import React, { useState, useEffect } from 'react'
import styles from './DelicateDropDown.module.css';
import DownArrow from '../../src/assets/images/Down_Arrow.svg'
import FXCORNER from '../../src/assets/images/fxcorner.webp';


const DelicateDropDown = ({series, setSeries, activeSeries, setActiveSeries}) => {
    
    const [isActive, setIsActive] = useState(false);
    const options= ['Delicate', 'NYC', 'Double Feature', '1984', 'Apocalypse', 'Cult', 'Roanoke', 'Hotel', 'Freak Show', 'Coven', 'Asylum', 'Murder House'];
    const [loading, setLoading] = useState(false);
    const [hovered, setHovered] = useState({});


    const handleSelect = async (option) => {
        setSeries(option);
        setIsActive(false);
        try {
            const response = await fetch(`http://localhost:5000/api/data/series/${option}`, {
            method: 'GET',
        });
        console.log('Response status code:', response.status);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          if(response.ok) {
            const data = await response.json();
            console.log('Data', data);
            setActiveSeries(data.episodes);
          } else {
            console.error('Error fetching data:', response.status);
          }
        } catch (err) {
            console.log(err)
        }
    };

    
    useEffect(() => {
    if (series) {
      handleSelect(series);
    }
    }, [series]);


    useEffect(() => {
    if (!activeSeries && series) {
      handleSelect(series);
    }
    }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.seriesContainer} onClick={() => setIsActive(!isActive)}>
        {series ? series : 'Delicate'}
        <img src={DownArrow} alt="" className={isActive ? styles.arrowActive : styles.arrow} />
        {isActive && (
          <div className={styles.seriesDropdownContent}>
            {options.map((option, index) => {
              return (
                <p key={index} className={option === series ? styles.seriesDropdownItemActive : styles.seriesDropdownItem} onClick={() => {handleSelect(option)}}>
                  {option}
                </p>
              );
            })}
          </div>
        )}
      </div>
      
      {activeSeries && (
        <div className={styles.delicateWindow}>
          {activeSeries.map((episode) => {
            return (
            <div className={styles.card}
            onMouseOver={() => setHovered({ ...hovered, [episode.episode]: true })} 
            onMouseOut={() => setHovered({ ...hovered, [episode.episode]: false })}>
              <div key={episode.episode} className={hovered [episode.episode] ? styles.imgContainerActive : styles.imgContainer}>
                <img src={episode.img} alt="" className={styles.thumbnail} />
                <img className={styles.fxlogo} src={FXCORNER} alt="" />
              </div>
              <div className={styles.cardContext}>
                <p className={styles.episodeno}>{episode.episode}</p>
                <p className={styles.title}>{episode.title}</p>
                <p className={styles.desc}>{episode.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default DelicateDropDown;
