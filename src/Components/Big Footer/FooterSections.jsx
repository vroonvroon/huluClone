import React, { useState } from 'react'
import styles from './FooterSections.module.css'


const FooterData2 = [
    {
        id: 2,
        links: 'HELP',
        sublinks: ['Account & Billing', 'Plans & Pricing', 'Supported Devices', 'Accessibility']
    },
    {
        id: 3,
        links: 'ABOUT US',
        sublinks: ['Shop Hulu', 'Press', 'Jobs', 'Contact', 'Guides | What to Watch']
    },
]

const FooterSections = () => {

    const [data] = useState(FooterData2);
    const [open, setOpen] = useState(1);
    const [selected, setSelected]= useState(false);


  return (
    <>
    <div className={styles.sectionContainer}>
        {data.map((item ) => {
                    return (
                        <>
                        
                         <div className={styles.linkSections}>

                            <div className={`d-flex justify-content-between align-items-center ${styles.linkBlock}`} onClick={() =>setOpen(!open)}>  
                            <p className={styles.linkHeader}>{item.links}</p>
                                <svg className='accordianArrow' viewBox="0 0 24 24" width="18px" height="18px" fill="black" xmlns="http://www.w3.org/2000/svg" data-testid="ChevronDownIcon" focusable="false" aria-hidden="true" ><path fill-rule="evenodd" clip-rule="evenodd" d="M12.707 16.707a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L12 14.586l7.293-7.293a1 1 0 111.414 1.414l-8 8z"></path>
                                </svg>
                            </div>
                            
                    
                                <div className={open === selected ? styles.Activelistofsublinks : styles.listofsublinks}>  
                                {item.sublinks.map((sublink) => (
                                    <>
                                    <div className={styles.subsublinksGrp}>
                                        <li className={styles.sublinks}><>{sublink}</></li>
                                    </div>
                                    </>
                                ))}
                                </div>  
                          </div>
                   
                        </>
                    )
                })}  
    </div>
    </>
  )
}

export default FooterSections