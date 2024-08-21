import React, {useEffect, useState, useRef, useParams} from 'react'
import styles from './Delicate.module.css'
import { FXTrialButton } from '../../../src/Components/Buttons/Buttons'
import { Link } from 'react-router-dom';
import delicatehorror from '../../../src/assets/images/delicateBG.webp';
import heroLogo from  '../../../src/assets/images/delicatehorror.webp'
import FXCORNER from '../../../src/assets/images/fxcorner.webp';
import DelicateDropDown from '../DelicateDropdown';
import { MoreLikeData } from './AmericanHorrorStoriesData';
import { FXWelcomePlansCard } from '../../../src/Components/WelcomePlansCard/WelcomePlansCard';
import { FX2WelcomePlansCard } from '../../../src/Components/WelcomePlansCard2/WelcomePlansCard2';
import DownArrow from '../../../src/assets/images/Down_Arrow.svg'
import { FXAddOns } from '../../../src/Components/AddOns1/AddOns1';
import { FXAddOns2 } from '../../../src/Components/AddOns2/AddOns2';
import { FXFeatures } from '../../../src/Components/FeaturesList1/Features1';
import { FXFeatures2 } from '../../../src/Components/FeaturesList2/Features2';
import Features3 from '../../../src/Components/FeaturesList3/Features3'
import hululogo from '../../../src/assets/images/ForDelicate/HULUDISNEYDARK.svg'
import hulu from '/src/assets/images/Hulu-Logo.png'
import disneyesspnlogodark from '../../../src/assets/images/ForDelicate/huludisneyespndark.svg'
import huludisneyespn from '../../../src/assets/images/huludisneyespnwhite.png'
import Details from '../Pages/Details';
import Extra from '../Pages/Extra';
import Series from '../Pages/Series';
import Footer from '../../../src/Components/Big Footer/Footer';



const Delicate = () => {

  const [activeSeries, setActiveSeries] = useState([]);
  const [series, setSeries] = useState('');


  useEffect(() => {
      getSeriesHandler();
  }, [series]);


  const getSeriesHandler = async () => {
    try {
       const response = await fetch(`http://localhost:5000/api/data/${series}`, {
        method: 'GET'
    });

    if(response.ok) {
      const data = await response.json();
      console.log(data);
      setActiveSeries(data);
    }
    } catch (err) {
      console.log(err)
    }
  }

  
  // NAVIGATION HEADERS SETTINGS //
  const navHeadersRef = useRef([]);
  const bluIndicatorRef = useRef(null);
  const [activePage, setActivePage] = useState('EPISODES');

  const handleNavHeaderClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    const navHeaders = navHeadersRef.current;
    const bluIndicator = bluIndicatorRef.current;

    // Add event listener to each p tag
    navHeaders.forEach((navHeader) => {
    navHeader.addEventListener('click', () => {
    const width = navHeader.offsetWidth;
    const left = navHeader.offsetLeft;

    // Update the bluIndicator span's width and position
    bluIndicator.style.width = `${width}px`;
    bluIndicator.style.left = `${left}px`;
    });
  });

  return () => {
    // Clean up the event listeners when the component unmounts
    navHeaders.forEach((navHeader) => {
      navHeader.removeEventListener('click', () => {});
    });
  };
    },[])

  
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

const [show, setShow] = useState(false);

const toggleAddons = () => {
  setShow(!show);
}


// YOU MAY LIKE SETTINGS //
const [activeMoreCard, setActiveMoreCard] = useState(false);

const handleMouseOver = (index) => {
  setActiveMoreCard(index);
};

const handleMouseOut = (index) => {
  setActiveMoreCard(index);
};

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
              <img src={heroLogo} alt="" />
              <p style={{WebkitLineClamp: 1, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          display: '-webkit-box'}}>American Horror Story is an anthology horror drama series created and produced by Ryan Murphy and Brad Falchuk. The Emmy® and Golden Globe® winning franchise is produced by Twentieth Century Fox Television.
              </p>
              <p><strong>Starring: </strong>Dylan McDermottConnie BrittonTaissa Farmiga</p>

              <div style={{display: 'flex'}}>
              <p>TVMA &bull; Drama &bull; Horror &bull; TV Series &bull; 2011</p>
              <div className={styles.badges}>
                <span>5.1</span>
                <span>DA</span>
                <span>HD</span>
                <span>UHD</span>
              </div>
              </div>

              <p style={{marginBottom: '12px'}}>Stream thousands of shows and movies, with plans starting at $7.99/month.</p>
              <FXTrialButton>START YOUR FREE TRAIL</FXTrialButton>
              <p style={{color: 'lightgrey', fontSize: '10px'}}>Hulu free trial available for new and eligible returning Hulu subscribers only. Cancel anytime. Additional terms apply.</p>
            </div>

            <img src={FXCORNER} alt="" style={{width: '100px', height: '100px'}}/>
          </div>

        <div className={styles.blackSticker}>
          <div className={styles.context}>
                <img src={huludisneyespn} alt="" style={{width: '355px', height: '81px'}}/>
                <div className={styles.midribbon}>
                    <p style={{color: "rgb(28, 231, 131)", fontSize: '13px', fontWeight: "500", letterSpacing: '0.5px'}}>DISNEY BUNDLE TRIO BASIC</p>
                    <p style={{fontSize: '24px'}}>Get Hulu, Disney+, and ESPN+, all with ads, for $14.99/mo.</p>
                    <p style={{color: 'lightgrey', textDecoration: 'underline'}}>What's Included?</p>
                </div>
                <div className={styles.right}>
                    <button style={{border: 'none', padding: '14px 26px', backgroundColor: 'white', color: 'black', fontSize: '15px', fontWeight: '700', letterSpacing: '0.5px', borderRadius: '5px'}}>GET ALL THREE</button>
                    <p style={{color: 'lightgrey', textDecoration: 'underline', fontSize: '10px'}}>Terms apply</p>
                </div>
          </div>
       
        </div>
           
    </div>
      {/* NAVBAR & HERO SECTION ENDS */}


    <section1>
      <div className={styles.navigationalheaders}>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[0] = el)} onClick={() => handleNavHeaderClick('EPISODES')}>EPISODES</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[1] = el)} onClick={() => handleNavHeaderClick('AMERICAN HORROR STORY SERIES')}>AMERICAN HORROR STORY SERIES</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[2] = el)} onClick={() => handleNavHeaderClick('EXTRA')}>EXTRA</p>
          <p className={styles.navheader} ref={(el) => (navHeadersRef.current[3] = el)} onClick={() => handleNavHeaderClick('DETAILS')}>DETAILS</p>
          <span className={styles.bluIndicator} ref={bluIndicatorRef}></span>
      </div>

      {activePage === 'AMERICAN HORROR STORY SERIES' && <Series />}
      {activePage === 'EXTRA' && <Extra />}
      {activePage === 'DETAILS' && <Details />}
    
      <div className={styles.americanHorrorStoriesgrid}>
      <DelicateDropDown series={series} setSeries={setSeries}/>

      <div className={styles.delicateWindow}>
        {activeSeries.map((item, index) => {
            return (
              <> 
              <div key={index} className={styles.card}>
                  <div className={styles.imgContainer}>
                     <img className={styles.thumbnail} src={item.img} alt="" />
                     <img className={styles.fxlogo} src={FXCORNER}alt="" />
                  </div>
                  <p className={styles.episodeno}>{item.episode}</p>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </>
            )
        })}
      </div>
      </div>

    </section1>

    <section2>
  
            {/* {LEFT BUTTON}  */}
          <svg onClick={slideFront} className={styles.scrollbuttonl}viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 27.92l-9.2 9.2-9.2-9.2" strokeWidth="2" stroke="#868D9B"></path></g></svg>


      <div style={{margin: '40px', overflow: 'hidden'}} > 
       <p>YOU MAY ALSO LIKE</p>

      <div className={styles.youmaylikesectioncontainer}>
     
        <div className={styles.moreWindow}>
          {MoreLikeData.map((item, index) => {
              return (
                <> 
                <div key={index} className={`${styles.likecard} ${
                  activeMoreCard === index ? styles.hoveredCard : ''
                }`}>
                    <div className={activeMoreCard === index ? styles.moreimgContainerActive : styles.moreimgContainer} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
                      <img className={styles.thumbnail} src={item.img} alt="" />
                      <img className={styles.fxlogo} src={FXCORNER}alt="" />
                      <svg width="60px" height="60px" viewBox="0 0 60 60" className={activeMoreCard === index? styles.cubuttondetailActive : styles.cubuttondetail}><circle fill-opacity="0.2" cx="30" cy="30" r="29" stroke="#FFFFFF" stroke-width="1.5"></circle><g transform="translate(16.071429, 17.142857)" fill-rule="nonzero" fill="#FFFFFF"><path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path></g></svg>
                      <span className={ activeMoreCard === index ? styles.backdropActive : styles.backdrop}></span>
                    </div>
                    <p className={styles.moretitle}>{item.title}</p>
                    <p className={styles.moregenre}>{item.genre}</p>
                </div>
                </>
              )
          })}
        </div>

      </div>
      </div>

      <svg onClick={slideBack} className={styles.scrollbuttonr} viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 33.92l-9.2 -10.2-9.2 10" strokeWidth="2" stroke="#868D9B"></path></g></svg>
    </section2>

    <section3>
      <div className={styles.container4}>
        <div className={styles.headerSection}>
          <div className={styles.section4header}>Select Your Plan</div>
          <h3 className={styles.headerInfo4} style={{fontSize: '18px', marginBottom: '4px'}}>No hidden fees, equipment rentals, or installation appointments.</h3>
          <h3 style={{fontSize: '18px', fontWeight: '700'}}>Switch plans or cancel anytime.**</h3>
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
            <div className={styles.planchangerToggler}>
            <div className={styles.basePlanCont} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
              <p className={styles.basePlan}>BASE PLANS</p>
              <img src="/images/Hulu-Logo.png" style={{width: '47px'}} />
            </div>
              <div className={styles.toggleButton}>
                <span className={styles.background}></span>
                <span className={styles.button}></span>
              </div>
              <div className={styles.bundleSaveCont}>
                <p className={styles.bundleSave}>BUNDLE / SAVE</p>
                <img src="/images/bundles-white.svg" />
              </div>
            </div>

            <div className={styles.allCards}>
                {/* <!------ CARD1 FOR BUNDLE / SAVE SIDE -------> */}
              <div className={`align-items-end ${showPlan1 ? styles.plancardActive : styles.plancards}`}>
                <FXWelcomePlansCard logo={hulu} trial='30 DAY FREE TRIAL' ads='With Ads' price='$7.99 / MONTH' price2='$7.99 / Mo.' popular={true}/>
                <FXWelcomePlansCard logo={hulu} trial='30 DAY FREE TRIAL' ads='No Ads' price='$17.99 / MONTH' price2='$17.99 / Mo.' popular={false}/>
              </div>

              {/* <!------ CARD2 FOR BUNDLE / SAVE SIDE -------> */}
              <div className={`align-items-end ${showPlan2 ? styles.plancardActive : styles.plancards}`}>
                <FX2WelcomePlansCard logo={hululogo} savings='SAVE 37%' planName= 'Duo Basic' ads='With Ads' price='$9.99 / MONTH' popular={false}/>
                <FX2WelcomePlansCard logo={disneyesspnlogodark} savings='SAVE 44%' planName= 'Trio Basic' ads='With Ads' price='$14.99 / MONTH' popular={true}/>
                <FX2WelcomePlansCard logo={disneyesspnlogodark} savings='SAVE 41%' planName= 'Trio Premium' ads='No Ads (Disney+ & Hulu)' price='$24.99 / MONTH' popular={false}/>
              </div>

              {/* <!------ CARD3 FOR BUNDLE / SAVE SIDE -------> */}
              <div className={`align-items-end ${showPlan3 ? styles.plancardActive : styles.plancards}`}>
                <FXWelcomePlansCard trial='INCLUDES DISNEY+ & ESPN+' ads='With Ads' price='$76.99 / MONTH' popular={true}/>
                <FXWelcomePlansCard trial='INCLUDES DISNEY+ & ESPN+' ads='No Ads (Disney+ & Hulu)' price='$89.99 / MONTH' popular={false}/>
              </div>
            </div>

        </div> 

        {/* <!--------- // FEATURES // ----------> */}
        

        <div className="allFeatures">

          <div className={showFeatures1 ? styles.featuresActive : styles.features}>
          <FXFeatures /> 
        </div>


        {/* THIS IS THE SECOND FEATURES  */}
          {showFeatures2 && <div className={styles.featuresActive}>
            <FXFeatures2 />
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
          <FXAddOns />
        </div>
            {/* OPTIONS 1 ENDS*/}


            {/* OPTIONS 2 STARTS */}
        <div className={showAddons2 ? styles.optionsActive : styles.options}>
          <FXAddOns2 />
        </div>
            {/* OPTIONS 2 ENDS */}


            {/* OPTIONS 3 STARTS*/}
        <div className={showAddons3 ? styles.optionsActive : styles.options}>
          <FXAddOns />
        </div>
            {/* OPTIONS 3 ENDS*/}     

        </div>}

        <div className={styles.showAddOns} id={styles.showBtn} onClick={toggleAddons}>
            {show? <p style={{color: 'black', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Hide Add-ons</p> : <p style={{color: 'black', marginRight: '10px', paddingBlock: '24px', fontSize: '17px', alignItems: 'center'}} id="text">Show Add-ons</p>}
            {show ? <img src={DownArrow} style={{width: "26px", height: "14px", transform: 'rotate(180deg)'}} id="chev" /> : <img src={DownArrow} style={{width: "26px", height: "14px" }} id="chev" />}
        </div>
        </div>

      </div>
    </section3>

      {/* FOOTER*/}
      <Footer /> 

  

      


    </div>
    </>
  )
}

export default Delicate