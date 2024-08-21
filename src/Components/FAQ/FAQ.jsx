import React, { useState } from 'react'
import styles from './FAQ.module.css'
import more from '/src/assets/images/icon_round_plus.png'
import { FAQdata } from './FAQdata'
import MyAccordian from './MyAccordian'


const FAQ = () => {

      //FOR FAQ ACCORDIAN
      const [close, Open] = useState(FAQdata);

  return (
    <>

     <div className={styles.questions}>
        <p style={{fontSize: '32px', fontWeight: '700', color: '#272c34', textAlign: 'center', marginBlock: '50px'}}>Any Questions?</p>

        <div className={styles.listofquestions}>
            {close.map((curElem) => {
                return <MyAccordian key={curElem.id} question={curElem.question} answer={curElem.answer}/>
               })
            }
         </div>
     </div>

    </>
  )
}

export default FAQ