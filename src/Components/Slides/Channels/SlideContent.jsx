import React,{ useState, useRef } from 'react'
import { SlidesData } from '../SlidesData';
import styles from '../Slides.module.css'
import { WelcomePlansCarouselTitle } from '../../h1/h1';


const SlideContent = () => {

    const [channels] = useState(SlidesData);
    const [currentSlide, setCurrentSlide] = useState(1);

    const tabRef = useRef();

  return (
    
    <>
      <div className={styles.flexSlider}>   
        <div className={styles.tab} ref={tabRef}>
            <p className={`${currentSlide === 1? styles.tabActive : styles.disect}`} onClick={() => setCurrentSlide(1)}>LIVE SPORTS</p>
            <p className={`${currentSlide === 2? styles.tabActive : styles.disect}`} onClick={() => setCurrentSlide(2)}>BREAKING NEWS</p>
            <p className={`${currentSlide === 3? styles.tabActive :styles.disect}`} onClick={() => setCurrentSlide(3)}>BIGGEST EVENT</p>
        </div>
            <span className={styles.underline}></span>
     </div>

      {/* <div className={`${currentSlide === slide.id? styles.slidecontentActive : styles.slidecontent}`}> */}
      <div className={styles.slidecontentActive}>
                      {/* <WelcomePlansCarouselTitle>{slide.header}</WelcomePlansCarouselTitle>
                      <p className={styles.description}>{slide.description}</p> */}

                      {/* <Channels /> */}

                    <div className={styles.channelinfoGrp}>
                    <div className={styles.channelsList}>
                        {channels.map((channel, index) => {
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
        </div>
    </>
  )
}

export default SlideContent