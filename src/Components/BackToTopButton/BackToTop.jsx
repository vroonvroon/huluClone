import React, {useState, useEffect} from 'react'
import backtoTop from '/src/assets/images/back-to-top-icon.svg'
import styles from './BackToTop.module.css'


// export default class App extends Component {
//     state = {
//       scrollPostion: 0
//     }
  
//     listenToScrollEvent = () => {
//       document.addEventListener("scroll", () => {
//         requestAnimationFrame(() => {
//           this.calculateScrollDistance();
//         });
//       });
//     }
  
//     calculateScrollDistance = () => {
//       const scrollTop = window.pageYOffset; // how much the user has scrolled by
//       const winHeight = window.innerHeight;
//       const docHeight = this.getDocHeight();
  
//       const totalDocScrollLength = docHeight - winHeight;
//       const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
  
//       this.setState({
//         scrollPostion,
//       });
//     }
  
//     getDocHeight = () => {
//       return Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//       );
//     }
  
//     componentDidMount() {
//       this.listenToScrollEvent();
//     }
  
//     render() {
//       return (
//         <div className="App">
//           <Progress scroll={this.state.scrollPostion + '%'} />
//           <header></header>
//           <main>
//             <h1>Lorem Ipsum</h1>
//             <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <p>
//             ...
//             </p>
//           </main>
//         </div>
//       );
//     }
//   }



const BackToTop = () => {

    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(0);


    const progressContainerStyle = {
        // backgroundColor: 'black',
        backgroundColor: '#e6e6e6',
        // width: scrolled;
        // backgroundcolor: #e6e6e6,
        position: 'absolute',
        display: 'grid',
        placeItems: 'center',
        width: '46px',
        height: '46px',
        borderRadius: '50px',
    };
  
    const progressBarStyle = {
        // backgroundColor: "#e6e6e6",
        backgroundColor: "black",
        // width: scrolled;
        // backgroundcolor: #e6e6e6,
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

    // calculateScrollDistance = () => {
    //   const totalScroll = window.scrollY; // how much the user has scrolled by
    //   const winHeight = window.innerHeight;
    //   const docHeight = getDocHeight();
  
    //   const totalDocScrollLength = docHeight - winHeight;
    //   const scrollPostion = Math.floor(totalScroll / totalDocScrollLength * 100)
  
    //   setScrolled(scrollPostion);
    //   console.log(scrollPostion);
      
    // }
  

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

