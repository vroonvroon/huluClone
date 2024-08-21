import React, {useState, useEffect, useRef} from "react";
import styles from './StudentDeal.module.css'
import background from '/src/assets/images/student-hulu-bgimg.jpg'
import logo from '/src/assets/images/Hulu-Logo.png'
import student from '/src/assets/images/hulu-student.png'
import studentHulu from '/src/assets/images/student-hululaptop.png'
import step1p from '/src/assets/images/step1.png'
import step2p from '/src/assets/images/step2.png'
import step3p from '/src/assets/images/step3.png'
import Footer from "../../src/Components/Big Footer/Footer";
import AllPlans from "../../src/Components/AllPlans/AllPlans";
import FAQ from "../../src/Components/FAQ/FAQ";
import TrendingCarousel from "../../src/Components/TrendingCarousel/TrendingCarousel";
import TrendingCarousel2 from "../../src/Components/TrendingCarousel/TrendingCarousel2";
import TrendingCarousel3 from "../../src/Components/TrendingCarousel/TrendingCarousel3";
import { Link } from "react-router-dom";
import { StudentCTA } from "../../src/Components/Buttons/Buttons";


const StudentDeal = () => {

    document.body.style= {
        background: '#f5f6f7ff'
    }

   const steps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '400px',
    marginInline: '20px'
   }
   
    const step1 = {
        fontSize: '14px',
        color: '#16181d', 
        fontWeight: '500', 
        margin: '14px 0px 7px 0px'
    }

    const step2 = {
        fontSize: '25px', 
        fontWeight: '700', 
        color: '#16181d'
    }

    const step3 = {
        color: '#586174', 
        fontSize: '17px', 
        fontWeight: '400',
        marginTop: '10px',

    }


    // FOR NAVBAR 
    const [stickyNav, setStickyNav] = useState(false);
    const [endOfHero, setendOfHero] = useState(false);

    let wind = document.defaultView 

    useEffect(() => {
        const handleScroll = () => {
          const threshold = 50; 
          if (wind.scrollY > threshold) {
            setStickyNav(true);
          } else {
            setStickyNav(false);
          }
        };
        wind.addEventListener('scroll', handleScroll);

        return () => {
        wind.removeEventListener('scroll', handleScroll);
        };
     }, []);


     useEffect(() => {
        const handleScroll = () => {
          const threshold = 620; 
          if (wind.scrollY > threshold) {
            setendOfHero(true);
          } else {
            setendOfHero(false);
          }
        };
        wind.addEventListener('scroll', handleScroll);

        return () => {
        wind.removeEventListener('scroll', handleScroll);
        };
     }, []);

   
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
                    <img src={logo} className={styles.logo}/>
                    <div className={`${styles.CTAButtons}`}>
                        <Link to='/account'>
                            <span className={`${styles.getDeal} ${endOfHero? styles.getDealActive : ''}`}>GET THIS DEAL</span>
                        </Link>
                        <p style={{width: '120px', textAlign: 'center'}}>LOG IN</p>
                    </div>
                </div>
            
                <img src={background} className={styles.hero} />
                <span className={styles.overlay}></span>
            </div> 
            <div className={styles.heroBanner}>
                <img src={student} style={{width: '325px'}} />
                <p className={styles.header}>Students: Get Hulu For Just $1.99/Month</p>
                <p style={{fontSize: '24px', fontWeight: '500', color: 'white',  width: '650px', textAlign: 'center', lineHeight: '28px'}}>Stream tons of shows and movies with our Hulu (With Ads) plan for just <del>$7.99/month</del><span className={styles.green}> $1.99/month.</span></p>
                <p style={{color: 'rgb(28, 231, 131)', fontWeight: 'bold', fontSize: '24px'}}>Valid as long as you're a college student.</p>
                <p style={{fontSize: '24px', color: 'white', width: '602px', textAlign: 'center', marginBlock: '20px'}}>Save 75% off the regular monthly price. Cancel anytime.</p>
                <Link to='/account'><StudentCTA>GET THIS DEAL</StudentCTA></Link>
                <p style={{color: 'rgba(255, 255, 255, 0.6)', fontSize: '10px', width: '498px', textAlign: 'center'}}>Student discount offer for Hulu (With Ads) plan only. $1.99/month so long as student enrollment status remains verified, then $7.99/month or then-current, regular monthly price. Offer valid for new and existing Hulu-billed subscribers enrolled at a U.S. Title IV accredited college or university who meet verification qualifications. Verification performed through SheerID.<u> Additional terms apply.</u>
                </p>
            </div>
        </div>
            
        {/* NAV & HERO SECTION ENDS  */}
    
     <div className={styles.packageintro}>
        <div className={styles.heroOverlay}></div>
     </div>

                {/* TRENDING SECTION STARTS HERE  */}

        <div className={styles.verticalscroll}>
            <p style={{paddingLeft: '80px', fontWeight: '700', fontSize: '18px', letterSpacing: '0.8px', marginBottom: '10px'}}>TRENDING ON HULU</p>

    

        <div className={styles.scrollbtns}>
            {/* {LEFT BUTTON}  */}
            <svg onClick={slideFront} className={styles.scrollbuttonl}viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 27.92l-9.2 9.2-9.2-9.2" strokeWidth="2" stroke="#868D9B"></path></g></svg>
        </div>
     


            <div className={styles.scrollwindowAll}>

              <div ref={slider} className={styles.scrollWindows} >

                {/* {FIRST SCROLL WINDOW STARTS HERE}  */}
                <div className={styles.windows}>
                  <TrendingCarousel />
                </div>
                
                {/* {FIRST SCROLL WINDOW ENDS HERE}  */}
            

                {/* <!-- THE SECOND SLIDE WINDOW STARTS HERE--> */}

                <div className={styles.windows}>
                <TrendingCarousel2 />
                </div>

                        {/* {SECOND SCROLL WINDOW ENDS HERE}  */}


                {/* <!-- THE THIRD SLIDE WINDOW STARTS HERE--> */}

                <div className={styles.windows}>
                <TrendingCarousel3 />
                </div>
               

                    {/* {THIRD SCROLL WINDOW ENDS HERE}  */}
                
              </div>
                
                                         {/* {RIGHT BUTTON}  */}

            <svg onClick={slideBack} className={styles.scrollbuttonr} viewBox="0 0 64 64"><title>Previous</title><g transform="matrix(0 -1 -1 0 64 64)" fill="none" fillRule="evenodd"><circle fill="#FFF" cx="32" cy="32" r="32"></circle><path d="M40.8 33.92l-9.2 -10.2-9.2 10" strokeWidth="2" stroke="#868D9B"></path></g></svg>

            </div>
        </div>
            

            {/* <!-- END OF VERTICAL SCROLLER  --> */}


            <AllPlans />


                {/* HOW TO SIGN UP SECTION STARTS HERE  */}

            <div className={styles.bgColorContainer}>
         
            <div className="howto-signup" style={{margin: '30px 150px 80px', textAlign: 'center'}}>
            <p style={{fontSize: '40px', fontWeight: '700', color:' #16181d'}}>How To Sign Up</p>
            <div className="{signupSteps align-items-center}" style={{display: 'flex', justifyContent: 'space-between', marginBlock: '50px'}}>
                <div style={steps}>
                    <img src={step1p}alt="" />
                    <p style={step1}>STEP 1</p>
                    <p style={step2}>Create Your Account</p>
                    <p style={step3}>Click <strong>"GET THIS DEAL"</strong> and create your Hulu account. You'll use your email and password to log in and watch on your favorite devices.</p>
                </div>
                <div style={steps}>
                    <img src={step2p} alt="" />
                    <p style={step1}>STEP 2</p>
                    <p style={step2}>Verify Your Student Status</p>
                    <p style={step3}>We've partnered with Sheer ID to verify your student status. You'll be redirected there to provide your details.</p>
                </div>
                <div style={steps}>
                    <img src={step3p} alt="" />
                    <p style={step1}>STEP 3</p>
                    <p style={step2}>Download App & Start Streaming</p>
                    <p style={step3}>Stream across your favorite smart TVs, computers, phones, tablets, and gaming consoles.</p>
                </div>
            </div>
            </div>

                 {/* <!-- END OF HOW TO SIGN UP  --> */}


                 {/* <!-- END OF CONTAINER  --> */}

                
            <div className={styles.WatchPartyContainer} style={{display: 'flex', alignItems: 'center', padding: '40px 157px'}}>
                <div className={styles.watchpartytext}>
                    <div className={styles.watchpHeader}>Watch Party</div>
                    <p style={{color: '#586174', fontWeight: '400'}}>Missing your crew? Watch together, even when you’re apart with Watch Party. You and up to seven friends can stream and chat together as long as you’re all Hulu subscribers.</p>
                </div>
                <img src={studentHulu} style={{width: '706px', height: '401px'}} />
            </div>



                    {/* <!-- END OF WATCH PART CONTAINER  --> */}

            <FAQ />

            </div>

                    {/* <!-- FAQ SECTION ENDS --> */}

                <Footer />
    </div>
            
     </>
    )
}

export default StudentDeal