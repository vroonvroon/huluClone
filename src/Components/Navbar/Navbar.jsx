import React, { useState, useEffect, createContext } from 'react'
import styles from './Navbar.module.css'
import logo from '/src/assets/images/Hulu-Logo.png'
import dropDown from '/src/assets/images/dropdown.svg'
import LogIn from '../LogInModal/LogIn'
import { useLocation, Link } from 'react-router-dom';



export const LogInContext = createContext();

const Navbar = () => {

    const [modal, setModal] = useState(false);

    const navHeadImg = {
        width: '14px', 
        height: '14px'
    }

    const li ={
        marginRight: '5px',
    }

    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setStickyNav(true);
          } else {
            setStickyNav(false);
          }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
     }, []);
    
     const [navShow, setNavShow] = useState(false);

     const searchHandler = () => {
        setNavShow(!navShow)
     }

    const location = useLocation();
    const currentPage = location.pathname;


    ///  NAVBAR HEADERS SETTINGS ///
    const navItems = [
        { title: 'NEWS'},
        { title: 'GUIDES'},
        { title: 'SCHEDULE'},
        { title: 'ORIGINALS', subs: ['ALL', 'SERIES', 'FILMS', 'DOCUMENTARIES', 'ONYX COLLECTIVE'] },
        { title: 'FX', subs: ['ALL', 'SERIES', 'DOCUMENTARIES'] },
        { title: 'ASSETS', subs: ['BRAND', 'PRODUCT'] },
        { title: 'ABOUT', subs: ['CORPORATE', 'EXECUTIVES'] },
      ];

    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState({});
    const [auth, setAuth] = useState(localStorage.getItem('user'));


  return (
    <>
      <div className={`${styles.navbar} ${stickyNav ? styles.navActive : ''}`}>

        <div className={styles.left}>
            <div className={styles.logo}>
                <img src={logo} style={{width: '74px', height: '50px'}}/>
                <p style={{color: '#1ce783', fontSize: '18px', marginLeft: '-3px', marginTop: '3px'}}>PRESS</p>
            </div>

        <div>

        <div className={navShow? styles.hide : styles.null}>
                <ul className={styles.quicklinks}>
                {navItems.map((item, index) => (
                    <div key={index} className={styles.navbarHeadingsContainer}>
                        <div className={`${styles.navHeader} ${currentPage === `/${item.title.toLowerCase()}` ? styles.pageActive : ''} ${
                        hoveredItem === item.title ? styles.navHeaderHover : ''
                        }`}
                        onMouseOver={() => setHoveredItem(item.title)}>
                        <li>{item.title}</li>
                        {item.subs && <img src={dropDown} style={navHeadImg} />}
                        </div>
                        {hoveredItem === item.title && item.subs && (
                            <div className={styles.navSubsGrpShow}    onMouseLeave={() => {
                                setTimeout(() => {
                                  setHoveredItem(null);
                                }, 1000);
                              }}>
                                {item.subs.map((sub, subIndex) => (
                                <p key={subIndex} className={styles.navSubs}
                                style={{
                                    color: hoveredSubItem[item.title] === subIndex ? '#1ce783' : '#fff',
                                  }}
                                  onMouseOver={() => setHoveredSubItem({ ...hoveredSubItem, [item.title]: subIndex })}
                                  onMouseOut={() => setHoveredSubItem({ ...hoveredSubItem, [item.title]: null })}>
                                    {sub}
                                </p>
                                ))}
                            </div>
                        )}
                    </div>
                 
            ))}
                </ul>
            </div>
        </div>

            {/* <!-------- END OF NAV LINKS ------> */}

            <div className={styles.back}>
                <div className={navShow ? styles.searchContainerActive : styles.searchContainer}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="searchc" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <input type="text" placeholder="Search Here..." className={styles.searchBox} />
                </div>
            </div>

        </div>

        <div className={navShow ? styles.hideRight : styles.right}>
            <svg onClick={searchHandler} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className={styles.searchIcon} viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
              {!auth && <button type='button' className={styles.loginBtn} onClick={() =>setModal(true)}>LOG IN</button>}
        </div>
              <button type='button' className={navShow ? styles.closeBtn : styles.closeHidden } onClick={() => setNavShow(false)}>CLOSE</button>

              <LogInContext.Provider value={{modal, setModal}}>{modal && <LogIn/>}</LogInContext.Provider>

      </div>
    </>
  )
}

export default Navbar
