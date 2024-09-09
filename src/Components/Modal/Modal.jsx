import React from 'react'
import styles from './Modal.module.css'
import { useContext } from 'react'
import { ModalContext } from '../../../Pages/HomePage/Home'
import { VideoContext } from '../../../Pages/FX/FX' 


const Modal = () => {

  const {setModal} = useContext(ModalContext);

  return (
    <>
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
    </>
  )
}
export default Modal



export const VideoModal = () => {

  const {setVideo} = useContext(VideoContext);

  return (
    <>
      <div className={styles.videomodalContainer}>
        <div className={styles.videomodal}>
          <div className={styles.videomodalHeader}>
            <div id={styles.videoclose} onClick={() => setVideo(false)}>
                <svg width="22px" height="23px" viewBox="0 0 22 23"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square"><g transform="translate(-1047.000000, -266.000000)" stroke="#6B7790" strokeWidth="2"><g transform="translate(500.000000, 235.500000)"><g transform="translate(548.000000, 32.000000)"><path d="M0.625,19.375 L19.375,0.625"></path><path d="M0.625,0.625 L19.375,19.375"></path></g></g></g></g></svg>
            </div>

            <div className={styles.videoFrame}>
              <video src="https://assetshuluimcom-a.akamaihd.net/fx_on_hulu/FXSOH_FX_Sizzle_Hulu.mp4" className={styles.video}
              controls
              autoplay
              playsInline
              muted></video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}