import React from 'react'
import styles from '../Modal/Modal.module.css'

const StayModal = () => {
  return (
    <div>
      <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <div id={styles.close} onClick={() => setModal(false)}>
                <svg width="22px" height="23px" viewBox="0 0 22 23"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(-1047.000000, -266.000000)" stroke="#6B7790" strokeWidth="2"><g transform="translate(500.000000, 235.500000)"><g transform="translate(548.000000, 32.000000)"><path d="M0.625,19.375 L19.375,0.625"></path><path d="M0.625,0.625 L19.375,19.375"></path></g></g></g></g></svg>
             </div>
            </div>
           
              <p>U.S. residents, 18+ only. Access content from each service separately. Location data required to watch certain content. Select Hulu content available via Disney+ with valid Hulu and Disney+ subscriptions; additional content only available via Hulu app. Hulu content can be streamed via Disney+ on up to 2 devices simultaneously. Additional app feature and device restrictions apply. For more information visit the Hulu Help Center. Offer valid for eligible subscribers only.<span> Subject to Hulu Subscriber Agreement. </span>
              </p>
        
              <br/>

              <p>For detailed information on billing and cancelation, please visit the <span> Hulu Help Center.</span> </p>
                
              <br/>

              <p>© 2024 Disney and its related entities.</p>   
            </div>
        </div>
    </div>
  )
}

export default StayModal