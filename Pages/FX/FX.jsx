import React, {useState, useRef} from 'react'
import styles from './FX.module.css'
import { Link } from 'react-router-dom'; 
import FXback from '../../src/assets/images/FXback.jpg'
import FXlogo from '../../src/assets/images/FXlogo.png'
import { FXTrialButton } from '../../src/Components/Buttons/Buttons';
import FXInfo from './FXInfo';


const FX = () => {

    // FOR NAVBAR 
    const [stickyNav, setStickyNav] = useState(false);
    const [endOfHero, setendOfHero] = useState(false);


    // FOR SLIDES TO CHANGE
    const slider = useRef();
    let tx = 0;

    const slideBack = () => {
        if(tx > -50) {
            tx -=33.3;
        } 
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideFront= () => {
        if(tx < 0) {
            tx +=33.3;
        } 
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <>
    <div>
       {/* NAV & HERO SECTION STARTS  */}
       <div className={styles.heroSectionContainer}>
            <div className={styles.heroSection}>
                <div className={`${styles.nav} ${stickyNav? styles.navActive : ''}` }>
                    <img src={null} className={styles.logo}/>
                    <div className={`${styles.CTAButtons}`}>
                        <Link to='/account'>
                            <span className={`${styles.getDeal} ${endOfHero? styles.getDealActive : ''}`}>GET THIS DEAL</span>
                        </Link>
                        <p style={{width: '120px', textAlign: 'center'}}>LOG IN</p>
                    </div>
                </div>
            
                <img src={FXback} className={styles.hero} />
                <span className={styles.overlay}></span>
            </div> 
            <div className={styles.heroBanner}>
                <img src={FXlogo} style={{width: '325px'}} />
                <p className={styles.header}>Students: Get Hulu For Just $1.99/Month</p>
                <p style={{fontSize: '24px', fontWeight: '500', color: 'white',  width: '650px', textAlign: 'center', lineHeight: '28px'}}>
                The official streaming home of FX, with 60+ highly acclaimed shows as well as new originals you can only stream here.
                </p>
                <FXTrialButton>START YOUR FREE TRAIL</FXTrialButton>
            </div>
        </div>

        {/* NAV & HERO SECTION ENDS  */}
    
     <div className={styles.packageintro}>
        <div className={styles.heroOverlay}></div>
     </div>

      <p>Now Streaming</p>
      <p>Watch past and current seasons of acclaimed and award-winning FX series, including <i>Shōgun, The Patient, The Bear, The Old Man, American Horror Story, Snowfall, American Horror Stories, Dave, Reservation Dogs, It's Always Sunny in Philadelphia, Mayans MC, Fargo, What We Do in The Shadows, A Teacher, and Archer.</i>
      </p>


      {/* /// CARD CAROUSEL STARTS HERE */}

      <div className={styles.verticalscroll}>
            <p style={{paddingLeft: '80px', fontWeight: '700', fontSize: '18px', letterSpacing: '0.8px', marginBottom: '10px'}}>FEATURED TITLES: ALL SEASONS & EPISODES AVAILABLE</p>

       
        <div className={styles.scrollbtns}>
            {/* {LEFT BUTTON}  */}
            <svg onClick={slideFront} className={styles.scrollbuttonl}viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 27.92l-9.2 9.2-9.2-9.2" strokeWidth="2" stroke="#868D9B"></path></g></svg>
        </div>
     

        <div className={styles.scrollwindowAll}>

            <div ref={slider} className={styles.scrollWindows} >

                {/* {SCROLL WINDOW STARTS HERE}  */}
            <div className={styles.windows}>
                <FXInfo />
            </div>
            </div>
                {/* {SCROLL WINDOW ENDS HERE}  */}
            </div>

                {/* {RIGHT BUTTON}  */}

            <svg onClick={slideBack} className={styles.scrollbuttonr} viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 33.92l-9.2 -10.2-9.2 10" strokeWidth="2" stroke="#868D9B"></path></g></svg>

        </div>

    </div>
    </>
  )
}

export default FX;