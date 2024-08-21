import React, { createContext, useState } from 'react'
import {Link} from 'react-router-dom'
import styles from './Billing.module.css'
import feedbackChevron from '/src/assets/images/feedbackchevron.svg'
import logo from '/src/assets/images/Hulu-Logo.png'
import downArrow from '/src/assets/images/Down_Arrow.svg'
import { BillingCardHeading } from '../../src/Components/h1/h1'
import headset from '/src/assets/images/icon_contactus.svg'
import { SubscriptionHelpArticleButton } from '../../src/Components/Buttons/Buttons'
import HelpCenterFeedback from './FeedbackPages/HelpCenterFeedback'
import ImprovementPage from './FeedbackPages/ImprovementPage'
import ChatBot from './ChatBot/ChatBot'



export const ForFeedbackCard = createContext('');

const Billing = () => {

    const scrollToTop = () => {
        window.scrollTo ({
            top: 70,
            behavior: "smooth",
        });
    }


    // Nav Login/ SignUp Menu
    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = () => {
       setshowMenu(!showMenu)
    }

    //FEEDBACK CARD TOGGLE
    const [showCard, setShowCard] = useState(false);
    const toggleCard = () => {
        setShowCard(!showCard)
    }


    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (e) => {
        setSelectedOption(e.target.id);
    };


    const [feedbackPage, setFeedbackPage] = useState('basePage');
    const pageNumber = ['1 of 3', '2 of 3', '3 of 3'];


    const pageDisplay = () => {
        if (selectedOption === 'option1'){
            setFeedbackPage('ImprovementPage')
        } else if (selectedOption === 'option2'){
            setFeedbackPage('HelpCenterFeedback')
        }
    };


  
    return (
    <>
      <div className={`${styles.navbar} + container-fluid`}>
         <div className={styles.leftSection}>
            <div className={styles.imgBox}>
                <img src={logo} alt="" style={{width: '100px', height: '65px'}}/>
                <p className={styles.logoText}>Help Center</p>
            </div>
            <div className={styles.quickLinks}>
                <ul>
                <Link to='/'>Home</Link>
                <Link to=''>Help Topics</Link>
                <Link to=''>Contact Us</Link>
                </ul>
            </div>
         </div>

         <div className={styles.rightSection}>
            <div className={styles.searchBarContainer}>
                <svg className={styles.searchIcon} focusable="false" data-key="search" aria-hidden="true" viewBox="0 0 520 520" part="icon"><g><path d="M496 453L362 320a189 189 0 10-340-92 190 190 0 00298 135l133 133a14 14 0 0021 0l21-21a17 17 0 001-22zM210 338a129 129 0 11130-130 129 129 0 01-130 130z"></path></g></svg>
                <input type="text" placeholder='How can we help?' className={styles.searchBar}/>
            </div>
            <div className='d-flex position-relative'>
                <div className={styles.LogIn} onClick={toggleMenu}>
                    <button style={{border: 'none', background: 'transparent', color: 'white'}}>Log In</button>
                    <img src={downArrow} alt="" style={{height: '9px'}}/>
                </div>
                <div className={showMenu ? styles.menu : styles.menuInactive}>
                    <p className={`${styles.loginText} px-3 py-3`}>Log In</p>
                    <Link to='/' style={{color: '#b1b1b3'}}><p className={`${styles.SignUpText} px-3 py-3`}>Sign Up for Hulu</p></Link>
                </div>
            </div>
         </div>
      </div>

      {/* NAVBAR ENDS  */}

<div className={styles.body}>

      <div className={styles.breadCrumbs}>
        <p>Help Center</p>  
        <p>Account & Billing</p>  
        <p>Changing your plans and add-ons</p>  
      </div>

    <div className={styles.cardContainer}>
        <div className={styles.card1}>
            <div className="changePlansSection">
            <BillingCardHeading>Changing your plans and add-ons</BillingCardHeading>
                <p className={styles.card1Text}>Hulu subscribers can <Link to=''>change plans</Link> or <Link to=''>manage add-ons</Link> directly from their <Link to=''>Account page</Link> on Hulu.com. 
                    If you do not see a <strong>MANAGE PLAN</strong> button on your Account page, you may be billed by a <Link to=''>third-party partner.</Link> If you are billed by a third party, you can manage your subscription through that billing partner.
                    If you’re <strong>billed directly by Hulu</strong>, changes to your subscription can be made by following these steps: 
                </p>
                <ol className={styles.steps}>
                    <li>Log in to your <Link to='' >Account page</Link> on a mobile or web browser</li>
                    <li>Navigate to the <strong>Your Subscription</strong> section</li>

                    <ul className={styles.points}>
                        <li>Select <strong>MANAGE PLAN</strong> — your current plan will be highlighted in green</li>
                        <li>To switch to a different plan, toggle the plan you want from <strong>OFF</strong> to <strong>ON</strong></li>
                        <li>Select <strong>MANAGE ADD-ONS</strong> — there will be a  <strong>(✓)</strong> next to any add-ons you currently subscribe to</li>
                        <li>Select  <strong>(+)</strong> next to add-ons you want to add, or toggle the  <strong>(✓)</strong> to an  <strong>(x)</strong> for any add-ons you’d like to remove</li>
                    </ul>

                    <li>Select <strong>Review Changes</strong> to confirm</li>
                
                </ol>
                
                <p className={styles.note}> <strong>NOTE</strong>: Eligible subscribers can <Link to=''>update payment information</Link> or <Link to=''>pause a subscription for up to 12 weeks.</Link></p>

                <p className={styles.toTopText} onClick={scrollToTop}><Link to=''>BACK TO TOP</Link></p>
            </div>

            {/* THIRD-PARTY SECTION STARS  */}

            <div className="my-5">
            <p className={styles.thirdPartyHeading}>Third-Party Billing</p>
                <p className={styles.thirdPartyText}>Plans and add-ons available to you may vary when billed by one of the third parties below. Additionally, there may be different steps to make changes to your subscription. You can confirm your billing party on your Hulu <Link to=''>Account page</Link> in the Payment Information section.<br></br>Select your billing party to learn more:</p>
            

                <ul className='mb-5'>
                    <li><Link to=''>Amazon</Link></li>
                    <li><Link to=''>Apple</Link></li>
                    <li><Link to=''>Disney</Link></li>
                    <li><Link to=''>Google</Link></li>
                    <li><Link to=''>Roku</Link></li>
                    <li><Link to=''>Spotify</Link></li>
                    <li><Link to=''>T-Mobile</Link></li>
                    <li><Link to=''>Verizon</Link></li>
                    <li><Link to=''>Xfinity</Link></li>
                </ul>

                <p className={styles.toTopText} onClick={scrollToTop}><Link to=''>BACK TO TOP</Link></p>
            </div>

             {/* THIRD-PARTY SECTION ENDS */}

             {/* HELP SECTION STARTS  */}
             

            <div className="mb-5">
                <div className='mb-4'>
                    <p className={styles.needHelpHeading}>Still need help?</p>
                    <p className={styles.needHelpText}>If you’re having trouble updating your subscription, please <Link to=''>contact us</Link> for additional support.</p>
                </div>

                <p className={styles.toTopText} onClick={scrollToTop}><Link to=''>BACK TO TOP</Link></p>
             </div>

             <div className={`${styles.question} py-4`}>
                <p className={styles.questionsText}>Did this article answer your question?</p>
                    <div className={styles.questionButtons}>
                       <SubscriptionHelpArticleButton>Yes</SubscriptionHelpArticleButton>
                       <SubscriptionHelpArticleButton>No</SubscriptionHelpArticleButton>
                    </div>
             </div>

        </div>

              {/* HELP SECTION ENDS  */}

              {/* CARD2 STARS  */}

        <div className={styles.card2}>
            <p className={styles.card2title}>Suggested Articles</p>
            <ul className={styles.suggestionslist}>
            <li><Link to=''>Activate Hulu and ESPN+</Link></li>
            <li><Link to=''>Sign up for the Disney Bundle</Link></li>
            <li><Link to=''>Pause Your Hulu Subscription</Link></li>
            </ul>
        </div>
    </div>

    {/* CARDS END  */}

    {/* MORE HELP SECTION  STARTS*/}

     <div className={`${styles.moreHelp} container-fluid`}>

        <div className={`${styles.moreHelpInfoContainer} container`}>
            <div className={styles.moreHelpleftSection}>
                <p style={{fontSize:'30px', fontWeight: '600'}}>Need more help?</p>
                <p style={{fontSize: '17px', width: '300px'}}>We are available for live support 24 hours a day 7 days a week.</p>
            </div>
            <div className={styles.moreHelpRightSection}>
                <img src={headset} alt="" />
                <div className="d-flex flex-column gap-2">
                    <p style={{fontSize: '20px', fontWeight: 'bold'}}>Contact Us</p>
                    <p style={{fontSize: '17px', width: '480px'}}>We're happy to assist you, whenever you need us. Log in to visit our Contact page for further assistance.</p>
                    <p style={{fontSize: '17px', fontWeight: 'bold'}}><Link to=''>Get in Touch</Link></p>
                </div>
            </div>
        </div>
     </div>

     {/* MORE HELP SECTION  STARTS*/}

     {/* FOOTER  */}

     <div className={styles.footer}>

     <div className={`${styles.footerContent} container`}>
        <div className="logo">
            <img src={logo} alt="" style={{width: '120px'}}/>
        </div>
        <ul className={styles.links}>
            <li>About Ads</li>
            <li>Subscriber Agreement</li>
            <li>Privacy Policy</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Your US State Privacy Rights</li>
        </ul>
        <p style={{fontSize: '12px', color: '#C5CAD3'}}>© 2024 Hulu, LLC</p>
     </div> 
     </div> 

     
     {/* FEEDBACK CARD  */}
    
    
    <ForFeedbackCard.Provider value={{showCard, setShowCard, setSelectedOption, setFeedbackPage}}>
        <div className={`${styles.feedbackCard} ${showCard ? styles.feedbackCardActive : ''}`}>

     <div className={styles.feedbackCardBody}>
        <div className={styles.form} style={{alignItems: 'normal'}}>
            <div className={styles.feebackCardHeader}>
                <img src={logo} className={styles.logo}/>
                <p className={styles.headerText}>Help Center</p>
                <div className={styles.feedBackcardPage}>
                    <p className={styles.pageNumbers}>{pageNumber[feedbackPage]}</p>
                </div>
            </div>

    <div className={styles.issueSection}> 
       <div className={styles.basePage} style={feedbackPage === 'basePage'? {} : {display: 'none'}}>
            <p className={styles.issueQuestion}>What type of feedback would you like to leave today?</p>
            <div className={styles.fcardButtons}>
                <input type="radio" id="option1" name="feedback-options" style={{display:'none'}} onChange={handleRadioChange} className={selectedOption ? styles.feedbackOptActive : styles.feedbackOpt}/> 
                <label htmlFor="option1">Suggest a Hulu improvement</label>
                <input type="radio" id="option2" name="feedback-options" style={{display:'none'}} onChange={handleRadioChange} className={selectedOption ? styles.feedbackOptActive : styles.feedbackOpt}/>
                <label htmlFor="option2">Help Center feedback</label>
            </div>

            <button className={selectedOption ? styles.submitbtnActive : styles.submitbtn} onClick={pageDisplay}>NEXT</button>
       </div>
                {feedbackPage === 'ImprovementPage' && <ImprovementPage />}
                {feedbackPage === 'HelpCenterFeedback' && <HelpCenterFeedback />}
    </div>

        </div>      
     </div>
    
     <div className={`${styles.bookmark} ${showCard ? styles.bookmarkActive : ''}`} onClick={toggleCard}>
         <img src={feedbackChevron} alt="" className={`${styles.feedBackChevron} ${showCard ? styles.feedBackChevronActive : ''}`}/>
         <p style={{fontWeight: '600', fontSize: '15px'}}>Feedback</p>
     </div>
     
    </div>

    </ForFeedbackCard.Provider>
   

     {/* CHATBOT  */}

      <ChatBot />

</div>

    </>
  )
}

export default Billing