import React, { useState, useCallback } from 'react'
import styles from './OriginalsCard.module.css'
import { OriginalsCardData as data} from './OriginalsCardData'


const OriginalsCard = () => {

  // const [data, setData] = useState(OriginalsCardData);


  const [items, setItems] = useState(
    data.map((item) => ({
      ...item,
      show: false,
    }))
  );

  const scaleUp = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, show: true } : item
      )
    );
  }, []);
  
  const scaleNorm = useCallback((id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, show: false } : item
      )
    );
  }, []);


  return (
    <>
    {items.map((item) => {
          return (
            <>
            <div className={styles.originalCards} onMouseEnter={() => scaleUp(item.id)} onMouseOut={() => scaleNorm(item.id)}>
                <img src={item.img} className={styles.originalsImg}/> 
                    <div className={styles.overlay}></div>
                        <div className={styles.originalsCardText}>
                                <p className={styles.header}>{item.heading}</p>
                        </div>
                    <span className={item.show ? styles.lineActive: styles.line}></span>
            </div>
        </>
       )
    })}
    </>
  )
}

export default OriginalsCard