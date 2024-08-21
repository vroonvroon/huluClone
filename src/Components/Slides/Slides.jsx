import React,{ useState, useEffect, useRef } from 'react'
import { SlidesData } from './SlidesData';
import styles from './Slides.module.css'
import { WelcomePlansCarouselTitle } from '../h1/h1';
import Channels from './Channels/Channels';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Slides = () => {

    const [data] = useState(SlidesData);
    const [currentSlide, setCurrentSlide] = useState(1);
    const [tabColor, tabsetColor] = useState(1);
    const [underlineLeft, setUnderlineLeft] = useState();
    const [underlineWidth, setUnderlineWidth] = useState();
    const [underline, setUnderline] = useState(1);
    const tabRef  = useRef(null);
    
  return (

    <>
                    {/* SLIDER TABS  */}

        <div className={styles.flexSlider}>   
          <div className={styles.tab} ref={tabRef}>
            <p className={`${currentSlide === 1? styles.tabActive : styles.disect}`} onClick={() => setCurrentSlide(1)}>LIVE SPORTS</p>
            <p className={`${currentSlide === 2? styles.tabActive : styles.disect}`} onClick={() => setCurrentSlide(2)}>BREAKING NEWS</p>
            <p className={`${currentSlide === 3? styles.tabActive :styles.disect}`} onClick={() => setCurrentSlide(3)}>BIGGEST EVENT</p>
          </div>
              <span className={styles.underline}></span>
        </div>

                              {/* SLIDER TABS END */}
      <div className={styles.sliderContainer}>
        <>
          {data.map((slide, index) => {
              return (
                <>
                                {/* SLIDES */}
                <div className={`${currentSlide === slide.id? styles.SlideContainerActive : styles.SlideContainer}`}>
                    <div className={styles.slides}>
                        <img src={slide.img} alt="" className={styles.image} />
                        <img src={slide.img2} alt="" className={styles.image2} />
                    </div>
                </div>

                              {/* SLIDES END*/}



                                {/* SLIDER CONTENT GRP  */}
              <div className={styles.ContentContainer}>
                <div className={`${currentSlide === slide.id? styles.slidecontentActive : styles.slidecontent}`}>
                        <WelcomePlansCarouselTitle>{slide.header}</WelcomePlansCarouselTitle>
                        <p className={styles.description}>{slide.description}</p>

                        {/* <Channels /> */}

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

                        <div className={styles.restrictions}>Live TV plan required. Regional restrictions, blackouts and additional terms apply. See details
                        </div>

                  
                                {/* SLIDER TABS ENDS  */}
                </div>  
              </div>

                                {/* SLIDER CONTENT GRP ENDS */}
                </>
              )
          }) 
        } 
        </>

            <span className={styles.slideOverlay}></span>
      </div>
    </>
  )
}

export default Slides