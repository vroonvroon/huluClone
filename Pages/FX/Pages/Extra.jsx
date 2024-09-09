import React, {useState} from 'react'
import styles from '../AmericanHorrorStories/Delicate.module.css'
import sc from './../../..//src/assets/images/ForDelicate/somethingscoming.webp';
import lg from './../../..//src/assets/images/ForDelicate/ladygaga.webp';
import fl from './../../..//src/assets/images/ForDelicate/firstlook.webp';
import tsts from './../../..//src/assets/images/ForDelicate/tsts.webp';
import stunts from './../../..//src/assets/images/ForDelicate/stunts.webp';
import mh from './../../..//src/assets/images/ForDelicate/makingofhorror.webp';
import wb from './../../..//src/assets/images/ForDelicate/wesbentley.webp';
import win from './../../..//src/assets/images/ForDelicate/winchester.webp';
import whc from './../../..//src/assets/images/ForDelicate/whc.webp';
import FXCORNER from '../../../src/assets/images/fxcorner.webp';

export const ExtrasData = [
  {
      title: "Official Teaser - Something's Coming",
      img: sc,
  },
  {
      title: "The Evolution of Gaga",
      img: lg,
  },
  {
      title: "First Look",
      img: fl,
  },
  {
      title: "Two Sarahs, Two Shows",
      img: tsts,
  },
  {
      title: "The Stunts",
      img: stunts,
  },
  {
    title: "The Make-Up of Horror",
    img: mh,
},
{
    title: "Creep Out With Wes Bentley",
    img: wb,
},
{
    title: "Introducing the Winchester Mystery House",
    img: win,
},
{
  title: "White Haired Children",
  img: whc,
}
];


const Extra = () => {

const [activeMoreCard, setActiveMoreCard] = useState(false);

const handleMouseOver = (index) => {
  setActiveMoreCard(index);
};

const handleMouseOut = (index) => {
  setActiveMoreCard(index);
};


  return (
    <div>
       <div style={{margin: '60px', height: '500px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
              {ExtrasData.map((item, index) => {
                  return (
                    <> 
                    <div key={index} className={`${styles.extraCard} ${
                      activeMoreCard === index ? styles.hoveredCard : ''
                    }`}>
                        <div className={activeMoreCard === index ? styles.delicateimgContainerActive : styles.delicateimgContainer} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>
                          <img className={styles.thumbnail} src={item.img} alt="" />
                          <img className={styles.fxlogo} src={FXCORNER}alt="" />
                          <span className={ activeMoreCard === index ? styles.backdropActive : styles.backdrop}></span>
                        </div>
                        <p className={styles.extratitle}>{item.title}</p>
                    </div>
                    </>
                  )
              })}
            </div>
    </div>
  )
}

export default Extra