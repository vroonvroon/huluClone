import React, { useEffect, useState, useRef } from 'react'
import styles from './CorporateDataWindow.module.css'
import { CorporateDataInfoWindow } from './CorporateDataInfoWindow'
import paidSubscribers from '/src/assets/images/Subscribers.jpg'
import TVHub from '/src/assets/images/TVHub.jpg'
import livechannels from '/src/assets/images/livechannels.jpg'
import offices from '/src/assets/images/offices.jpg'
import '@hanspeleman/rolling-number';


const CorporateDataWindow = () => {
    const [data] = useState(CorporateDataInfoWindow);


    // ANIMATION FOR INFO WINDOW ENTRY 
    const [animate, setAnimate] = useState(false);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);


    // ALL BOXES FOR INITIAL REVEAL //
    useEffect(() =>{
        if(window.addEventListener) {
            window.addEventListener('load', handleWindowLoad, true);
          }
          return () => {
            if (window.removeEventListener) {
              window.removeEventListener('load', handleWindowLoad, false);
            }
          };
    }, []);
        
          
    function handleWindowLoad() {
        setAnimate(true);
    }

          
    let animationStyle = {
      animation: `animateOpacity 1.2s ease-out ms forwards`,
      transition: '1.2s ease-out',
      transform: animate ? 'translateY(0%)' : 'translateY(30%)',
      opacity: animate ?  1 : 0,
    };

    useEffect(() => {
      if (animate) {
        setTimeout(() => {
          div1Ref.current.classList.add('animate');
        }, 0);
        setTimeout(() => {
          div2Ref.current.classList.add('animate');
        }, 500);
        setTimeout(() => {
          div3Ref.current.classList.add('animate');
        }, 1000);
        setTimeout(() => {
          div4Ref.current.classList.add('animate');
        }, 1500);
      }
    }, [animate]);
    

  return (
    <>
    <div className={styles.box}>

      <div className={styles.subscribers} ref={div1Ref} style={animationStyle}>
            <img src={paidSubscribers} alt="" className={styles.boxesImg}/>
          <div className={styles.counterInfo}>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800'}} value="50" duration="200" delay="5000"></rolling-number>
            <span style={{ fontSize: '50px', fontWeight: '800'}}>.</span>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800', display: 'inline-block'}} value="2" duration="500" delay="3000"></rolling-number>
            <span style={{ fontSize: '50px', fontWeight: '800'}}>M</span>
          </div>
          <p>Paid subscribers in the U.S. (as of March 2024)</p>
      </div>

      <div className={styles.subscribers} ref={div2Ref} style={animationStyle}>
          <img src={TVHub} alt="" className={styles.boxesImg}/>
          <div className={styles.counterInfo}>
          <rolling-number style={{ fontSize: '50px', fontWeight: '800'}} value="70" duration="2000" delay="1000"></rolling-number>
            <span style={{ fontSize: '50px', fontWeight: '800'}}>,</span>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800', display: 'inline-block'}} value="0" duration="2000" delay="1000"></rolling-number>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800', display: 'inline-block'}} value="0" duration="2000" delay="1000"></rolling-number>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800', display: 'inline-block'}} value="0" duration="2000" delay="1000"></rolling-number>
            <span style={{ fontSize: '50px', fontWeight: '800'}}>+</span>
          </div>
          <p>TV episodes and movies</p>
      </div>

      <div className={styles.subscribers} ref={div3Ref} style={animationStyle}>
          <img src={livechannels} alt="" className={styles.boxesImg}/>
          <div className={styles.counterInfo}>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800'}} value="95" duration="2000" delay="1000"></rolling-number>
            <span style={{ fontSize: '50px', fontWeight: '800'}}>+</span>
          </div>
          <p>Live channels</p>
      </div>

      <div className={styles.subscribers} ref={div4Ref} style={animationStyle}>
          <img src={offices} alt="" className={styles.boxesImg}/>
          <div className={styles.counterInfo}>
            <rolling-number style={{ fontSize: '50px', fontWeight: '800'}} value="7" duration="2000" delay="1000"></rolling-number>
          </div>
          <p>Offices across U.S.</p>
      </div>
      
    </div>
    </>
  )
}

export default CorporateDataWindow;