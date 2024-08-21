import React, {useEffect, useState} from 'react'
import styles from './HelpCenterFeedback.module.css'
import starEmpty from '/src/assets/images/star-empty.svg'
import starFilled from '/src/assets/images/star-filled.svg';
import Acknowledgement from './Acknowledgement';


const HelpCenterFeedback = () => {

// STAR HOVERED //
const starContainer = [
        {
            id: 1,
            img: starEmpty,
            img2: starFilled,
            text: 'Awful',
        },
        {
            id: 2,
            img: starEmpty,
            img2: starFilled,
            text: 'Bad',
        },
        {
            id: 3,
            img: starEmpty,
            img2: starFilled,
            text: 'Just Ok',
        },
        {
            id: 4,
            img: starEmpty,
            img2: starFilled,
            text: 'Good',
        },
        {
            id: 5,
            img: starEmpty,
            img2: starFilled,
            text: 'Awesome',
        },
];

const [clickedStar, setClickedStar] = useState(null);
const [clickedStarText, setClickedStarText] = useState(null);
const [hoveredStar, setHoveredStar] = useState(null);
const [hoveredStarText, setHoveredStarText] = useState();

const clickHandler = (index) => {
    setClickedStar(index);
    setClickedStarText(index)
} 

const hoverHandler = (index) => {
    if (index + 1 > hoveredStar) {
    setHoveredStar(index);
    setHoveredStarText(index)
    }
} 

const hoverOutHandler = (index) => {
    setHoveredStar(index);
    setHoveredStarText(index)
}


// OPTIONS //
const [optionSelect , setOptionSelect] = useState('0');

const optionChanger = (e) => {
    setOptionSelect(e.target.value);
}


// TEXTAREA //
const [text, setText] = useState('');

const textChangeHandler = e => {
    const data = e.target.value;
    if(data.length <= '255') {
        setText(e.target.value)
    } else {
        setText(data.length = '255')
    }
};



// NEXT BUTTON CONDITIONS //
const [button, setButton] = useState(false);
const [button2, setButton2] = useState(false);
const [button3, setButton3] = useState(false);


useEffect(() => {
    if(clickedStar !== null && text.length !== 0 && optionSelect != '0') {
       setButton(true)
    } else {
       setButton(false)
    }
});


// PAGE 2 //
const [page2option, setPage2Option] = useState('0');
const [errorMessage2, setErrorMessage2] = useState('');

const page2OptionChanger = (e) => {
    const value = e.target.value;
    setPage2Option(value);

    if (value === '0') {
      setErrorMessage2('Complete this field.')
    } else {
      setErrorMessage2('');
    }
}


const [radioSelected, setRadioSelected] = useState(false);

const handleRadioChange = () => {
  setRadioSelected(true);
};

useEffect(() => {
    if(radioSelected != '0' && page2option != '0') {
    setButton2(true)
 } else {
    setButton2(false)
 }
});


//PAGE 3 //
const [option3, setOption3] = useState(null);
const [scale3, setScale3] = useState(null)

const page3OptionChanger = (e) => {
    setOption3(e.target.value);
}

const scaleChanger = (e) => {
    setScale3(e.target.value)
}

useEffect(() => {
    if(option3 != null && scale3 != null) {
    setButton3(true)
 } else {
    setButton3(false)
 }
});


// PAGES //
const [page, setPage] = useState(1);

const openNextPage = () => {
    setPage(page + 1);
}


// ACKNOWLEDGEMENT PAGE //

const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  return (
    <>
    <div className={styles.helpCenterFeeedback}>
        
        {/* // PAGE 1 // */}
     {page === 1 && <section id={styles.page1}>
        <p className={styles.page1Question}>How was your experience on Hulu's Help Site today?</p>

    {/* STARS RATING SECTION STARTS*/}

    
        <div className='d-flex justify-content-center mb-4'>
        <div className={styles.stars}>
            {starContainer.map((star, index) => {
            return (
                <div className={styles.starsBox}>
                {(clickedStar !== null && clickedStar >= index) || (hoveredStar !== null && hoveredStar >= index) ? (
                    <img src={star.img2} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() => hoverOutHandler(null)} />
                ) : (
                    <img src={star.img} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() => hoverOutHandler(null)} />
                )}

                {(clickedStarText !== null && clickedStarText === index) || (hoveredStarText !== null && hoveredStarText === index) ? (
                    <p className={styles.starTextActive}>
                    <i>{star.text}</i>
                    </p>
                ) : (
                    <p className={styles.starText}>
                    <i>{star.text}</i>
                    </p>
                )}
                </div>
            );
            })}
        </div>
        </div>
        
        {/* <div className='d-flex justify-content-center mb-4'>
            <div class={styles.stars}>
            {starContainer.map((star, index) => {
                return (
                    <div className={styles.starsBox}>
                        {clickedStar > index || hoveredStar >= index ? (<img src={star.img2} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() =>hoverOutHandler(null)}/>)
                        : 
                        (<img src={star.img} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() =>hoverOutHandler(null)}/>)
                        }
                    
                        {clickedStarText === index || hoveredStarText ===  index ? (<p className={styles.starTextActive}>
                            <i>{star.text}</i>
                        </p>)
                        :
                        (<p className={styles.starText}>
                            <i>{star.text}</i>
                        </p>)
                        }
                    </div>
                );
            })}
            </div>
        </div> */}


        {/* <div className='d-flex justify-content-center mb-4'>
            <div class={styles.stars}>
            {starContainer.map((star, index) => {
                return (
                    <div className={styles.starsBox}>
                        {clickedStar >= index || hoveredStar >= index ? (<img src={star.img2} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() =>hoverOutHandler(null)}/>)
                        : 
                        (<img src={star.img} onClick={() => clickHandler(index)} onMouseOver={() => hoverHandler(index)} onMouseOut={() =>hoverOutHandler(null)}/>)
                        }
                    
                        {clickedStarText === index || hoveredStarText ===  index ? (<p className={styles.starTextActive}>
                            <i>{star.text}</i>
                        </p>)
                        :
                        (<p className={styles.starText}>
                            <i>{star.text}</i>
                        </p>)
                        }
                    </div>
                );
            })}
            </div>
        </div> */}

    {/* STARS RATING SECTION ENDS*/}

     
            <div className='mb-4'>
                <p className={styles.feedbackTopic}>Please select a feedback topic.</p>
                    <select value={optionSelect} name="" id={optionSelect === '0' ? styles.feedTopicError : styles.feedTopic} onChange={optionChanger} >
                        <option value="0" className={styles.feedOptions}>Please choose one...</option>
                        <option value="1" className={styles.feedOptions}>Site Performance</option>
                        <option value="2" className={styles.feedOptions}>Ease of Use</option>
                        <option value="3" className={styles.feedOptions}>Quality of Information</option>
                        <option value="4" className={styles.feedOptions}>other</option>
                    </select>
                    {optionSelect === '0' && <p className={styles.errorText}>Complete this field.</p>}
            </div>

            <div className="mb-3">
                    <p className={styles.shareFeedbackBox}>Please share your feedback.</p>
                    <textarea value={text} onChange={(e) =>textChangeHandler(e)} name="" id="" cols="10" rows="3" style={{width: '100%'}}></textarea>
                    <p style={{fontSize: '12px', color:'rgb(94, 101, 115)'}}>{text.length} of max 255 characters entered.</p>
            </div>

     <button className={button ? styles.nextBtnActive : styles.nextBtn} onClick={openNextPage}>NEXT</button>
    </section>}


        {/* // PAGE 2 // */}            
    {page === 2 && <section id={styles.page2}>
      <div >
        <p className={styles.page1Question}>What was the primary purpose for today's visit?</p>

        <div className={null}>
                <select value={page2option} name="" id={errorMessage2 ? styles.feedTopicError : styles.feedTopic} style={{width: '100%', fontSize: '13px', padding: '4px 5px'}} onChange={page2OptionChanger}>
                    <option value="0" className={styles.feedOptions}>Please choose one...</option>
                    <option value="1" className={styles.feedOptions}>Cancel Hulu</option>
                    <option value="2" className={styles.feedOptions}>Contact Support</option>
                    <option value="3" className={styles.feedOptions}>Change Plans/Add-ons</option>
                    <option value="4" className={styles.feedOptions}>Provide General Feedback</option>
                    <option value="5" className={styles.feedOptions}>Sign Up for Hulu</option>
                    <option value="6" className={styles.feedOptions}>Troubleshooting</option>
                    <option value="11" className={styles.feedOptions}>Other</option>
                </select>
                {errorMessage2 && <p className={styles.errorText}>Complete this field.</p>}
        </div>

        <p className={styles.page1Question}>Were you able to complete your primary purpose today?</p>
        <div class={styles.radioButtons}>
            <input className={styles.purposeStatus} type="radio" name="purpose" id='yes' onChange={handleRadioChange} /> 
            <label htmlFor="yes">Yes</label>
        </div>
        <div class={styles.radioButtons}>
            <input className={styles.purposeStatus} type="radio" name="purpose" id="no" onChange={handleRadioChange} />
            <label htmlFor="no">No</label>
        </div>
        <div class={styles.radioButtons}>
            <input className={styles.purposeStatus} type="radio" name="purpose" id="still" onChange={handleRadioChange} />
            <label htmlFor="still">Still Working</label>
        </div>

        <button className={button2 ? styles.nextBtnActive : styles.nextBtn} onClick={openNextPage}>NEXT</button>

      </div>
    </section>}


        {/* // PAGE 3 // */}
    {page === 3 && !showAcknowledgement && (<section id={styles.page3}>
      <div className={styles.page3OptionsPart}>

        <p style={{fontSize: '13px', color:'rgb(94, 101, 115)', fontWeight: '600', marginBottom: '24px'}}>How easy was it for you to complete your task?</p>
        
        <div className={styles.radioButtons3}>
            <input className={styles.page3OptionSelector} type="radio" name="level" id="level1" onChange={page3OptionChanger}/>
            <label htmlFor="level1">Very Easy</label>
        </div>

        <div className={styles.radioButtons3}>
            <input className={styles.page3OptionSelector} type="radio" name="level" id="level2" onChange={page3OptionChanger}/>
            <label htmlFor="level2">Easy</label>
        </div>

        <div className={styles.radioButtons3}>
            <input className={styles.page3OptionSelector} type="radio" name="level" id="level3" onChange={page3OptionChanger}/>
            <label htmlFor="level3">Neither</label>
        </div>

        <div className={styles.radioButtons3}>
            <input className={styles.page3OptionSelector} type="radio" name="level" id="level4" onChange={page3OptionChanger}/>
            <label htmlFor="level4">Difficult</label>
        </div>

        <div className={styles.radioButtons3}>
            <input className={styles.page3OptionSelector} type="radio" name="level" id="level5" onChange={page3OptionChanger}/>
            <label htmlFor="level5">Very Difficult</label>
        </div>

      </div>

        <p style={{fontSize: '13px', color:'rgb(94, 101, 115)', fontWeight: '600', marginBottom: '24px', width: '330px'}}>Based on today's experience, how likely are you to recommend Hulu to a friend?
        </p>

        <div className={styles.scaletext} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
            <p style={{color: '#1b1c1f', fontWeight: '600'}}>Less Likely</p>
            <p style={{color: '#1b1c1f', fontWeight: '600'}}>Most Likely</p>
        </div>

        <div className={styles.scale}>
        <div className={styles.numberContainer}>
            <input type="radio" name="scale" id="0" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="0">0</label>
            
            <input type="radio" name="scale" id="1" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="1">1</label>

            <input type="radio" name="scale" id="2" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="2">2</label>

            <input type="radio" name="scale" id="3" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="3">3</label>

            <input type="radio" name="scale" id="4" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="4">4</label>

            <input type="radio" name="scale" id="5" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="5">5</label>

            <input type="radio" name="scale" id="6" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="6">6</label>

            <input type="radio" name="scale" id="7" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="7">7</label>

            <input type="radio" name="scale" id="8" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="8">8</label>

            <input type="radio" name="scale" id="9" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="9">9</label>

            <input type="radio" name="scale" id="10" style={{display: 'none'}} onChange={scaleChanger}/>
            <label className={styles.scaleLabel} style={{padding: '5px 10px', border: '1px solid lightgray'}} htmlFor="10">10</label>

            {/* <span value='0' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(0)}>0</span>
            <span value='1' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(1)}>1</span>
            <span value='2' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(2)}>2</span>
            <span value='3' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(3)}>3</span>
            <span value='4' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(4)}>4</span>
            <span value='5' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(5)}>5</span>
            <span value='6' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(6)}>6</span>
            <span value='7' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(7)}>7</span>
            <span value='8' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(8)}>8</span>
            <span value='9' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(9)}>9</span>
            <span value='10' className={styles.scaleNumbers} onChange={() =>page3OptionChanger(10)}>10</span> */}
        </div>
        </div>

        <button className={button3 ? styles.submitbtnActive : styles.submitbtn} onClick={() => setShowAcknowledgement(true)}>SUBMIT</button>

    </section>)}
       :
    {showAcknowledgement &&(<Acknowledgement />)
    }
    </div>
    </>
  )
}

export default HelpCenterFeedback