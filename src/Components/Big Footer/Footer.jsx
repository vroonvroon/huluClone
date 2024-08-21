import React, { useState } from "react";
import './Footer.css'
import facebook from '/src/assets/images/facebook.svg'
import twitter from '/src/assets/images/twitter.svg'
import youtube from '/src/assets/images/youtube.svg'
import instagram from '/src/assets/images/instagram.svg'
import { FooterData } from "./FooterData";
import FooterSections from "./FooterSections";
import { Link } from 'react-router-dom';


const Footer = () => {

    const [data] = useState(FooterData);
    const [open, setOpen] = useState();
    const [open2, setOpen2] = useState();
    const [open3, setOpen3] = useState();
    const [selected, setSelected]= useState(false);
    const [selected2, setSelected2]= useState(false);
    const [selected3, setSelected3]= useState(false);
    

    const FooterData2 = [
        {
            id: 2,
            links: 'HELP',
            sublinks: ['Account & Billing', 'Plans & Pricing', 'Supported Devices', 'Accessibility']
        },
       
    ]  
    
    const FooterData3 = [
        {
            id: 3,
            links: 'ABOUT US',
            sublinks: ['Shop Hulu', 'Press', 'Jobs', 'Contact', 'Guides | What to Watch']
        },
    ]



    return (
        <>
        <div className="footer">
            <div className="allQuickLinks">
                <div className='quick-links'>
                    {data.map((item ) => {
                        return (
                            <>
                            <div className="linkSections">
                                <div className="d-flex justify-content-between align-items-center linkBlock" onClick={() =>setOpen(!open)}>  
                                <p className="link-header">{item.links}</p>
                                    <svg className='accordianArrow' viewBox="0 0 24 24" width="18px" height="18px" fill="black" xmlns="http://www.w3.org/2000/svg" data-testid="ChevronDownIcon" focusable="false" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z"></path>
                                    </svg>
                                </div>
                                
                                <div className={open === selected ? "Activelistofsublinks" : 'listofsublinks'}>  
                                    {item.sublinks.map((sublink) => (
                                        <>
                                        <div className='subsublinksGrp'>
                                            <li className="sublinks"><>{sublink[0]}</></li>
                                            <li className="sublinks"><>{sublink[1]}</></li>
                                            <li className="sublinks"><>{sublink[2]}</></li>
                                            <li className="sublinks"><>{sublink[3]}</></li>
                                            <li className="sublinks"><>{sublink[4]}</></li>
                                            <li className="sublinks"><>{sublink[5]}</></li>
                                        </div>
                                        </>
                                    ))}
                                    
                                
                                </div>  
                            </div>
                            </>
                        )
                    })}  
                </div>

            <div className="quickLinksRow2">
                <div className='quick-links2'>
                    {FooterData2.map((item) => {
                        return (
                            <>
                        <div className="linkSections2">
                            <div className="d-flex justify-content-between align-items-center linkBlock" onClick={() =>setOpen2(!open2)}>  
                            <p className="link-header">{item.links}</p>
                                <svg className='accordianArrow' viewBox="0 0 24 24" width="18px" height="18px" fill="black" xmlns="http://www.w3.org/2000/svg" data-testid="ChevronDownIcon" focusable="false" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z"></path>
                                </svg>
                            </div>
                            
                            <div className={open2 === selected2 ? "Activelistofsublinks2" : 'listofsublinks2'}>  
                                {item.sublinks.map((sublink) => (
                                    <>
                                    <div className='subsublinksGrp2'>
                                        <li className="sublinks"><>{sublink}</></li>
                                    </div>
                                    </>
                                ))}
                            </div>  
                        </div>
                        </>
                        )
                    })}
                </div>

                <div className='quick-links3'>
                    {FooterData3.map((item) => {
                        return (
                            <>
                        <div className="linkSections3">
                            <div className="d-flex justify-content-between align-items-center linkBlock" onClick={() =>setOpen3(!open3)}>  
                            <p className="link-header">{item.links}</p>
                                <svg className='accordianArrow' viewBox="0 0 24 24" width="18px" height="18px" fill="black" xmlns="http://www.w3.org/2000/svg" data-testid="ChevronDownIcon" focusable="false" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z"></path>
                                </svg>
                            </div>
                            
                            <div className={open3 === selected3 ? "Activelistofsublinks3" : 'listofsublinks3'}>  
                                {item.sublinks.map((sublink) => (
                                    <>
                                    <div className='subsublinksGrp3'>
                                        <li className="sublinks"><>{sublink}</></li>
                                    </div>
                                    </>
                                ))}
                            </div>  
                        </div>
                        </>
                        )
                    })}
                </div>
            </div>

            </div>


                    {/* <FooterSections /> */}


            {/* </div> */}
           

            <div className="social-media-section">
                    <div className="social-media">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={instagram} alt="" />
                    </div>
                <div className="extra-links">
                    <p className="about-ads">About Ads</p>
                    <p>Subscriber Agreement</p>
                    <p>Privacy Policy</p>
                    <p>Do Not Sell My Personal Information</p>
                    <p>Your California Privacy Rights</p>
                    <p>TV Parental Guidelines</p>
                    <p>Sitemap</p>
                    <p>© 2024 Hulu, LLC</p>
                </div>
            </div>
        </div>
</>
    )
}

export default Footer;