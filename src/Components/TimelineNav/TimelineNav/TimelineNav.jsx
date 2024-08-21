import React, {useState, createContext} from 'react'
import styles from './TimelineNav.module.css'

export const TimelineContext = createContext();

export const TimelineNav = () => {
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

    // Show Year on hover
    const [activeTimelineNav, setActiveTimelineNav] = useState(0);

    // Set timeline on click
    const [selectedYear, setSelectedYear] = useState(1);
 
    // TO SET THE SAME SLIDE CORRESPONDING TO THE TIMELNE BOXES
    const [currentslide, setCurrentSlide] = useState(0);

  return (
    <>
     <TimelineContext.Provider value={{currentslide, setCurrentSlide}}>
        {TimelineNavDates.map((item, index) => {
            return (
            
                    <div className={styles.frame} key={item.id}>    
                        <div className={`${styles.yearBox} ${activeTimelineNav === item.id? styles.ActiveYearBox : ''}`}>
                        <p className={styles.years}>{item.year}</p>
                        <span className={styles.smallTri}></span>
                        
                    </div>

                    <div className={`${styles.timeboxContainer} ${activeTimelineNav === item.id ? styles.activeTimelineNav : ""} ${currentslide === index ? styles.activeTimelineNav: ''}`}>
                        <span className={`${styles.timelineBox} ${activeTimelineNav === item.id ? styles.activeTimelineNav : ""} ${selectedYear === item.id ? styles.selectedTimelineNav : ''}`} 
                        onClick={() => setSelectedYear(item.id)} onMouseEnter={() => setActiveTimelineNav(item.id)}
                        onMouseOut={() => setActiveTimelineNav(0)}>
                        </span>
                    </div>
                    </div>
            
            )
        })}  
     </TimelineContext.Provider>    
    </>
  )
}

export default TimelineNav