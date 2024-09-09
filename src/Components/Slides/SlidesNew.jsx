import React, {useState, useRef, useEffect} from 'react'
import { SlidesData } from './SlidesData'
import { WelcomePlansCarouselTitle } from '../h1/h1';
import styles from './SlidesNew.module.css'

const SlidesNew = () => {

    const headers= [
      {id: 1, name: 'LIVE SPORTS'},
      {id: 1, name: 'BREAKING NEWS'},
      {id: 1, name: 'BIGGEST EVENTS'},
    ]

    const [data] = useState(SlidesData);
    const [contentData] = useState(SlidesData);
    const [currentTab, setcurrentTab] = useState(0);
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineLeft, setUnderlineLeft] = useState(0);
    

    const navHeadersRef = useRef([]);
    const bluIndicatorRef = useRef(null);


    useEffect(() => {
      const updateUnderlinePosition = () => {
        const activeTab = navHeadersRef.current[currentTab];
        const underline = bluIndicatorRef.current;
    
        if (activeTab && underline) {
          setUnderlineWidth(activeTab.offsetWidth);
          setUnderlineLeft(activeTab.offsetLeft);
        }
      };
    
      updateUnderlinePosition();
    
      window.addEventListener('resize', updateUnderlinePosition);
    
      return () => {
        window.removeEventListener('resize', updateUnderlinePosition);
      };
    }, [currentTab]);


  return (
    <>
    <div className={styles.section3}>
        <div className={styles.sectionSlides}>

      {/* SLIDES  */}

      <div className={styles.slidesContainer}>
        {data.map((slide, index) => 
            <div className={currentTab === index ? styles.activeSlide : styles.slides}>
                <img className={styles.slideImages} src={slide.img} alt="" />
                <img src={slide.img2} alt="" className={styles.image2} />
            </div>
        )}
      </div>

      {/* TABS & CONTENT & CHANNEL-LIST*/}

    <div className={styles.tabandSlideGrp}>
      <div className={styles.tabs}>
        <div className={styles.tabContainer}>
          {headers.map((header, index) => {
            return (
              <p
                key={index}
                ref={(el) => (navHeadersRef.current[index] = el)}
                onClick={() => setcurrentTab(index)}
                className={currentTab === index ? styles.activeTab : styles.tab}
              >
                {header.name}
              </p>
            );
          })}
                  <span id="shifter" className={styles.underline} ref={bluIndicatorRef} style={{
                  width: `${underlineWidth}px`,
                  left: `${underlineLeft}px`,
                }}></span>
        </div>
      </div>

  
      <div className={styles.contentSection}>
        {contentData.map((slide, index) => {
            return (
            <>
            <div className={currentTab === index ? styles.slideContentActive : styles.slideContent}>
                <WelcomePlansCarouselTitle>{slide.header}</WelcomePlansCarouselTitle>
                <p className={styles.description}>{slide.description}</p>

                <div className={styles.channelinfoGrp}>
                  <div className={styles.channelsList}>
                  {slide.channels.map((channel, index) => {
                      return (
                      <>
                          <div className={styles.channelBackground} key={index}>
                          <img src={channel} alt="" className={styles.channelImg} />
                          </div>
                      </>
                      )
                  })}
                  </div>
                </div>

            </div>
            </>
            )   
        }) 
        }
      </div>

    </div>

       </div>
    </div>
    </>
  )
}

export default SlidesNew