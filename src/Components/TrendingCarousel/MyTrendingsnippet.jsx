import React, { useState } from 'react'
import styles from './Trending.module.css'


const MyTrendingsnippet = ({imgSrc, overlay, titleImg, desc, genre}) => {

    const window = {
        position:'absolute', 
        bottom: '75px', 
        padding: '20px 16px 10px 16px', 
        color: 'white', zIndex: '98', 
        fontSize: '15px'
    }

    const windowSize = {
        width: '324px',
        height: '485px',
        borderRadius: '10px'
    }

    const titleWindow = {
      position: 'relative',
      top: '-106px',
      transition: 'all 0.3s',
    }

    const windowtitle = { 
      position: 'absolute',
      bottom: '10px',
      zIndex: '97',
      paddingInline: '16px',
    }


  const [show, hide] = useState(false);

  const showInfo = () => {
      hide(true)
  }

  const hideInfo = () => {
      hide(false)
  } 

  return (
    <>
    <div className={styles.scrollwindow} onMouseEnter={() => showInfo()} onMouseLeave={() => hideInfo()}>
        <div className={styles.window} >
                <img src={imgSrc} style={windowSize} />
        </div>
        <span className={styles.windowOverlay}></span>
        {/* <span style={{ background: overlay.background, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}></span> */}
        <div className={`${styles.titleWindow} ${show? styles.titleWindowActive : ''}`}>
            <img src={titleImg} style={windowtitle}/>
                <span className={show ? styles.descActive : styles.desc}>{desc}</span>
        </div>
            <p style={window}>{genre}</p>
        <span className={styles.rectangle}></span>
    </div>
    </>
  )
}

export default MyTrendingsnippet