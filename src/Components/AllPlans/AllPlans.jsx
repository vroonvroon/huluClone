import React, { useState } from 'react'
import styles from './AllPlans.module.css'
import { AllPlansData } from './AllPlansData'


const AllPlans = () => {

    const [data] = useState(AllPlansData);
  return (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.sub}>INCLUDED IN ALL PLANS</div>
                <div className={styles.header}>All The TV You Love</div>
                <div className={styles.headerInfo}>Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.
                </div>
            </div>
        </div>


      <div className={styles.gridContainer}>
        <div className={styles.tvLove}>
              {data.map((item) => {
                return (
                  <>
                    <div className={`${styles.gridWindow} position-relative`}>
                        <img src={item.img} alt="" className={styles.gridImg}/>
                        <span className={styles.overlay}></span>
                        <div className="overlay-info-tab position-absolute top-0 text-white p-3 d-flex flex-column gap-2">
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.title2}>{item.sub}</p>
                        </div>
                    </div>
               
                  </>
                )
              })}
        </div>
        <div class={styles.moreInfo}>Premium network add-ons available for an additional cost</div>
      </div>
    </>
  )
}

export default AllPlans