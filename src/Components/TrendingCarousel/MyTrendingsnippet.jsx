import React, { useState } from 'react'
import styles from './Trending.module.css'


const MyTrendingsnippet = ({imgSrc, overlay, titleImg, desc, genre}) => {

  const [show, hide] = useState(false);

  const showInfo = () => {
      hide(true)
  }

  const hideInfo = () => {
      hide(false)
  } 

  return (
    <>
    <div className={styles.nowStreamingCard} onMouseEnter={() => showInfo()} onMouseLeave={() => hideInfo()}>
                <img src={imgSrc} className={styles.windowimage} />
          <span className={styles.windowOverlay} style={{ background: overlay.background }}></span>


          <div className={`${styles.titleWindow} ${show? styles.titleWindowActive : ''}`}>
              <img src={titleImg}/>
          </div>

            <span className={show ? styles.descActive : styles.desc}>{desc}</span>

            <p className={styles.streaminggenre}>{genre}</p>

        <span className={styles.rectangle}></span>
    </div>
    </>
  )
}

export default MyTrendingsnippet



// ONLY FOR SERIES //
export const SeriesSnippet = ({title, img, genre}) => {

const [activeCard, setActiveCard] = useState(false);

const handleMouseOver = () => {
  setActiveCard(true)
}

const handleMouseOut = () => {
  setActiveCard(false)
} 

return (
  <>
    <div className={styles.cardContainer}>
       <div className={activeCard ? styles.imgContainerActive : styles.imgContainer} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={img} alt="" className={styles.actualImg}/>
          <span className={activeCard? styles.arrowImgActive : styles.arrowImg}>
            <svg width="60px" height="60px" viewBox="0 0 60 60" class="cu-button-detail"><circle fill-opacity="0.2" cx="30" cy="30" r="29" stroke="#FFFFFF" stroke-width="1.5"></circle><g transform="translate(16.071429, 17.142857)" fill-rule="nonzero" fill="#FFFFFF"><path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path></g></svg>
          </span>
       </div>
    
       <div className={styles.cardContext}>
          <p className={styles.title}>{title}</p>
          <p className={styles.genre}>{genre}</p>
       </div>
    </div>
  </>
)
}