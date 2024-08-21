import React, { useState, useRef, createContext } from 'react'
import styles from './HuluPress.module.css'
import greenrightarrow from '/src/assets/images/greenrightarrow.svg'
import Navbar from '../../src/Components/Navbar/Navbar'
import SmallFooter from '../../src/Components/SmallFooter/SmallFooter'
import { HuluPressSectionHeading } from '../../src/Components/h1/h1'
import LatestCards from '../../src/Components/LatestSectionCards/LatestCards'
import OriginalsCard from '../../src/Components/OriginalsCard/OriginalsCard'
import HuluPressCarousel from '../../src/Components/HuluPressCarousel/HuluPressCarousel'


export const ModalContext = createContext();


const HuluPress = () => {
  
    const [modal, setModal] = useState(true);
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(true)
    }

    const hideHandler = () => {
        setShow(false)
    }


    const [showLatest, setShowLatest] = useState(false);

    
    const showHandlerLatest = () => {
        setShowLatest(true)
    }

    const hideHandlerLatest = () => {
        setShowLatest(false)
    }


    // FOR ORIGINALS SCROLLER 
    const originalScroller = useRef();
    let scrollPositionOriginal = 0

    const slideForward = () => {
        if(scrollPositionOriginal < 0) {
            scrollPositionOriginal += 12.5
        } 
        originalScroller.current.style.transform = `translateX(${scrollPositionOriginal}%)`
    }

    const slideBackward = () => {
        if(scrollPositionOriginal > -40) {
            scrollPositionOriginal -= 12.5
        } 
        originalScroller.current.style.transform = `translateX(${scrollPositionOriginal}%)`
    }


    // FOR LATEST SCROLLER 
    const latestScroller = useRef();
    let scrollPositionLatest = 0

    const slideFront = () => {
        if(scrollPositionLatest < 0) {
            scrollPositionLatest += 10.5
        } 
        latestScroller.current.style.transform = `translateX(${scrollPositionLatest}%)`
    }

    const slideBack = () => {
        if(scrollPositionLatest > -50) {
            scrollPositionLatest -= 10.5
        } 
        latestScroller.current.style.transform = `translateX(${scrollPositionLatest}%)`
    }


  return (
    <>
        <ModalContext.Provider value={{modal, setModal}}><Navbar /></ModalContext.Provider>

       {/* CAROUSEL  */}
          <HuluPressCarousel />
        {/* CAROUSEL ENDS*/}


            {/* ORIGINALS SECTION STARTS*/}

        <div className={styles.Originals}>

            <div className={styles.OriginalHeader} onMouseEnter={showHandler} onMouseLeave={hideHandler}>
                <span className={styles.heading} >Hulu Originals</span>
                <h3 className={`${styles.subheading} ${show? styles.subheadingActive : ''}`}>Explore All</h3>
                <img src={greenrightarrow} className={styles.chevron} />
            </div>

        <div className={styles.originalCarousel}>

        <svg onClick={slideForward} className={styles.arrowLeft2} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 46 0)"><path fill="#FFF" d="M23,0 C35.7025492,0 46,10.2974508 46,23 C46,35.7025492 35.7025492,46 23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 Z M21.7692308,13 L19,15.9032258 L25.7692308,22.6774194 L19,30.0967742 L21.7692308,33 L31,22.6774194 L21.7692308,13 Z" opacity=".8"></path><polygon fill="#151515" points="0 2.903 2.925 0 12.675 9.677 2.925 20 0 17.097 7.15 9.677" transform="translate(19 13)"></polygon></g></svg>

        <div className={styles.originalScroller} ref={originalScroller}>
                <OriginalsCard />
        </div>

        <svg onClick={slideBackward} className={styles.arrowRight2} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M23,0 C35.7025492,0 46,10.2974508 46,23 C46,35.7025492 35.7025492,46 23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 Z M21.7692308,13 L19,15.9032258 L25.7692308,22.6774194 L19,30.0967742 L21.7692308,33 L31,22.6774194 L21.7692308,13 Z" opacity=".8"></path><polygon fill="#151515" points="0 2.903 2.925 0 12.675 9.677 2.925 20 0 17.097 7.15 9.677" transform="translate(19 13)"></polygon></g></svg>
        
        </div>

        </div>

             {/* ORIGINALS SECTION ENDS*/}

             {/* LATEST NEWS SECTION STARTS */}
        
        <div className={styles.Latest}>

            <div className={styles.latestHeader} style={{display: 'inline-flex', alignItems: 'center', cursor: 'pointer'}}  onMouseOver={showHandlerLatest} onMouseOut={hideHandlerLatest}>
                <HuluPressSectionHeading>Latest News</HuluPressSectionHeading> 
                <h3 className={`${styles.latestSubheading} ${showLatest ? styles.latestSubheadingActive : ''}`}>Explore All</h3>
                <img src={greenrightarrow} className={styles.chevron} />
            </div>
    
            <div className={styles.latestnewsCarousel}>

            <svg onClick={slideFront} className={styles.arrowLeft3} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 46 0)"><path fill="#FFF" d="M23,0 C35.7025492,0 46,10.2974508 46,23 C46,35.7025492 35.7025492,46 23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 Z M21.7692308,13 L19,15.9032258 L25.7692308,22.6774194 L19,30.0967742 L21.7692308,33 L31,22.6774194 L21.7692308,13 Z" opacity=".8"></path><polygon fill="#151515" points="0 2.903 2.925 0 12.675 9.677 2.925 20 0 17.097 7.15 9.677" transform="translate(19 13)"></polygon></g></svg>
            
            <div className={styles.latestScroller} ref={latestScroller}>
               <LatestCards />
            </div>

            <svg onClick={slideBack} className={styles.arrowRight3} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M23,0 C35.7025492,0 46,10.2974508 46,23 C46,35.7025492 35.7025492,46 23,46 C10.2974508,46 0,35.7025492 0,23 C0,10.2974508 10.2974508,0 23,0 Z M21.7692308,13 L19,15.9032258 L25.7692308,22.6774194 L19,30.0967742 L21.7692308,33 L31,22.6774194 L21.7692308,13 Z" opacity=".8"></path><polygon fill="#151515" points="0 2.903 2.925 0 12.675 9.677 2.925 20 0 17.097 7.15 9.677" transform="translate(19 13)"></polygon></g></svg>
            </div>
    
        </div>


                 {/* FOOTER  */}

        <SmallFooter />

                        {/* FOOTER  ENDS*/}

                        {/* SCROLL TO TOP FLOAT BUTTON */}
{/* 
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
		<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'strokeDashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '21.2863'}}></path>
	   </svg> */}

        


    </>
  )
}

export default HuluPress