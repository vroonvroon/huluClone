import React, {useState, useEffect} from 'react'
import styles from '../Billing.module.css'
import Acknowledgement from './Acknowledgement';

const ImprovementPage = () => {

const platform = {
  'ChromeCast': [
    { id: 1, name: 'Chromecast 1st Generation' },
    { id: 2, name: 'Chromecast 2nd Generation' },
    { id: 3, name: 'Chromecast 3rd Generation' },
    { id: 4, name: 'Chromecast Ultra' },
  ],
  'Laptop/Desktop': [
    { id: 5, name: 'PC' },
    { id: 6, name: 'MAC' },
    { id: 7, name: 'Other' },
  ],
  'Game Console': [
    { id: 8, name: 'PS TV' },
    { id: 9, name: 'PS Vita' },
    { id: 10, name: 'PS3' },
    { id: 11, name: 'PS4' },
    { id: 12, name: 'PS5' },
    { id: 13, name: 'XBox One' },
    { id: 14, name: 'XBox Series X|S' },
    { id: 15, name: 'XBox 360' },
  ],
  'Mobile': [
    {id: 16, name: 'Andriod'},
    {id: 17, name: 'iOS'},
  ],
  'Set top device': [
    {id: 18, name: 'Apple TV 2&3'},
    {id: 19, name: 'Apple TV 4'},
    {id: 20, name: 'Fire TV'},
    {id: 21, name: 'TiVO'},
    {id: 22, name: 'Other'},
  ],
  'Smart TV/Blu-ray': [
    {id: 23, name: 'Android TV'},
    {id: 24, name: 'Hisense'},
    {id: 25, name: 'LG'},
    {id: 26, name: 'Panasonic'},
    {id: 27, name: 'Samsung'},
    {id: 28, name: 'Sony'},
    {id: 29, name: 'Other'},
  ],
  'Tablet': [
    {id: 30, name: 'LG'},
    {id: 31, name: 'Samsung'},
    {id: 32, name: 'Amazon Fire'},
    {id: 33, name: 'Asus'},
    {id: 34, name: 'Google'},
    {id: 35, name: 'HTC'},
    {id: 36, name: 'iPad'},
    {id: 37, name: 'Lenovo'},
    {id: 38, name: 'Microsoft'},
    {id: 39, name: 'Nvidia'},
    {id: 40, name: 'Other'},
  ]
};


//FIRST DROPDOWN //
const [selectedOption1, setSelectedOption1] = useState('0');
const [errorMessage1, setErrorMessage1] = useState(true);

const handleSelectChange1 = (e) => {
  const value = e.target.value;
  setSelectedOption1(value);

  if (value === '0') {
    setErrorMessage1('Complete this field.')
  } else {
    setErrorMessage1('');
  }
};


const valueBlurHandler = (event) => {
  const value = event.target.value;
    if(value === '0') {
      setErrorMessage1('Complete this field.')
    } else {
      setErrorMessage1('');
    }
};


// PLATFORM & DEVICE DROPDOWN // 
const [selectedPlatform, setSelectedPlatform] = useState('');
const [platformError, setPlatformError] = useState(true);
const [selectedDevice, setSelectedDevice] = useState('');
const [deviceError, setDeviceError] = useState(true);


const platformChanger = (e) => {
   setSelectedPlatform(e.target.value);
   if(e.target.value !== ''){
       setPlatformError(false);
   }else{
       setPlatformError(true);
}
};


const deviceChanger = (e) => {
  setSelectedDevice(e.target.value);
  if(e.target.value !== ''){
    setDeviceError(false);
  }else{
    setDeviceError(true);
}
};


//TEXTAREA //
const [text, setText] = useState('');

const textChange = (e) => {
  const data = e.target.value;
  console.log(data);
  if(data.length <= 255) {
    setText(e.target.value)
  } else {
    setText(data.length = 255)
  }
};


// SUBMIT BUTTON CONDITIONS //

const [button, setButton] = useState(false);

useEffect(()=>{
  if(text !== '' && !platformError && !deviceError && selectedOption1 !== '0') {
    setButton(true);
  }else{
    setButton(false);
  }},[text, platformError, deviceError, selectedOption1]);


// ACKNOWLEDGEMENT COMPONENT //
 const [showAcknowledgement, setShowAcknowledgement] = useState(true);

  return (
    <>
        {showAcknowledgement ? (<section id={styles.improvementPage}>
            <p className={styles.page1Question}>How would you rate your experience with Hulu's streaming service?</p>

            <div className='mb-4'>
            <p className={styles.feedbackTopic}>Please select a feedback topic.</p>
                <select value={selectedOption1} onChange={handleSelectChange1} name="" id={errorMessage1 ? styles.feedTopicError : styles.feedTopic} onBlur={valueBlurHandler}>
                    <option value="0" className={styles.feedOptions}>Please choose one...</option>
                    <option value="1" className={styles.feedOptions}>Request a movie or show</option>
                    <option value="2" className={styles.feedOptions}>App navigation</option>
                    <option value="3" className={styles.feedOptions}>Login</option>
                    <option value="4" className={styles.feedOptions}>Playback</option>
                    <option value="5" className={styles.feedOptions}>Privacy</option>
                    <option value="6" className={styles.feedOptions}>Profiles</option>
                    <option value="7" className={styles.feedOptions}>Search</option>
                    <option value="8" className={styles.feedOptions}>Settings</option>
                    <option value="9" className={styles.feedOptions}>Streaming quality</option>
                    <option value="10" className={styles.feedOptions}>Supported devices</option>
                    <option value="11" className={styles.feedOptions}>Other feedback</option>
                </select>
                {errorMessage1 && <p className={styles.errorText}>Complete this field.</p>}
            </div>

            <div className="mb-3">
                <p className={styles.shareFeedbackBox}>Please share your feedback.</p>
                <textarea value={text} onChange={(e) =>textChange(e)} name="" id="" cols="10" rows="3" style={{width: '100%'}}></textarea>
                <p style={{fontSize: '12px', color:'rgb(94, 101, 115)'}}>{text.length} of max 255 characters entered.</p>
            </div>

        {/* PLATFORM DROPDOWN*/}
        <div className="mb-3">
            <p className={styles.platform}>Platform</p>
            <select value={selectedPlatform} name="" id={platformError ? styles.feedTopicError : styles.feedTopic} onChange={platformChanger}>
                <option value="">-</option>
                {Object.keys(platform).map((platformType) => (
                  <option className={styles.platformList} key={platformType} value={platformType}>
                    {platformType}
                  </option>
                ))}
            </select>
            {platformError && <p className={styles.errorText}>Complete this field.</p>}
        </div>

        {/* DEVICE DROPDOWN */}
        <div className={selectedPlatform ? styles.devicesContainerActive : styles.devicesContainer}>
            <p className={styles.device}>Device</p>
            <select name="" id={deviceError ? styles.feedTopicError : styles.feedTopic} value={selectedDevice} onChange={deviceChanger}>
                <option value="">-</option>
                {selectedPlatform && platform[selectedPlatform].map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.name}
                  </option>
                ))}
            </select>
            {deviceError && <p className={styles.errorText}>Complete this field.</p>}
        </div>

        

        {/* OPERATING SYSTEM  */}
        <div className="mb-3 d-none">
            <p className={styles.device}>Operating System</p>
            <div className="position-relative d-flex align-items-center">
                <input type="button" style={{width: '100%'}}/>
                <svg className={styles.dropdownSolidIcon} focusable="false" data-key="down" aria-hidden="true" viewBox="0 0 520 520" part="icon"><g><path d="M83 140h354c10 0 17 13 9 22L273 374c-6 8-19 8-25 0L73 162c-7-9-1-22 10-22z"></path></g></svg>
            </div>

            {/* TABLET DEVICE  */}
                <option value="2" className={styles.feedOptions}>Andriod</option>
                <option value="2" className={styles.feedOptions}>iOS</option>
                
        </div>
        <button className={button ? styles.submitbtnActive : styles.submitbtn}onClick={() => setShowAcknowledgement(false)}>SUBMIT</button>

        </section>)
                :
        (<Acknowledgement />)}
                
    </>
  )
}

export default ImprovementPage;