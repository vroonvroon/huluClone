import React,{ useState, useRef } from 'react'
import { SlidesData } from '../SlidesData';
import styles from '../Slides.module.css'



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


      <div className={styles.slidecontentActive}>

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