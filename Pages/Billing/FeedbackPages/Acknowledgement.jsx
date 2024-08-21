import React, { useContext } from 'react'
import { ForFeedbackCard } from '../Billing';
import styles from '../Billing.module.css'
import feedbackThanks from '/src/assets/images/hulu-bot.svg';

const Acknowledgement = () => {

  const {setShowCard, setSelectedOption, setFeedbackPage} = useContext(ForFeedbackCard);


  const function1 = () => {
    setShowCard(false)
  }

  const function2 = () => {
    setFeedbackPage('basePage')
  }

  const funtion3 = () => {
    setSelectedOption('')
  }

  return (
    <>
       <div className={styles.AcknowledgeMentPage}>
            <img src={feedbackThanks} alt="" />
            <p style={{fontSize: "19px", fontWeight: '700', color: '', marginBlock: '14px'}}>Thanks for your feedback!</p>
            <p style={{fontSize: "17px", fontWeight: '400', color: '#6F788A', width: '330px', marginBottom: '50px'}}>We use this information to improve the Help Center content and experience for other viewers just like you.</p>

            <button className={styles.submitbtnActive} onClick={() => {function1(); function2(); funtion3()}}>CLOSE</button>
        </div>
    </>
  )
}

export default Acknowledgement