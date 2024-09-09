import React, {useEffect, useState, useRef} from 'react'
import styles from './Delicate.module.css'
import { FXTrialButton } from '../../../src/Components/Buttons/Buttons'
import delicatehorror from '../../../src/assets/images/delicateBG.webp';
import heroLogo from  '../../../src/assets/images/delicatehorror.webp'
import FXCORNER from '../../../src/assets/images/fxcorner.webp';
import DelicateDropDown from '../DelicateDropdown';
import { SeriesCarousel } from '../../../src/Components/TrendingCarousel/TrendingCarousel';
import { SeriesCarousel2 } from '../../../src/Components/TrendingCarousel/TrendingCarousel2'; 
import { SeriesCarousel3 } from '../../../src/Components/TrendingCarousel/TrendingCarousel3';
import { FXWelcomePlansCard2 } from '../../../src/Components/WelcomePlansCard/WelcomePlansCard';
import { DelicateWelcomePlansCard } from '../../../src/Components/WelcomePlansCard2/WelcomePlansCard2';
import DownArrow from '../../../src/assets/images/Down_Arrow.svg'
import { DelicateAddOns } from '../../../src/Components/AddOns1/AddOns1';
import { DelicateAddOns2 } from '../../../src/Components/AddOns2/AddOns2';
import { DelicateFeatures1 } from '../../../src/Components/FeaturesList1/Features1';
import { DelicateFeatures2 } from '../../../src/Components/FeaturesList2/Features2';
import hulu from '/src/assets/images/Hulu-Logo.png'
import disneyesspnlogodark from '../../../src/assets/images/ForDelicate/huludisneyespndark.svg'
import huludisneyespn from '../../../src/assets/images/huludisneyespnwhite.png'
import Details from '../Pages/Details';
import Extra from '../Pages/Extra';
import Series from '../Pages/Series';
import Footer from '../../../src/Components/Big Footer/Footer';



const Delicate = () => {

  const [loading, setLoading] = useState(false);
  const [activeSeries, setActiveSeries] = useState([]);
  const [series, setSeries] = useState('Delicate');

  
  // NAVIGATION HEADERS SETTINGS //
  const navHeadersRef = useRef([]);
  const bluIndicatorRef = useRef(null);
  const [activePage, setActivePage] = useState('EPISODES');

  const handleNavHeaderClick = (page) => {
    setActivePage(page);
  };


  const handleIndicatorMove = (navHeader) => {
    const width = navHeader.offsetWidth;
    const left = navHeader.offsetLeft;
  
    bluIndicatorRef.current.style.width = `${width}px`;
    bluIndicatorRef.current.style.left = `${left}px`;
  };


  useEffect(() => {
    const navHeaders = navHeadersRef.current;
  
    if (navHeaders) {
      navHeaders.forEach((navHeader) => {
        const clickHandler = () => handleIndicatorMove(navHeader);
        navHeader.addEventListener('click', clickHandler);
  
 
        navHeader.clickHandler = clickHandler;
      });
    }
  
    return () => {
      if (navHeaders) {
        navHeaders.forEach((navHeader) => {
          if (navHeader && navHeader.clickHandler) {
            navHeader.removeEventListener('click', navHeader.clickHandler);
          }
        });
      }
    };
  }, []);
  
  
  // FOR PLANS, FEATURES, ADDONS 
const [activeTab, setActiveTab] = useState(1);
const [showAddons1, setshowAddons1] = useState(true);
const [showAddons2, setshowAddons2] = useState(false);
const [showPlan, setshowPlan] = useState(true);


const changePlans = () => {
   setshowPlan(!showPlan);
}


useEffect(() => {
  changePlans();
}, [activeTab]);



const [show, setShow] = useState(false);

const toggleAddons = () => {
  setShow(!show);
}


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


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className={styles.back}>

      {/* NAVBAR & HERO SECTION STARTS */}
    <div className={styles.heroSectionContainer}>
        <div className={styles.backgroundContainer}>
          <img src={delicatehorror} alt="" className={styles.heroBackground}/>
          <span className={styles.gradientlayer1}></span>
          <span className={styles.gradientlayer2}></span>
          <span className={styles.gradientlayer3}></span>
          <span className={styles.gradientlayer4}></span>
          <span className={styles.gradientlayer5}></span>
        </div>


          {/* // NAVBAR // */}
          <div className={styles.navbar} style={{display: 'flex', justifyContent: 'space-between', position: 'absolute', width: '100%', padding: '14px 40px', alignItems: 'center'}}>
            <img src={hulu} alt="" style={{width: '72px'}}/>
            <div style={{display: 'flex'}}>
              <p style={{color: 'white', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px',     marginRight: '50px'}}>START YOUR FREE TRIAL</p>
              <p style={{color: 'lightgrey', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px'}}>LOG IN</p>
            </div>
          </div>
          {/* // NAVBAR ENDS HERE// */}


          {/* // INFO PAMPHLET (HERO)// */}
          <div className={styles.informationPamphlet}>
            <div className={styles.pamphletInfo}>
              <p style={{color: 'lightgrey', fontSize: '13px', fontWeight: '700'}}>12 SEASONS AVAILABLE (132 EPISODES)</p>
              <img src={heroLogo} alt="" style={{width: '195px', height: '80px', marginBlock: '10px'}}/>
              <p style={{WebkitLineClamp: 1, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          display: '-webkit-box',
                          fontSize: '16px'}}>American Horror Story is an anthology horror drama series created and produced by Ryan Murphy and Brad Falchuk. The Emmy® and Golden Globe® winning franchise is produced by Twentieth Century Fox Television.
              </p>

              <div style={{lineHeight: 'normal', marginBlock: '12px'}}>
                <p style={{fontSize: '16px'}}><strong>Starring: </strong>Sarah Paulson, Alison Pill, Evan Peters</p>
                <p style={{fontSize: '16px'}}><strong>Creators: </strong>Ryan Murphy, Brad Falchuk</p>
              </div>

              <div style={{display: 'flex'}}>
                <p  style={{fontSize: '16px', marginRight: "14px"}}>TVMA &bull; Drama, Horror &bull; TV Series &bull; 2011</p>
                <div className={styles.badges}>
                  <span span>5.1</span>
                  <span>DA</span>
                  <span>HD</span>
                  <span>UHD</span>
                </div>
              </div>

              <p style={{marginBottom: '12px', fontSize: '16px'}}>Stream thousands of shows and movies, with plans starting at $7.99/month.</p>
              <FXTrialButton>START YOUR FREE TRAIL</FXTrialButton>
              <p style={{color: 'lightgrey', fontSize: '10px'}}>Hulu free trial available for new and eligible returning Hulu subscribers only. Cancel anytime. Additional terms apply.</p>
            </div>

            <img src={FXCORNER} alt="" style={{width: '100px', height: '100px'}}/>
          </div>

          <div className={styles.blackSticker}>
            <div className={styles.context}>

                <div style={{display: 'flex'}}>
                  <img src={huludisneyespn} alt="" style={{width: '355px', height: '81px', marginRight: '50px'}}/>

                  <div className={styles.midribbon}>
                      <p style={{color: "rgb(28, 231, 131)", fontSize: '14px', fontWeight: "500", letterSpacing: '0.5px'}}>DISNEY BUNDLE TRIO BASIC</p>
                      <p style={{fontSize: '28px'}}>Get Hulu, Disney+, and ESPN+, all with ads, for $14.99/mo.</p>
                      <p style={{color: 'lightgrey', textDecoration: 'underline', fontSize: '16px'}}>What's Included?</p>
                  </div>
                </div>

                  <div style={{textAlign: 'center'}}>
                      <button style={{border: 'none', padding: '14px 26px', backgroundColor: 'white', color: 'black', fontSize: '18px', fontWeight: '600', letterSpacing: '0.5px', borderRadius: '5px'}}>GET ALL THREE</button>
                      <p style={{color: 'lightgrey', textDecoration: 'underline', fontSize: '10px'}}>Terms apply</p>
                  </div>
            </div>
        
          </div>
           
    </div>
      {/* NAVBAR & HERO SECTION ENDS */}


      <div className={styles.navigationalheaders}>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[0] = el)} onClick={() => handleNavHeaderClick('EPISODES')}>EPISODES</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[1] = el)} onClick={() => handleNavHeaderClick('AMERICAN HORROR STORY SERIES')}>AMERICAN HORROR STORY SERIES</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[2] = el)} onClick={() => handleNavHeaderClick('EXTRA')}>EXTRA</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[3] = el)} onClick={() => handleNavHeaderClick('DETAILS')}>DETAILS</p>
          <span className={styles.bluIndicator} ref={bluIndicatorRef}></span>
      </div>

      {activePage === 'EPISODES' && <div className={styles.americanHorrorStoriesgrid}>
        <DelicateDropDown series={series} setSeries={setSeries} activeSeries={activeSeries} setActiveSeries={setActiveSeries}/>
      </div>}
      {activePage === 'AMERICAN HORROR STORY SERIES' && <Series />}
      {activePage === 'EXTRA' && <Extra />}
      {activePage === 'DETAILS' && <Details />}
    


        {/* // YOU MAY ALSO LIKE SECTION // */}
        <div className={styles.verticalscroll}>
            <p style={{paddingLeft: '40px', fontWeight: '600', fontSize: '20px', marginBlock: '30px'}}>YOU MAY ALSO LIKE</p>
    
        <div>
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

  
        {/* <!--------- // PLAN CARD & FEATURES// ----------> */}
      <div className={styles.container4}>

        <div className={styles.headerSection}>
          <div className={styles.section4header}>Select Your Plan</div>
          <h3 className={styles.headerInfo4} style={{fontSize: '18px', marginBottom: '4px'}}>No hidden fees, equipment rentals, or installation appointments.</h3>
          <h3 style={{fontSize: '18px', fontWeight: '700'}}>Switch plans or cancel anytime.**</h3>
        </div>


        <div className={styles.planchangeContainer}>
            <div className={styles.planchangerToggler}>
              <div className={styles.basePlanCont} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <p className={styles.basePlan}>BASE PLANS</p>
                <img src="/src/assets/images/Hulu-Logo.png" style={{width: '47px'}}/>
              </div>
              <div className={styles.toggleButton}>
                <span onClick={changePlans} className={`${styles.background} ${showPlan ? styles.backgroundActive : '' }`}></span>
                <span onClick={changePlans} className={`${styles.button} ${showPlan ? styles.buttonActive : '' }`}></span>
              </div>
              <div className={styles.bundleSaveCont}>
                <p className={styles.bundleSave}>BUNDLE / SAVE</p>
                <img src="/src/assets/images/bundles-black.svg" style={{width: '200px'}}/>
              </div>
            </div>

            <div className={styles.allCards}>
              {!showPlan ? (<div style={{display: 'flex'}}>
                <FXWelcomePlansCard2 trial='30 DAY FREE TRIAL' ads='Hulu (With Ads)' price='$7.99 / MONTH' price2='$7.99 / Mo.' popular={true}/>
                <FXWelcomePlansCard2 trial='30 DAY FREE TRIAL' ads='Hulu (No Ads)' price='$17.99 / MONTH' price2='$17.99 / Mo.' popular={false}/>
              </div>
              ) : (
              <div style={{display:'flex', alignitems: 'center'}}>
                <DelicateWelcomePlansCard logo={disneyesspnlogodark} savings='SAVE 37%' planName= 'Disney Bundle Trio Basic' price='$14.99 / MONTH' trial={false} popular={false}/>
                <DelicateWelcomePlansCard logo={disneyesspnlogodark} savings='SAVE 44%' planName= 'Disney Bundle Trio Premium' price='$24.99 / MONTH' trial={false} popular={true}/>
                <DelicateWelcomePlansCard logo={disneyesspnlogodark} savings='SAVE 41%' planName= 'Hulu + Live TV' price='$76.99 / MONTH' trial={true} popular={false}/>
              </div>
              )}
            </div>
        </div> 


        {/* <!--------- // FEATURES // ----------> */}
        <div className="allFeatures">

          {!showPlan ? (<div>
            <DelicateFeatures1 /> 
          </div>)
           :
          (<div className={styles.featuresActive}>
            <DelicateFeatures2 />
          </div>
          )}

        </div>


                                {/* <!-- BUNDLE / SAVE SECTION WITH FEATURES  --> */}


                  {/* <!-- ADD ONS  --> */}

        <div className='mt-5'>
        {show && (
          <div className={`${styles.addOns} ${styles.addOnsActive}`}>
            <div className={styles.addonHContainer}>
              <span className={styles.addonHeader}>Available Add-ons</span>
              <div className={styles.addOnsInnerText}>
                <span className={styles.addonSubheader}>Add-ons available at an additional cost.</span>
                <span className={styles.addonSubheader}>Add them up after you sign up for Hulu.</span>
              </div>
            </div>

            
            {!showPlan ? (<div className={showAddons1? styles.optionsActive : styles.options}>
              <DelicateAddOns />
            </div>
            )
            :
            (
            <div className={`${styles.optionsActive} ${showAddons2 ? styles.optionsActive : ''}`}>
              <DelicateAddOns2 />
            </div>
            )}
        
          </div>
        )}

        <div className={styles.showAddOns} id={styles.showBtn} onClick={toggleAddons}>
            {show? <p style={{color: 'black', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Hide Add-ons</p> : <p style={{color: 'black', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Show Add-ons</p>}
            {show ? <img src={DownArrow} style={{width: "26px", height: "14px", transform: 'rotate(180deg)'}} id="chev" /> : <img src={DownArrow} style={{width: "26px", height: "14px" }} id="chev" />}
        </div>
        </div>
      </div>

      {/* FOOTER*/}
      <Footer /> 

    </div>
    </>
  )
}

export default Delicate
