import React, { useState,useCallback } from 'react'
import { LatestCardsData as data } from './LatestCardsData'
import styles from './LatestCards.module.css'

const LatestCards = () => {

const [items, setItems] = useState(
    data.map((item) => ({
      ...item,
      show: false,
    }))
  );

  const handleMouseEnter = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, show: true } : item
      )
    );
  }, []);
  
  const handleMouseLeave = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, show: false } : item
      )
    );
  }, []);


  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={styles.latestNewsCards} onMouseOver={() => handleMouseEnter(item.id)} onMouseOut={() => handleMouseLeave(item.id)}>
          <div className={styles.imageBox}>
            <img src={item.imgSrc} className={styles.latestnewsImg} />
          </div>
          <div className={styles.cardText}>
            <h4 className={styles.latestcardDate}>{item.date}</h4>
            <p className={styles.latestcardDesc}>{item.desc}</p>
          </div>
          <span className={`${styles.greenline} ${item.show ? styles.greenlineActive: styles.greenline}`}></span>
        </div>
        
      ))}
    </>
  );
};


export default LatestCards