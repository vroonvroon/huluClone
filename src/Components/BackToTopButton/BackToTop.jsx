import React, {useState, useEffect} from 'react'
import backtoTop from '/src/assets/images/back-to-top-icon.svg'
import styles from './BackToTop.module.css'


const BackToTop = () => {

    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(0);


    const progressContainerStyle = {
        backgroundColor: '#e6e6e6',
        position: 'absolute',
        display: 'grid',
        placeItems: 'center',
        width: '46px',
        height: '46px',
        borderRadius: '50px',
    };
  
    const progressBarStyle = {
        backgroundColor: "black",
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50px',
        zIndex: 999
      };

    const progressCircle = {
        backgroundColor: 'white',
        borderRadius: '50px',
        position: 'absolute',
        display: 'grid',
        placeItems: 'center',
    }
    
    const topArrow = {
        width: '16px',
        margin: '13px',
    }

    

    const calculateScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.round((totalScroll * 100) / heightWin)
        console.log(scrolled);
    };

    // VISIBILITY OF SCROLL TO TOP BUTTTON ON SCROLL
    const toggleVisibility = () => {
      if (window.scrollY > 90) {
        setVisible(true);
        setScrolled();
      } else {
        setVisible(false);
      }
    };
    

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility),
      window.addEventListener('scroll', calculateScroll);
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, []);
  
    // CLICK TO GO TO TOP
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };


  return (
    <>
    {visible && <div style={progressBarStyle} onClick={scrollToTop}>
        <div style={progressContainerStyle}>
        <span style={progressCircle}>
            <img src={backtoTop} style={topArrow}/>
        </span>
        </div>
    </div>}
    </>
  )
}


export default BackToTop

