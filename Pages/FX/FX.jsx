import React, {useState, useRef, useEffect, createContext } from 'react'
import styles from './FX.module.css'
import FXback from '../../src/assets/images/FXback.jpg'
import FXlogo from '../../src/assets/images/FXlogo.png'
import logo from '/src/assets/images/Hulu-Logo.png'
import { FXTrialButton } from '../../src/Components/Buttons/Buttons';
import FXInfo from './FXInfo';
import { SeriesCarousel } from '../../src/Components/TrendingCarousel/TrendingCarousel';
import { SeriesCarousel2 } from '../../src/Components/TrendingCarousel/TrendingCarousel2';
import { SeriesCarousel3 } from '../../src/Components/TrendingCarousel/TrendingCarousel3';
import { VideoModal } from '../../src/Components/Modal/Modal';
import Footer from '../../src/Components/Big Footer/Footer';



export const VideoContext = createContext();

const FX = () => {

    // FOR NAVBAR 
    const [stickyNav, setStickyNav] = useState(false);
    const [endOfHero, setendOfHero] = useState(false);
    const [video, setVideo] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
          const threshold = 50; 
          if (window.scrollY > threshold) {
            setStickyNav(true);
          } else {
            setStickyNav(false);
          }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
     }, []);


    useEffect(() => {
        const handleScroll = () => {
            const threshold = 620; 
            if (window.scrollY > threshold) {
            setendOfHero(true);
            } else {
            setendOfHero(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    
    // YOU MAY LIKE SETTINGS //
    // FOR SLIDES TO CHANGE
    const slider = useRef();
    let [tr, setTr] = useState(0);
    let [activeIndex, setActiveIndex] = useState(0);


    const slideFront = () => {
      if (activeIndex < 2) {
        setTr(tr -= 100);
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(2); 
      }
      console.log('next click', activeIndex);
      slider.current.style.transform = `translateX(${tr}%)`
    }

    const slideBack = () => {
      if (activeIndex > 0) {
        setTr(tr += 100);
        setActiveIndex(activeIndex - 1);
      }
      console.log('previous click', activeIndex);
      slider.current.style.transform = `translateX(${tr}%)`
    }


  return (
    <>
    <div>
       {/* NAV & HERO SECTION STARTS  */}
       <div className={styles.heroSectionContainer}>
            <div className={styles.heroSection}>
                <div className={`${styles.nav} ${stickyNav? styles.navActive : ''}` }>
                    <img src={logo} className={styles.logo}/>
                    <div className={`${styles.CTAButtons}`}>
                        <span className={`${styles.getDeal} ${endOfHero? styles.getDealActive : ''}`}>START YOUR FREE TRIAL</span>
                        <p className={styles.logInText}>LOG IN</p>
                    </div>
                </div>
            
                <img src={FXback} className={styles.hero} />
                <span className={styles.overlay}></span>
            </div> 
            <div className={styles.heroBanner}>
                <img src={FXlogo} style={{width: '230px'}} />
                <p style={{fontSize: '29px', fontWeight: '500', color: 'white',  width: '700px', textAlign: 'center', lineHeight: '28px'}}>
                The official streaming home of FX, with 60+ highly acclaimed shows as well as new originals you can only stream here.
                </p>
                <FXTrialButton>START YOUR FREE TRAIL</FXTrialButton>
            </div>
        </div>


        {/* NAV & HERO SECTION ENDS  */}
    
     <div className={styles.packageintro}>
        <div className={styles.heroOverlay}></div>
     </div>
     
    <div style={{textAlign: 'center', backgroundColor: '#f5f6f7', paddingInline: '40px', paddingBlock: '30px'}}>
      <p style={{fontSize: '46px', fontWeight: '500', marginBottom: '10px'}}>Now Streaming</p>
      <p style={{fontSize: '19px', paddingInline: '440px'}}>Watch past and current seasons of acclaimed and award-winning FX series, including <i>Shōgun, The Patient, The Bear, The Old Man, American Horror Story, Snowfall, American Horror Stories, Dave, Reservation Dogs, It's Always Sunny in Philadelphia, Mayans MC, Fargo, What We Do in The Shadows, A Teacher, and Archer.</i>
      </p>
    </div>


      {/* /// CARD CAROUSEL STARTS HERE */}
      <div className={styles.nowStreamingshows}>
            <p style={{paddingLeft: '80px', fontWeight: '600', fontSize: '22px', letterSpacing: '0.8px', marginBottom: '10px'}}>FEATURED TITLES: ALL SEASONS & EPISODES AVAILABLE</p>
     

        <div className={styles.scrollwindowAll}>
            <div ref={slider} className={styles.scrollWindows} >

            <div className={styles.verticalwindows}>
                <FXInfo />
            </div>
            </div>

        </div>

      </div>


      {/* // FX HULU SECTION  */}
      <div style={{marginTop: '50px', paddingBottom: '50px'}}>
          <p style={{paddingLeft: '80px', fontWeight: '600', fontSize: '22px', letterSpacing: '0.8px', marginBottom: '10px'}}>FX ON HULU</p>
    
          <div style={{position: 'relative'}}>
            {/* {LEFT BUTTON}  */}
            <svg onClick={slideBack} className={styles.scrollbuttonl}viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 27.92l-9.2 9.2-9.2-9.2" strokeWidth="2" stroke="#868D9B"></path></g></svg>


              <div className={styles.scrollwindowAll}>
                    <div ref={slider} className={styles.scrollWindows} >
                        <div className={`${styles.windows} ${activeIndex !== 0 ? styles.inactive : ''}`}>
                        <SeriesCarousel />
                        </div>

                        <div className={`${styles.windows} ${activeIndex !== 1 ? styles.inactive : ''}`}>
                        <SeriesCarousel2 />
                        </div>

                        <div className={`${styles.windows} ${activeIndex !== 2 ? styles.inactive : ''}`}>
                        <SeriesCarousel3 />
                        </div>
                    </div>     
              </div>

            {/* {RIGHT BUTTON}  */}
            <svg onClick={slideFront} className={styles.scrollbuttonr} viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 33.92l-9.2 -10.2-9.2 10" strokeWidth="2" stroke="#868D9B"></path></g></svg>
        </div>

      </div>



      <VideoContext.Provider value={{video, setVideo}}>{video && (<VideoModal />)}</VideoContext.Provider>

      {/* VIDEO SECTION  */}
      <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '1300px', margin: '100px auto', alignItems: 'center'}}>
        <div className={styles.imgBox} onClick={() => {setVideo(true); window.scrollTo({ top: 0, behavior: 'smooth' })}}>
         <img style={{position: 'absolute', top: '0px', left: '0px', height: '100%', width: '100%'}} src="/src/assets/images/ForDelicate/videostatic.jpg" alt="" />
        </div>

        <div style={{width: '480px'}} >
            <p style={{fontSize: '28px', fontWeight: '600', lineHeight: 'normal', marginBottom: '20px'}}>FX Series & Exclusive Originals Only on Hulu</p>
            <p style={{fontSize: '18px', color: 'rgb(57 59 66)', lineHeight: 'normal'}}>Stream exclusive Originals only on Hulu - including <em>Shōgun, The Patient, The Bear, Fleishman Is In Trouble, Kindred, American Horror Stories, Reservation Dogs, A Teacher, Devs, and Mrs. America</em>-- plus new seasons of all FX shows after they air on FX and FXX.</p>
        </div>

      </div>

      {/* FOOTER  */}


      <Footer />



    </div>
    </>
  )
}

export default FX;