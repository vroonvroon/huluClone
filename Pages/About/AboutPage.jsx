import React, { useRef, useState } from 'react'
import styles from './About.module.css'
import Navbar from '../../src/Components/Navbar/Navbar'
import abtusHulu from '/src/assets/images/abtus-hulu.webp'
import JoeEarley from '/src/assets/images/JoeEarley.jpg'
import LaurenTempest from '/src/assets/images/lauren-tempest.webp'
import AprilCarretta from '/src/assets/images/April-Carretta.jpg'
import ArunChandra from '/src/assets/images/Arun-Chandra.jpg'
import CraigErwich from '/src/assets/images/Craig-Erwich.jpg'
import ReaganFeeney from '/src/assets/images/Reagan-Feeney.jpg'
import barrieGruner from '/src/assets/images/barrie-gruner.jpg'
import AngieKangPark from '/src/assets/images/Angie-Kang-Park.jpg'
import LukasHeadshot from '/src/assets/images/LukasHeadshot.jpg'
import Executives from '../../src/Components/Executives/Executives'
import SmallFooter from '../../src/Components/SmallFooter/SmallFooter' 
import TimelineSlides from '../../src/Components/TimelineNav/TimelineSlide/TimelineSlides.jsx'
import CorporateDataWindow from '../../src/Components/CorporateDataWindow/CorporateDataWindow'
import { CorporateDataInfoWindow } from '../../src/Components/CorporateDataWindow/CorporateDataInfoWindow'
import BackToTop from '../../src/Components/BackToTopButton/BackToTop'




const AboutPage = () => {

    const [changeSection, setChangeSection] = useState(1);

    const handleClick = (id) => {
        setChangeSection(id)
    }

    const para = useRef(null); 

    const copyHandler = () => {
         console.log(para.current.innerText);
         const copiedText=
         para.current.innerText;
         navigator.clipboard.writeText(copiedText);
    }

    const executivesBio = [
        {
          id: 1,
          exeName: 'Joe Early',
          designation: 'President, Direct-to-Consumer',
          picture: JoeEarley,
          exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
            id: 2,
            exeName: 'Lauren Tempest',
            designation: 'General Manager',
            picture: LaurenTempest,
            exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 3,
        exeName: 'April Carretta',
        designation: 'VP, DTC & Platform Distribution Communications',
        picture: AprilCarretta,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 4,
        exeName: 'Arun Chandra',
        designation: 'Senior Vice President, Viewer Experience',
        picture: ArunChandra,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 5,
        exeName: 'Craig Erwich',
        designation: 'President, Disney Television Group',
        picture: CraigErwich,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 6,
        exeName: 'Reagan Feeney',
        designation: 'Senior Vice President, Live TV Content Programming and Partnerships',
        picture: ReaganFeeney,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 7,
        exeName: 'Barrie Gruner',
        designation: 'Executive Vice President, Marketing and Publicity',
        picture: barrieGruner,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 8,
        exeName: 'Angie King',
        designation: 'Deputy Chief Counsel',
        picture: AngieKangPark,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
        {
        id: 9,
        exeName: 'Lukas Wickart',
        designation: 'Senior Vice President, Finance, Direct-to-Consumer',
        picture: LukasHeadshot,
        exeFolio: "Joe Earley is the President of Direct-to-Consumer, Disney Entertainment, where he leads efforts to expand and elevate the company’s best-in-class streaming services, utilizing the impactful and resonant programming and engagement offerings across Disney+ and Hulu. Earley joined Disney in January 2019 to oversee global Disney+ marketing and operations in the leadup to its hugely successful November launch that year, adding responsibility for content curation in 2021 as the service expanded to dozens of markets worldwide. He most recently served as President of Hulu, a role he was named to in January 2022, where he managed the platform’s suite of on-demand and live streaming businesses, delivering record subscribers. Before joining Disney, Joe served as president of The Jackal Group, where he oversaw all areas of the studio’s television, film, commercial theater and digital divisions, with productions ranging from “Tidying Up with Marie Kondo” to the animated feature film “The Addams Family. Prior to The Jackal Group, Joe was a Fox executive for over two decades, starting as a Senior Publicist and rising through the ranks to President of Marketing & Communications, Chief Operating Officer of Fox Broadcasting Company, and eventually Chief Operating Officer of Fox Television Group.  Before joining Fox, Joe spent several years in media relations at HBO. He began his entertainment career in production and development with producer Gale Anne Hurd. A member of ATAS and PGA, and native of Chicago, Joe holds a B.A. in Mass Communications from UCLA."
        },
    ]

    const [data, setData] = useState(executivesBio);
      
    const [selectedExec, setSelectedExec] = useState(null);

    const handleExecClick = (index) => {
        setSelectedExec(index);
    };

  return (
    <>
      
      <Navbar />
 
      {/* NAV ENDS HERE  */}

    <div className={styles.header}>
    <div className={styles.headerCont}>
        <span className={styles.headerBg}></span>
        <h1>ABOUT HULU</h1>
    </div>
    </div>


            {/* SLIDER TO CHNAGE TO SECTION  */}

    <section>

    <div className={styles.sectionsContainer}>

     <div className={styles.sliderHeadingGrp}>
        <div className={styles.tabs}>
            <p className={styles.sectionHeading} onClick={() => handleClick(1)}>CORPORATE</p>
            <p className={styles.sectionHeading} onClick={() => handleClick(2)}>EXECUTIVES</p>
        </div>
        <span className={changeSection === 2 ? styles.sliderMove : styles.slider}></span>
      </div>
    </div>

        {/* <!----------- CORPORATE SECTION ------------> */}

    <div className={changeSection === 1 ? styles.ActiveSection : styles.InactiveSection}>
        <div className={styles.Boxes}>
           <CorporateDataWindow windowData={CorporateDataInfoWindow}/>
        </div>
  

        {/* <!-- </section> --> */}

        {/* <!-- // ------------- TIMELINE SLIDER (CONTAINER2) STARTS -------------- //  --> */}

    <div className={styles.container2}>
        <p className={styles.Story}>Our Story</p>
        <TimelineSlides />
    </div>

    
        {/* <!-- // ------------- CONTAINER2 (TIMELINE SLIDER) ENDS -------------- //  --> */}


            {/* <!-- //ABOUT HULU  --> */}


    <div className={styles.aboutHuluSection}>
        <div className={styles.aboutFlex}>
            <div className={styles.aboutUsInfo}>
                <p className={styles.aboutHuluHeading}>About Hulu</p>
                <p className={styles.aboutContent} ref={para}>Hulu is the leading and most comprehensive all-in-one premium streaming service that offers an expansive slate of live and on-demand entertainment, both in and outside the home, through a wide array of subscription options that give costumers ultimate control over their viewing experience. As a part of the disney entertainment segment, Hulu is the only on-demand offering that provides access to shows from every major U.S. broadcast networklibraries of hit TV series and films- including licenced content exclusively available on Hulu - and award winning originals, both with and without commercials. With Hulu + live TV, subcribers receive a unique combination of access to 90 + live news, entertainment and sports TV channels from 20th Television, The Walt Disney Company, ABC, NBCUniversal, CBS Corporation, The CW, Turner Networks, A+E Networks and Discovery Networks, as well as Hulu's on demand library, Disney+ and ESPN+ included as part of the base plan. Visit Hulu.com to subscribe or learn more about the service.</p>
                <p style={{fontWeight: '700', cursor: 'pointer'}} onClick={copyHandler}>Copy Text</p>
            </div>
            <img src={abtusHulu} className={styles.aboutImg} />
        </div>
    </div>

    <div className={styles.contact}>
        <p style={{fontSize: '17px', fontWeight: '400', marginBottom: '16px'}}><em>For Hulu originals please contact <u>DGE.hulumedia@disney.com</u></em></p>
        <p style={{fontSize: '17px', fontWeight: '400'}}><em>For general inquiries please contact <u>hulu.media.relations@disney.com</u></em></p>
    </div>

    </div> 


            {/* <!------------- EXECUTIVES --------------> */}

    <div className={changeSection === 2 ? styles.ActiveSection : styles.InactiveSection}>
        <div className={`${styles.execHeader} container my-5`}>Our Executive Team</div>
        <Executives />
    </div>

    </section>

                  {/* FOOTER  */}

    <SmallFooter />

    {/* // SCROLL TO TOP BUTTON  */}
    
    <BackToTop />

    </>
  )
}

export default AboutPage

