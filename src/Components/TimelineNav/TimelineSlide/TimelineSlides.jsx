import React, { useState, useEffect, useRef } from 'react'
import { TimelineSlidesData } from './TimelineSlidesData';
import styles from './TimelineSlide.module.css'


const TimelineSlides = () => {

    // THE SECTION FOR TIMELINE NAVIGATION BOXES STARTS HERE 
    const TimelineNavDates = [
        { id: 1, year: 2007},
        { id: 2, year: 2008},
        { id: 3, year: 2009},
        { id: 4, year: 2010},
        { id: 5, year: 2011},
        { id: 6, year: 2011},
        { id: 7, year: 2015},
        { id: 8, year: 2015},
        { id: 9, year: 2016},
        { id: 10, year: 2017},
        { id: 11, year: 2017},
        { id: 12, year: 2018},
        { id: 13, year: 2019},
    ]

    // TO SET THE SAME SLIDE CORRESPONDING TO THE TIMELNE BOXES
    // const [currentslide, setCurrentSlide] = useState(0);

    // Show Year on hover
    const [activeTimelineNav, setActiveTimelineNav] = useState(0);
  
    // Set timeline on click
    // const [selectedYear, setSelectedYear] = useState(1);
    // THE SECTION FOR TIMELINE NAVIGATION BOXES ENDS HERE 


 
    // THE SECTION FOR TIMELINE SLIDES STARTS HERE 
    const [data] = useState(TimelineSlidesData);



    const [slide, setSlide] = useState(0);
    const sliderRef = useRef(); 

    const nextSlide = () => {
        setSlide((slide + 1) % data.length);
        sliderRef.current.style.transform = `translateX(${-(100 * ((slide + 1) % data.length))}%)`;
    }

    const previousSlide = () => {
        let newSlide = (slide - 1) % data.length;
        if (newSlide === -1) {
          newSlide = data.length - 1;
        }
        setSlide(newSlide);
        sliderRef.current.style.transform = `translateX(${-(100 * newSlide)}%)`;
      };

    // const previousSlide = () => {
    //     setSlide((slide) % data.length);
    //     sliderRef.current.style.transform = `translateX(${-(100 * ((slide - 1) % data.length))}%)`
    // }

    const goToSlide = (index) =>{
        setSlide(index);
        sliderRef.current.style.transform = `translateX(${-(100 * index)}%`;
    }
    


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
    }, 9000); 

    return () => {
        clearInterval(interval);
        };
    }, [slide]);

    

  return (
    <>
    <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
            <div className={styles.timelineBoxIndicatorsGrp}>
                <div className={styles.frameContainer}>
                {TimelineNavDates.map((item, index) => {
                    return (
                        <div className={styles.frame} key={item.id}>    
                            <div className={activeTimelineNav === item.id? styles.ActiveYearBox : styles.yearBox}>
                                <p className={styles.years}>{item.year}</p>
                                <span className={styles.smallTri}></span>
                            </div>

                            <div className={styles.timeboxContainer}>
                                <span className={`${slide === index ? styles.selectedTimelineNav : styles.timelineBox}
                                ${activeTimelineNav === item.id? styles.activeTimelineNav : styles.timelineBox}`} onClick={() => goToSlide(index)} onMouseEnter={() => setActiveTimelineNav(index + 1)}
                                onMouseOut={() => setActiveTimelineNav(0)}>
                                </span>
                            </div>
                        </div>         
        )
    })}   
                </div>
            </div>
        </div>
    </div>


     {/* SLIDES SECTION STARTS FROM HERE */}

    <div className={styles.timelineContent}>
        <div onClick={previousSlide} className={styles.previousChevron}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
        </div>

        <div className={styles.slides} ref={sliderRef}>    
            {data.map((item, index) => {
                return (
                    <div className={`${slide === index? styles.contentActive : styles.content}`}>
                        <img src={item.img} className={styles.timelineContentImgs}/>
                        <div className={styles.contenttext}>
                            <p className={styles.year}>{item.year}</p>
                            <h3>{item.title}</h3>
                            <h4>{item.desc}</h4>
                        </div>
                    </div>
                )
            })}
        </div> 

        <div onClick={nextSlide} className={styles.nextChevron}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>

    </div>
    </>
  )
}

export default TimelineSlides