import React, {useState} from 'react'
import styles from './Executives.module.css' 
import JoeEarley from '/src/assets/images/JoeEarley.jpg'
import LaurenTempest from '/src/assets/images/lauren-tempest.webp'
import AprilCarretta from '/src/assets/images/April-Carretta.jpg'
import ArunChandra from '/src/assets/images/Arun-Chandra.jpg'
import CraigErwich from '/src/assets/images/Craig-Erwich.jpg'
import ReaganFeeney from '/src/assets/images/Reagan-Feeney.jpg'
import barrieGruner from '/src/assets/images/barrie-gruner.jpg'
import AngieKangPark from '/src/assets/images/Angie-Kang-Park.jpg'
import LukasHeadshot from '/src/assets/images/LukasHeadshot.jpg'


const Executives = () => {

  const ExecutiveTiles = [
    {
      id: 1,
      execName: 'Joe Earley',
      execDesignation: 'President, Direct-to-consumer',
      profilePic:JoeEarley
    },
    {
      id: 2,
      execName: 'Lauren Tempest',
      execDesignation: 'General Manager',
      profilePic: LaurenTempest
    },
    {
      id: 3,
      execName: 'April Carretta',
      execDesignation: 'VP, DTC & Platform Distribution Communications',
      profilePic: AprilCarretta
    },
    {
      id: 4,
      execName: 'Arun Chandra',
      execDesignation: 'Senior Vice President, Viewer Experience',
      profilePic: ArunChandra
    },
    {
      id: 5,
      execName: 'Craig Erwich',
      execDesignation: 'President, Disney Television Group',
      profilePic: CraigErwich
    },
    {
      id: 6,
      execName: 'Raegen Feeney',
      execDesignation: 'Senior Vice President, Live TV Content Programming and Partnerships',
      profilePic: ReaganFeeney
    },
    {
      id: 7,
      execName: 'Barrie Gruner',
      execDesignation: 'Executive Vice President, Marketing and Publicity',
      profilePic: barrieGruner
    },
    {
      id: 8,
      execName: 'Angie King',
      execDesignation: 'Deputy Chief Counsel',
      profilePic: AngieKangPark
    },
    {
      id: 9,
      execName: 'Lukas Wickart',
      execDesignation: 'Senior Vice President, Finance, Direct-to-Consumer',
      profilePic: LukasHeadshot
    },
  ]
  const [data] = useState(ExecutiveTiles);

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
        exeFolio: "Lauren Tempest was named General Manager of Hulu in July 2023, taking on responsibility for the Hulu business and reporting directly to Joe Earley. She previously served as SVP of Content Partnerships, Acquisitions and Scheduling, where she oversaw Hulu’s robust library of content, working closely with The Walt Disney Company’s content engines including Disney Television Studios (20th Television, 20th Animation Television, ABC Signature), Hulu Originals, FX, 20th Century Studios and Searchlight Pictures, to deliver the most in-demand titles to consumers. In that role, she also worked with the company’s third-party partners to acquire top SVOD titles, which recently included critically-acclaimed and fan-favorite . During her tenure with that team, Tempest was part of the group that established a new strategic scheduling framework and drove partnerships with TWDC content brands as they launched high-performing tentpole titles like Tempest is based in Los Angeles where she joined Hulu in 2015, after six years with NBCUniversal’s USA Network."
    },
    {
    id: 3,
    exeName: 'April Carretta',
    designation: 'VP, DTC & Platform Distribution Communications',
    picture: AprilCarretta,
    exeFolio: "As VP of Communications for Direct-To-Consumer and Platform Distribution, April Carretta leads the team responsible for all communications efforts in support of The Walt Disney Company’s portfolio of direct-to-consumer video streaming businesses, including corporate and brand, public relations, crisis, and incident management as well as internal employee engagement. Carretta also oversees the Platform Distribution team that drives communications strategy behind all third-party media sales efforts for distribution and affiliate-related business operations for all of the Company’s direct-to-consumer services and linear media networks, in addition to global content sales and licensing for Disney Entertainment and ESPN. Prior to joining Disney, April spearheaded a global integrated marketing communications and strategic partnerships team at Twentieth Century Fox. She oversaw all aspects of global communications for the in-home and new and emerging technology division, including the Fox Innovation Lab and FoxNext. A seasoned executive with over 20 years of experience, April has also pioneered innovative, consumer-centric marketing and global communication strategies for top companies including Edelman and Sony Pictures. April earned a Bachelor of Arts in Psychology, Public Relations, and Journalism from the University of Tennessee, Knoxville."
    },
    {
    id: 4,
    exeName: 'Arun Chandra',
    designation: 'Senior Vice President, Viewer Experience',
    picture: ArunChandra,
    exeFolio: "Arun Chandra is the Senior Vice President of Viewer Experience (VX) at Disney Streaming, overseeing all support channels for subscribers globally across Disney+, Hulu, ESPN+ and Star+. He leads the development and execution of frictionless self-service and seamless assisted support strategies to deliver an industry leading experience for Disney Streaming’s viewers. His team manages all aspects of internal and outsourced VX operations, including VX technology roadmaps, data analytics, insights, launches, business operations, partner management, training, quality, and workforce management for the large workforce that supports our subscribers. Prior to joining Disney, Chandra served as VP of Scaled Operations at Meta, where he led the team that handled millions of transactions daily for multiple lines of business including customer support, commerce, payments, integrity, and labeling to serve Facebook’s vast community. Before his role at Meta, Chandra was the SVP of Global Operations at HP Enterprise, where he spearheaded the global supply chain and customer operations to drive revenue, cost, and customer experience for the company. He also led Diversity, Equity & Inclusion initiatives and was the executive sponsor and ally for the Women@ ERGs at both Meta and HPE. He currently serves in advisory roles for multiple educational non-profits and is a member of the Board of Directors at Saint Francis High School as well as the Advisory Board at Santa Clara University’s Leavey School of Business. Chandra holds a MS in Computer Science from The Ohio State University and an MBA from Santa Clara University and is based in the San Francisco Bay Area."
    },
    {
    id: 5,
    exeName: 'Craig Erwich',
    designation: 'President, Disney Television Group',
    picture: CraigErwich,
    exeFolio: "Craig Erwich is president of Disney Television Group inclusive of content strategy across ABC Entertainment, Disney Branded Television, Freeform and Hulu Originals programming, reporting to Dana Walden, co-chairman, Disney Entertainment. Erwich has been at the helm of Hulu Originals, leading development and strategy for Hulu’s original series since April 2014. He has overseen the diverse slate of Hulu’s premium content including the Emmy. For the past three consecutive seasons, ABC Entertainment has ranked No. 1 in entertainment among Adults 18-49, fueled by breakout hits like “Abbott Elementary,” the network’s highest-rated comedy debut in two years. With Erwich’s oversight, the critically acclaimed show has become a cultural phenomenon, winning three Emmys and three Golden Globes its freshman season. In total, ABC received 23 Emmy nominations in 2022, including a third consecutive nod for “Live in Front of a Studio Audience,” which has been a pillar of the network’s expanded live event and unscripted programming strategy. ABC is also home to television’s longest-running primetime medical drama, “Grey’s Anatomy,” which recently celebrated its historic 400th episode and remains the network’s No. 1 drama and No. 1 entertainment series; and “The Bachelor” franchise, its No. 1 unscripted series. Additionally, ABC Entertainment continues to be at the forefront of the industry’s Diversity & Inclusion movement, having implemented standards to ensure that there are multidimensional voices in positions of influence across the entire creative and production process. In February 2023, Erwich assumed oversight of linear programming for Disney Branded Television and Freeform. Disney Branded Television produces imaginative premium content for kids, tweens, teens and families for Disney+, Disney Channel, Disney XD and Disney Junior. Responsible for some of the most beloved and iconic characters in kids entertainment, the group continues to innovate, developing fresh new concepts for both signature and new original franchises. Shows like “Spidey and his Amazing Friends,” “Mickey Mouse Clubhouse,” “Firebuds,” “Superkitties,” “Raven’s Home,” “Hamster & Gretel,” and “Big City Greens” helped lead Disney’s kids networks to continued dominance in 2022, with Disney Channel earning the No. 1 spot for Kids and Girls 6-11, and Disney Junior closing the year as the No. 1 network for Kids 2-5. Erwich first added Disney Branded Television streaming strategy and content oversight in September 2022, just as the division began to expand into premium family programming for Disney+. The alignment of Disney Branded Television into his purview leveraged his expertise in streaming, bolstering Disney Branded Television’s content strategy for fueling Disney+ with broad, family-appealing original programming. Recent and upcoming banner projects for Disney+ include “National Treasure: Edge of History,” “American Born Chinese,” “The Santa Clauses,” “Percy Jackson and The Olympians” and “Goosebumps,” among many others. Freeform’s distinct brand of coming-of-age programming helps to position it as the No. 1 primetime cable network in entertainment among Adults and Women 18-34 in the 2022-2023 TV season to date. Connecting to audiences with its bold original programming and immersive social engagement, Freeform channels the force and momentum of its young adult audience in its quest for progress with authentic, groundbreaking original series such as Emmy-nominated “grown-ish,” “Good Trouble,” “Single Drunk Female” and “Cruel Summer,” which was the No. 1 new cable drama of 2021 among Women 18-34. In 2022, “grown-ish” and “Single Drunk Female” ranked among cable’s Top 10 live-action original comedy series in key women demos. In September 2022, in addition to Disney Branded Television streaming content strategy, Erwich assumed oversight of Walt Disney Television Alternative, the newly formed unscripted production unit led by Rob Mills. To date, WDTA has launched “Claim to Fame,” “Judge Steve Harvey” and “The Final Straw” for ABC, as well as the upcoming animated and live-action blended special, “Beauty and the Beast: A 30th Celebration. Erwich previously served as the EVP of Warner Horizon Television (WHTV), a division of Warner Bros. Television Group, where he oversaw development, production and business operations. Before joining WHTV, he served as EVP of Programming at FOX Broadcasting Company for 12 years where he was instrumental in the development of hit series such as “24,” “House,” “Prison Break” and “The O.C.”"
    },
    {
    id: 6,
    exeName: 'Reagan Feeney',
    designation: 'Senior Vice President, Live TV Content Programming and Partnerships',
    picture: ReaganFeeney,
    exeFolio: "Reagan Feeney is the SVP of Live TV Content Programming and Partnerships at Hulu. In her role, she is responsible for setting the vision and strategic direction for live TV distribution, including managing partnerships with national channels, regional sports networks, and local broadcast affiliates. Reagan’s team also leads the strategy and execution of live news, sports, events, and programming made available for Hulu on-demand subscribers, along with premium add-ons, ESPN+ on Hulu, and ABC News Live specials. Previously, Reagan was VP of content at AT&T’s DirecTV, where she was responsible for identifying and negotiating general entertainment and sports programming acquisitions, as well as maintaining external business relationships for linear cable channels, out-of-market sports subscription packages, regional sports networks and on-demand sports content. She originally joined DirecTV’s programming acquisitions in 1997. Reagan holds a bachelor’s degree in History from Boston College. "
    },
    {
    id: 7,
    exeName: 'Barrie Gruner',
    designation: 'Executive Vice President, Marketing and Publicity',
    picture: barrieGruner,
    exeFolio: "Barrie Gruner is executive vice president, Marketing and Publicity, Hulu. In this role, Gruner oversees marketing strategy, paid and owned media, creative, subscriber acquisition, engagement & retention, events, social media, brand/device partnerships and communications for Hulu – inclusive of the brand and Hulu Originals which includes titles such as “The Handmaid’s Tale,” “The Kardashians” “Nine Perfect Strangers” and “Only Murders in the Building.” Since joining Hulu in 2013, Gruner has helped guide the company to its current position as the preeminent destination for premium streaming content. She drove both communications and awards strategy that helped launch “The Handmaid’s Tale,” which went on to sweep the 2017 Emmy Awards, including the award for Outstanding Drama Series that cemented Hulu in history as the first streaming platform to take home the prestigious honor. Over the past year, Gruner led marketing campaigns for several marquee titles including “Only Murders in the Building,” leading it to become the most-watched comedy in Hulu history, and “The Kardashians,” the most-watched unscripted series and premiere in Hulu history. She also recently added all marketing functions for Hulu to her purview. Gruner is a marketing and publicity visionary who has been recognized with both the Variety Digital Marketing Impact 2022 list and Variety New Leaders 2020. In 2022, her team took home 18 ProMax awards for their outstanding work in the entertainment marketing space and she helped lead the way for Emmy campaigns that earned Hulu Originals a record 58 nominations. Additionally in 2022, for the second consecutive year, Hulu Marketing was nominated for ProMax creative marketing team of the year under her leadership. Forever curious, she has experienced the industry through nearly every media type. She started her career in film (Miramax Films), then moved into books (Miramax Books), magazines (Entertainment Weekly), linear television (TNT and TBS), and ultimately streaming television (Netflix, then Hulu). Gruner is driven by building teams and developing talent, and prides herself on being a positive and inclusive leader. She is also an active member of BAFTA, HRTS and the Television Academy. Outside of work, she sits on the board of WHCHC, a nonprofit organization that builds homes and provides services that help lower-and-fixed-income people move from insecurity to stability."
    },
    {
    id: 8,
    exeName: 'Angie King',
    designation: 'Deputy Chief Counsel',
    picture: AngieKangPark,
    exeFolio: "Angie Kang Park is the Deputy Chief Counsel of Hulu, where she oversees the company’s legal and business affairs matters. Since starting at Hulu about a decade ago, Angie has led numerous high profile deals and initiatives that have grown Hulu’s content library to include some of the most in-demand, premium content in the market. Before Hulu, Angie was an Associate at Latham & Watkins, where she was responsible for mergers and acquisitions, public company representation and corporate finance transactions across a wide range of industries including technology, media and entertainment. She holds a B.A. in Communication Studies and Policy Studies from UCLA and a J.D. from The University of California, Berkeley, School of Law."
    },
    {
    id: 9,
    exeName: 'Lukas Wickart',
    designation: 'Senior Vice President, Finance, Direct-to-Consumer',
    picture: LukasHeadshot,
    exeFolio: "Lukas Wickart is the Senior Vice President and Chief Financial Officer for The Walt Disney Company’s direct-to-consumer video streaming businesses, leading Finance for Disney+, Hulu, ESPN+, and Star+. He joined Disney through the acquisition of Hulu, where he was the Vice President of Finance for Hulu’s Subscription Business, overseeing all financial activities related to the company’s revenue generation including subscriber growth, marketing and advertising sales. Prior to his time at Disney and Hulu, Lukas was the Chief Financial Officer of Daimler’s digital retailing platform AutoGravity, where he led multiple adjacent growth investments to secure Daimler’s leadership position in the future of transportation services along with building the company’s direct to consumer business. Lukas launched his career as a project leader with The Boston Consulting Group, where he advised leading Fortune 500 corporations on strategy development with focus on business expansion and operational excellence. Lukas holds an MBA from the Harvard Business School and a bachelor’s degree majoring in Finance from the University of St. Gallen. He served in the Swiss Air Force and holds a Commercial Pilots License."
    },
  ]
  const [data1] = useState(executivesBio)


  // BIOPAGE FUNCTIONALTY //
  const [selectedTile, setSelectedTile] = useState(null);

  const titleHandler = (index) => {
      setSelectedTile(index)
  }

  const closeHandler = () => {
      setSelectedTile(null)
  }

  const downloadHandler = (execName) => {
    const picture = data1[selectedTile]?.picture;
    const link = document.createElement('a');
    link.href = picture;
    link.download = execName; 
    link.click();
  }

  return (
    <>
    <div className={styles.BioMainContainer}>
      <div className={`${styles.grid} container`}>
        {data.map((item, index) => {
          return (
            <>
              <div className={styles.profile} onClick={() =>titleHandler(index)}>
                <div className={styles.info}>
                    <img src={item.profilePic} alt={item.execName} />
                    <p className={styles.name}>{item.execName}</p>
                    <p className={styles.designation}>{item.execDesignation}</p>
                </div>
                <button id={styles.profileBtn}>VIEW BIO</button>
              </div>
            </>
          )
        })}
      </div>

      {selectedTile !== null && <div className= {styles.bioPagesActive}>
      <div className={styles.outerDiv}>
        {data1.map((item, index) => {
          return (
            <>
           
              <div className={styles.bioPage}>
                  <div className={styles.closeButtonGrp} onClick={closeHandler}>
                    <div className={styles.closeBtn}>&times;</div>
                  </div>

                  <div className={styles.allInfoContainer}>
                    <div className={styles.profilePictureGrp}>
                      <img className={styles.execPicture} src={data1[selectedTile]?.picture} alt="" />
                      <svg onClick={downloadHandler} xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" className={styles.downloadIcon}>
                        <g fill="none" fill-rule="evenodd" transform="translate(.25)">
                          <rect width="16" height="3" y="17" fill="#151515"></rect>
                          <g stroke="#151515" stroke-width="3.15" transform="translate(1)">
                            <line x1="7" x2="7" y1="14"></line>
                            <polyline points="0 6.65 7 13.65 14 6.65"></polyline>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className={styles.executiveInfoGrp}>
                      <p className={styles.execName}>{data1[selectedTile]?.exeName}</p>
                      <p className={styles.execDesignation}>{data1[selectedTile]?.designation}</p>
                      <p className={styles.folio}>{data1[selectedTile]?.exeFolio}</p>
                      <p className={styles.copy}>Copy Bio</p>
                    </div>
                  </div>
              
              </div>
          
            </>
          )
        })}
      </div>
      </div>
      }
    </div>
    </>
  )
}



export default Executives