import React, {useState} from "react";
import logo from '/src/assets/images/Hulu-Logo.png' 
import PlanCard from "../../src/Components/PlanCard";
import styles from './ChoosePlan.module.css';
import { ChooseYourPlanHeading } from "../../src/Components/h1/h1";
import { Link } from 'react-router-dom'
import { RadioForPlans, RadioLabelForPlans } from "../../src/Components/Inputs/Inputs";
import info from '/src/assets/images/info-icon.svg'
import huluDisneyEspn from '/src/assets/images/hulu-disney-espn.svg'



const Plan = () => {

    const span = {
        fontSize: '36px', 
        fontWeight: '700'
    }


    const [changePlan, setChangePlan] = useState(2);
    const [selectedPlan, setSelectedPlan] = useState(false)

    const togglePlans = (id) => {
         setChangePlan(id)
    }

 

    return (
        <>
        <div className={styles.plan}>

            <div className={styles.navbar}>
                <img src={logo}style={{width: '78px', height: '52px', filter: 'brightness(0)'}}/>
                <p className="logIn" style={{fontSize: '15px', fontWeight:' 800', letterSpacing: '1.5px'}}>LOG IN</p>
            </div>

        <main className="container text-center py-5">
            <ChooseYourPlanHeading>Choose Your Plan</ChooseYourPlanHeading>
            <h4 style={{fontSize: '17px',fontWeight: '400', color: '#6f78a4'}}>Switch plans or cancel anytime.</h4>


        <div className="switch-section my-5 d-flex justify-content-center">
            <div className="plan-change position-relative d-flex justify-content-center">
                <div className={`${styles.plans} d-flex justify-content-center gap-4 pb-3 px-3`}>
                <span className={`position-absolute ${changePlan === 2 ? styles.sliderMove : styles.slider}`}></span>

                    
                
                    {/* <RadioForPlans id='base plan' name='plans' value="option1" checked={selected === "option1"} onChange={handleChange} disabled={selected === "option2"}/>
                    <RadioLabelForPlans htmlFor="base plan" className= {`${styles.plansText} ${changePlan ? styles.plansTextInactive : ''}`}  onClick={() => togglePlans()}> BASE PLAN</RadioLabelForPlans>
                  
                    <RadioForPlans id='bundle plan' name='plans' value="option2" checked={selected === "option2"} onChange={handleChange} disabled={selected === "option1"}/>
                    <RadioLabelForPlans htmlFor="bundle plan" className={`${styles.plansTextInactive} ${changePlan ? styles.plansText : ''}`}  onClick={() => togglePlans()}>BUNDLE / SAVE</RadioLabelForPlans> */}

            
                    
                    <p className={changePlan === 1 ? styles.plansText : styles.plansTextInactive} onClick={() => togglePlans(1)}>BASE PLANS</p>
                    <p className={changePlan === 2 ? styles.plansText : styles.plansTextInactive} onClick={() => togglePlans(2)}>BUNDLE / SAVE</p>
                </div>
            </div> 
        </div>


            {/* <!-- SECTION TO BE CHANGED FROM HERE --> */}

            {/* <div className="container mt-1 mb-5"> */}
               <div className={`${styles.cardcontainer} d-flex justify-content-center`}> 
               
               <div className={changePlan === 1 ? styles.ActivePlanSection : styles.InactivePlanSection}>
                 <div className={styles.cardDimensions1}>
                    <PlanCard name='Hulu (No Ads)' inc='Get First Month Free, Then' price='$17.99' desc='Our Hulu (No Ads) plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more with no ad interruptions.'/>
                 </div>
                 <div className={styles.cardDimensions2}>
                    <PlanCard name='Hulu' inc='Get First Month Free, Then' price='$7.99' desc='Our Hulu (With Ads) plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more.'></PlanCard>
                 </div>
               </div>

                <div className={changePlan === 2 ? styles.ActivePlanSection : styles.InactivePlanSection}>
                 <div className={styles.cardDimensions3}>
                    <PlanCard name='Disney Bundle Trio Premium' img={huluDisneyEspn} inc='Get First Month Free, Then' price='$24.99 ' desc='Access live sports with ESPN+ (With Ads), endless entertainment with Disney+ (No Ads), and award-winning Hulu Originals with Hulu (No Ads).'/>
                 </div>
                 <div className={styles.cardDimensions4}>
                    <PlanCard name='Disney Bundle Trio Basic' img={huluDisneyEspn} inc='Get First Month Free, Then' price='$14.99 ' desc='Access live sports with ESPN+ (With Ads), endless entertainment with Disney+ (With Ads), and award-winning Hulu Originals with Hulu (With Ads). *Savings compared to regular monthly price of each service.'></PlanCard>
                 </div>
                </div>

              </div>


              {/* <div className={styles.info} style={{display: 'flex', width: '600px', marginInline: 'auto', marginBlock: '20px'}}>
                <p style={{color: '#6f78a4', fontSize: '12px'}}>A few excluded shows play with ads. &nbsp;</p> 
                <img src={info} alt=""/>
              </div> */}
            {/* </div>  */}



            {/* Looking for our student discount?*/}
            <Link to='/student'>
                <p style={{textDecoration:'none', margin: '120px 0px 80px 0px', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.5px'}}>Looking for our student discount?</p>
            </Link>
            

        
            {/* <!-- BUNDLE ENDS HERE  --> */}

            <div style={{color: '#6f78a4', fontSize: '14px', margin: '0px 150px'}} className="links d-flex justify-content-between mt-5">
                <p>About Ads</p>
                <p>Subscriber Agreement</p>
                <p>Privacy Policy</p>
                <p>Do Not Sell or Share My Personal Information</p>
                <p>Your US State Privacy Rights</p>
                <p>© 2023 Hulu, LLC</p>
            </div>
            </main>

        </div>
        </>
   )
} 

export default Plan