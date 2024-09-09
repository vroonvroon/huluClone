import React, { createContext, useState, useEffect, useRef } from 'react'
import styles from './Home.module.css'
import hero from '/src/assets/images/original.jpg'
import logo from '/src/assets/images/Hulu-Logo.png'
import disneyesspnlogo from '/src/assets/images/huludisneyespnwhite.png'
import disneylogo from '/src/assets/images/huludisneywhite.png'
import HeroCard from '../../src/Components/HeroCard/HeroCard'
import hd from '/src/assets/images/hulu & disney.png'
import hde from  '/src/assets/images/disneyhulu.png'
import morePlans from '/src/assets/images/hulu_arrow_down.svg'
import AllPlans from '../../src/Components/AllPlans/AllPlans'
import Footer from '../../src/Components/Big Footer/Footer'
import Modal from '../../src/Components/Modal/Modal'
import {WelcomePlansCard} from '../../src/Components/WelcomePlansCard/WelcomePlansCard'
import WelcomePlansCard2 from '../../src/Components/WelcomePlansCard2/WelcomePlansCard2'
import DownArrow from '/src/assets/images/Down_Arrow.svg'
import AddOns from '../../src/Components/AddOns1/AddOns1'
import AddOns2 from '../../src/Components/AddOns2/AddOns2'
import Features from '../../src/Components/FeaturesList1/Features1'
import Features2 from '../../src/Components/FeaturesList2/Features2'
import Features3 from '../../src/Components/FeaturesList3/Features3'
import SlidesNew from '../../src/Components/Slides/SlidesNew'
import Logout from '../../src/Components/Logout/Logout'
import LogIn from '../../src/Components/LogInModal/LogIn'
import { HamburgerMenuButton } from '../../src/Components/Buttons/Buttons'




export const ModalContext = createContext();
export const LogInContext = createContext();


const Home = () => {

document.body.style.backgroundColor = '#0b0c0fff'


const [modal, setModal] = useState(false);
const [loginModal, setLoginModal] = useState(false);
const [showLogin, setShowLogin] = useState(false);
const [show, setShow] = useState(false);

const toggleAddons = () => {
  setShow(!show);
}


//TO SCROLL TO PLANS SECTION
const container4 = useRef(null);

const goToPlans = () => {
  console.log(container4);
 window.scrollTo(
      { top: container4.current.offsetTop - 40, 
        behavior: 'smooth' 
      }); 
};


// FOR PLANS, FEATURES, ADDONS 
const [activeTab, setActiveTab] = useState(1);
const [showFeatures1, setShowFeatures1] = useState(true);
const [showFeatures2, setShowFeatures2] = useState(false);
const [showFeatures3, setShowFeatures3] = useState(false);
const [showAddons1, setshowAddons1] = useState(true);
const [showAddons2, setshowAddons2] = useState(false);
const [showAddons3, setshowAddons3] = useState(false);
const [showPlan1, setshowPlan1] = useState(true);
const [showPlan2, setshowPlan2] = useState(false);
const [showPlan3, setshowPlan3] = useState(false);
     
useEffect(() => {
  if (activeTab === 1) {
    setshowPlan1(true);
    setshowPlan2(false);
    setshowPlan3(false)
    setShowFeatures1(true);
    setShowFeatures2(false);
    setShowFeatures3(false);
    setshowAddons1(true);
    setshowAddons2(false);
    setshowAddons3(false);
  } else if (activeTab === 2) {
    setshowPlan1(false);
    setshowPlan2(true);
    setshowPlan3(false)
    setShowFeatures1(false);
    setShowFeatures2(true);
    setShowFeatures3(false);
    setshowAddons1(false);
    setshowAddons2(true);
    setshowAddons3(false);
  } else if (activeTab === 3) {
    setshowPlan1(false);
    setshowPlan2(false);
    setshowPlan3(true)
    setShowFeatures1(false);
    setShowFeatures2(false);
    setShowFeatures3(true);
    setshowAddons1(false);
    setshowAddons2(false);
    setshowAddons3(true);
  }
}, [activeTab]);


// TOGGLE FOR HAMBURGER MENU (SMALLER SCREENS)

const [hmenu, setHMenu] = useState(false);
const toggleHamburger = () => setHMenu(!hmenu);


const [showButton, setShowButton] = useState(false);
const [mobileButton, setMobileButton] = useState(false);
const smallScreenButtonContainer = useRef(null);

  
useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setMobileButton(true);
        setShowButton(true);
      } else {
        setMobileButton(false);
        setShowButton(false);
      }
    }

    const handleScroll = () => {
      if (window.scrollY >= 220 && window.scrollY <= 4200) {
        setShowButton(true);
      }
      else {
        setShowButton(false);
      }
    };

      window.addEventListener('resize', handleResize);
      handleResize();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      } 
}, []);
  

const [auth, setAuth] = useState(localStorage.getItem('user'));


useEffect(() => {
  const handleStorageChange = () => {
    setAuth(localStorage.getItem('user'));
  };
  window.addEventListener('storage', handleStorageChange);
  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);



  return (
    <>

    {/* // SIGN UP BUTTON FOR SMALLER SCREENS  */}
    
    <div ref={smallScreenButtonContainer} className={showButton ? styles. ActiveSmallScreenButton : styles.smallScreenButton}>
      <button className={styles.homeSmallScreenSignUp}>SIGN UP NOW</button>
    </div>

  
       {/* NAV STARTS HERE  */}
    <div className={styles.navheroContainer}>
      <div className={styles.nav}>
        <img src={logo} className={styles.logo}/>
      {auth ? (
        <Logout setAuth={setAuth} />
      ) : (
        <div>
          <p className={styles.loginText}>
            LOG IN
          </p>
        </div>
      )}



      
          <div className={styles.hamburgerMenuContainer} onClick={toggleHamburger}>
            <div className={styles.hamburgerMenu}>
              <svg className={styles.menuIcon} viewBox="0 0 24 24" width="50px" height="40px" fill="white" xmlns="http://www.w3.org/ 2000/svg" data-testid="MenuHamburgerIcon" focusable="false" aria-hidden="true"><path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z"></path></svg>
            </div>

            {hmenu && <div className={styles.expandedMenu}>
                <p className={styles.expandedMenuText}>Get the Hulu app</p>
                <p className={styles.expandedMenuLog}>LOG IN</p>
                <HamburgerMenuButton>SIGN UP NOW</HamburgerMenuButton>
            </div>}
          </div>

      </div>

      {/* NAV ENDS HERE  */}

      {/* HERO SECTION STARTS HERE  */}
      <div className={styles.heroSection}> 
          <img src={hero} className={styles.hero} />
                

        {/* <!-- HAMBURGER MENU FOR SMALL SCREEN  --> */}

        <div className={styles.menuPop}>
            <h5>Get the Hulu app</h5>
            <p>LOG IN</p>
            <button className={styles.menuBtn}>GET ALL THREE</button>
        </div>
        
         
                                 {/* <!-- MODAL --> */}

        <ModalContext.Provider value={{modal, setModal}}>{modal && (<Modal />)}</ModalContext.Provider>

                            {/* <!-- MODAL ENDS --> */}
                            
             
        <div className={styles.cards}>
          <HeroCard name='DISNEY BUNDLE DUO BASIC' img={hd} price='Both with ads, for $9.99/month.' but='GET THEM BOTH'/>
          <HeroCard name='DISNEY BUNDLE TRIO BASIC' img={hde} price='All with ads, for $12.99/month.' but='GET ALL THREE'/> 
        </div>

          <div className={styles.links}>
            <div id={styles.terms}>
              <p style={{color: 'rgb(255, 255, 255, 0.6)', fontSize: '13px', textDecoration: 'underline', cursor: 'pointer'}} onClick={() => setModal(true)}>Terms apply</p>
            </div>
           {!auth && <p style={{textDecoration: 'underline', fontSize: '17px', marginBlock: '40px', fontWeight: '400', letterSpacing: '0.5px'}}>SIGN UP FOR HULU ONLY</p>}
            <p style={{textDecoration: 'none', fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px'}}>VIEW MORE PLANS</p>
            <span onClick={() => goToPlans()} style={{padding: '20px 25px', margin: '10px 0px', border: '1px solid white', borderRadius: '50%', cursor: 'pointer'}}>
              <img src={morePlans} className={styles.gotoSectionButton} alt="" onClick={goToPlans}/>
            </span>
          </div>

      </div>
       
        <div className={styles.heroOverlay}></div>

    </div>

        {/* HERO SECTION ENDS HERE  */}
        
  
                                 {/* BUILD YOUR PLAN  */}

        <div className="container-fluid h-auto pt-4 pb-4 px-0 text-center" style={{background: 'linear-gradient(#28a868ff, #212529)'}}>
          <h5 className={styles.buildyourplan}>BUILD THE PLAN THAT'S RIGHT FOR YOU</h5>
          <button className={styles.buildyourplanbutton}>START BUILDING</button>
        </div>

            
                                              {/* <!-- MAIN SECTION STARTS HERE --> */}

      <AllPlans />


                                                {/* <!-- SECTION2 STARTS HERE --> */}

    <div className={styles.section2}>
        <div className={`${styles.section2Container} text-center`}>
          <div className={styles.sub}>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</div>
          <div className={styles.header}>Live TV Makes It Better</div>
          <div className={styles.headerInfo2}>Get 95+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+.
          </div>
            <span className={styles.limitedTimeBtn}>GET HULU + LIVE TV</span>
        </div>
      
      <div>
      <div className={styles.moreInfo2}>Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current, regular monthly price). Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows. See details.
      </div>
      <div className={styles.viewAll}>VIEW CHANNELS IN YOUR AREA →</div>
      {/* <div className="chevron">
        <img src="/images/dropdown_arrow.svg" />
      </div> */}
    </div>
    </div>
    

                                {/* <!-- SECTION3 STARTS HERE --> */}                       

       <SlidesNew />

                                {/* <!-- SELECT PLAN SECTION STARTS HERE --> */}

    <div className={styles.container4} ref={container4}>

          <div className={styles.headerSection}>
            <div className={styles.section4header}>Select Your Plan</div>
            <h3 className={styles.headerInfo4}>No hidden fees, equipment rentals, or installation appointments.</h3>
            <h3 className={styles.switchorcancel}>Switch plans or cancel anytime.**</h3>
          </div>

        <div className={styles.planChangerMainContainer}>
            <div className={styles.tabswitcherContainer}>
              
              <div className={styles.switchTextgrp} onClick={() => setActiveTab(1)}>
                <span className={activeTab === 1 ? styles.tabActive : styles.tabswitchChanger}>Hulu</span>
              </div>

              <div className={styles.switchTextgrp} onClick={() => setActiveTab(2)}>
                <span className={activeTab === 2 ? styles.tabActive : styles.tabswitchChanger}>Disney Bundle</span>
              </div>

              <div className={styles.switchTextgrp} onClick={() => setActiveTab(3)}>
                <span className={activeTab === 3 ? styles.tabActive : styles.tabswitchChanger}>Live TV</span>
              </div>

            </div>
        </div>

        <div className={styles.planchangeContainer}>
          <div className={styles.allCards}>
              {/* <!------ CARD1 FOR BUNDLE / SAVE SIDE -------> */}
            <div className={`align-items-end ${showPlan1 ? styles.plancardActive : styles.plancards}`}>
              <WelcomePlansCard logo={logo} trial='30 DAY FREE TRIAL' ads='With Ads' price='$7.99 / MONTH' price2='$7.99 / Mo.' popular={true}/>
              <WelcomePlansCard logo={logo} trial='30 DAY FREE TRIAL' ads='No Ads' price='$17.99 / MONTH' price2='$17.99 / Mo.' popular={false}/>
            </div>

            {/* <!------ CARD2 FOR BUNDLE / SAVE SIDE -------> */}
            <div className={`align-items-end ${showPlan2 ? styles.plancardActive : styles.plancards}`}>
              <WelcomePlansCard2 logo={disneylogo} savings='SAVE 37%' planName= 'Duo Basic' ads='With Ads' price='$9.99 / MONTH'  price2='$9.99/Mo.' popular={false}/>
              <WelcomePlansCard2 logo={disneyesspnlogo} savings='SAVE 44%' planName= 'Trio Basic' ads='With Ads' price='$14.99 / MONTH' price2='$14.99/Mo.' popular={true}/>
              <WelcomePlansCard2 logo={disneyesspnlogo} savings='SAVE 41%' planName= 'Trio Premium' ads='No Ads (Disney+ & Hulu)' price='$24.99 / MONTH' price2='$24.99/Mo.' popular={false}/>
            </div>

            {/* <!------ CARD3 FOR BUNDLE / SAVE SIDE -------> */}
            <div className={`align-items-end ${showPlan3 ? styles.plancardActive : styles.plancards}`}>
              <WelcomePlansCard trial='INCLUDES DISNEY+ & ESPN+' ads='With Ads' price='$76.99 / MONTH' price2='$76.99/Mo.' popular={true}/>
              <WelcomePlansCard trial='INCLUDES DISNEY+ & ESPN+' ads='No Ads (Disney+ & Hulu)' price='$89.99 / MONTH' price2='$89.99/Mo.' popular={false}/>
            </div>
          </div>
        </div> 


        {/* <!--------- // FEATURES // ----------> */}
        
        <div className="allFeatures">
          <div className={showFeatures1 ? styles.featuresActive : styles.features}>
            <Features /> 
          </div>

        {/* THIS IS THE SECOND FEATURES  */}
          {showFeatures2 && <div className={styles.featuresActive}>
            <Features2 />
          </div>}

        {/* THIS IS THE 3RD FEATURE SECTION */}
          {showFeatures3 && <div className={styles.featuresActive}> 
            <Features3 />
          </div>}
        </div>


                                  {/* <!-- BUNDLE / SAVE SECTION WITH FEATURES  --> */}


                    {/* <!-- ADD ONS  --> */}

        <div className='mt-5'>
          {show && <div className={`${styles.addOns} ${styles.addOnsActive}`}>
            <div className={styles.addonHContainer}>
              <span className={styles.addonHeader}>Available Add-ons</span>
                <div className={styles.addOnsInnerText}>
                  <span className={styles.addonSubheader}>Add-ons available at an additional cost.</span>
                  <span className={styles.addonSubheader}>Add them up after you sign up for Hulu.</span>
                </div>
            </div>


                {/* OPTIONS 1  */}
          <div className={showAddons1 ? styles.optionsActive : styles.options}>
            <AddOns />
          </div>
              {/* OPTIONS 1 ENDS*/}


              {/* OPTIONS 2 STARTS */}
          <div className={showAddons2 ? styles.optionsActive : styles.options}>
            <AddOns2 />
          </div>
              {/* OPTIONS 2 ENDS */}


              {/* OPTIONS 3 STARTS*/}
          <div className={showAddons3 ? styles.optionsActive : styles.options}>
            <AddOns />
          </div>
              {/* OPTIONS 3 ENDS*/}     

          </div>}

          <div className={styles.showAddOns} id={styles.showBtn} onClick={toggleAddons}>
              {show ? <p style={{color: 'white', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Hide Add-ons</p> : <p style={{color: 'white', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Show Add-ons</p>}
              {show ? <img src={DownArrow} style={{width: "26px", height: "14px", transform: 'rotate(180deg)'}} id="chev" /> : <img src={DownArrow} style={{width: "26px", height: "14px" }} id="chev" />}
          </div>
        </div>

    </div>

    {/* FOOTER*/}
    <Footer /> 

    </>
  )
}

export default Home