import React , { useState }from 'react'
import styles from './MyAccordian.module.css'
import more from '/src/assets/images/icon_round_plus.png'
import less from '/src/assets/images/icon_round_minus.png'

const MyAccordian = ({question, answer}) => {

    const [show, hide] = useState(false);

  return (
    <>
    <div className={styles.listofquestions}>
        <div onClick={() => hide(!show)} className={styles.Q1Container} >
            <div className={styles.qHeader} >
                <p className={styles.questionsFont}>{question}</p>
                <img onClick={() => hide(!show)} src={show? less : more} className={styles.expand} /> 
            </div>
        </div>
        {
           show && <div className={styles.content}>{answer}</div>
        }
    </div>
   
    
    </>
  )
}

export default MyAccordian