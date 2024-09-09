import React, { useState } from 'react'
import styles from './ChatBot.module.css'
import chat from '/src/assets/images/chat.svg'
import logo from '/src/assets/images/Hulu-Logo.png'
import chatbotimg from '/src/assets/images/hulu-chatbotimg.svg'
import dropdownIcon from '/src/assets/images/dropdown_arrow.svg'



const ChatBot = () => {

    const [open, setOpen] = useState(false);
    const [option, setOption] = useState(false);



    //CHATBOT //
    const [botMessages, setBotMessages] = useState([
      "Hi! I'm HuluBot, Hulu's automated assistant" ,
      "I can help with common questions. If you don't see your issue below, type it in and I'll do my best to answer",
    ]);

    const [userMessages, setUserMessages] = useState([]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
      if (newMessage.length === 0) {
          userMessages('');
      } else {
        setUserMessages([...userMessages, newMessage]);
        setNewMessage('');
      }
    };

    const [selectedOption, setSelectedOption] = useState(null);


    const [end, setEnd] = useState(false);
    const [chatEnded, setChatEnded] = useState(false);


    const openNewChat = () => {
      setUserMessages([]);
      setSelectedOption(null);
      setNewMessage('');
      setOpen(true);
      setOption(false);
      setEnd(false);
      setChatEnded(false);
    };


    const backtoConvo = () => {
        setOption(false);
        setEnd(false);
        setChatEnded(false);
    };



  return (
    <>

     <div className={styles.chatbot} onClick={() => setOpen(true)}>
         <span></span>
         <img src={chat} className={styles.chatIcon} />
     </div>

    <div className={open ? styles.chatWindowActive : styles.chatWindow}>
      <span className={styles.chatOverlay}></span>
    <div className={styles.left}>
       <div className={styles.chatHeader}>
          <img src={logo} style={{height: '50px', paddingRight: '10px'}} />
          <p style={{color: 'white', fontSize: '17px', fontWeight: '300', borderLeft: '2px solid white', paddingLeft: '20px'}}>HuluBot</p>
       </div>

     <div className={styles.optionsSection}>
      <div className={styles.moreOptions} onClick={() => setOption(!option)}>
         {!chatEnded && <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ActionPanel_IconMore__ToveF mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreHorizIcon"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" style={{fill: 'white', width: '24px', height: '24px', cursor: 'pointer'}}></path>
         </svg>}
         <div className={option ? styles.moreOptionActive : styles.moreOptionHide}>
            <p>Turn audio notification off</p>
            <p onClick={() => setEnd(true)}>End chat</p>
         </div>
      </div>
     
        <div className={styles.closearrow} onClick={() => setOpen(false) }>
          <span className={styles.chatClosebg}></span>
          <img src={dropdownIcon} className={styles.chatClose}/>
        </div>
      </div>
    </div>


    <div className={styles.chatBody}>
      <div className={styles.chatScroll}>

      <div className={styles.chatbotMessages}>
          {botMessages.map((message, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', width: '350px', fontSize: '14px', marginInline: 'auto', marginBottom: '8px'}}>
              <div style={{padding: '5px 10px', backgroundColor: '#f5f6f7', borderRadius: '16px', fontSize: '16px', width: '300px', letterSpacing: 'normal'}}>
                {message}
              </div>
            </div>
          ))}
      </div>

      <div className={styles.options_chatbotdp}>
        <ul className={styles.issueList}>
          <li onClick={() => setSelectedOption('I can\'t log in')} disabled={selectedOption!== null}>I can't log in</li>
          <li onClick={() => setSelectedOption('Manage my subscription')} disabled={selectedOption!== null}>Manage my subscription</li>
          <li onClick={() => setSelectedOption('Help me troubleshoot')} disabled={selectedOption!== null}>Help me troubleshoot</li>
          <li onClick={() => setSelectedOption('Update my payment info')} disabled={selectedOption!== null}>Update my payment info</li>
        </ul>
        <div className={styles.chatbotImg}>
          <img src={chatbotimg} style={{borderRadius: '50px'}} alt="" />
        </div>
      </div>

      <div className={styles.userMessages}>
    {userMessages.map((message, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <div style={{padding: '5px 10px', backgroundColor: '#576073', color: 'white', borderRadius: '10px', marginBottom: '8px' }}>
              {message}
            </div>
          </div>
        ))}
      </div>
      {selectedOption && (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <div style={{ padding: '5px 10px', backgroundColor: '#576073', color: 'white', borderRadius: '10px' }}>
          {selectedOption}
        </div>
      </div>
    </div>
        )}
      </div>

      {end && <span className={styles.endChatBg}>
        <div style={{display: 'grid', placeItems: 'center', gap: '20px'}}>
          <p style={{fontSize: '17px'}}>Are you sure you want to end this conversation?</p>
          <button className={styles.endChatBtn} onClick={() => {setChatEnded(true), console.log('chat Ended')}}>End chat</button>
          <button className={styles.backtoConvoBtn} onClick={() => setEnd(false)}>Go back to conversation</button>
        </div>
      </span>}


      {chatEnded && <span className={styles.newChatBg}>
        <img style={{width: '150px'}} src="/src/assets/images/Hulu-Logo.png" alt="" />
        <div className={styles.newChatbase}>
          <div className={styles.newchatblock} onClick={openNewChat}>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChatBubbleOutlineOutlinedIcon" style={{fill: 'rgb(0, 85, 128)', width: '30px', height: '18px'}}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"></path></svg>
            <p style={{fontSize: '17px', color: 'rgb(0, 85, 128)'}}>Start a new chat</p>
          </div>
          <div className={styles.backttoconvoblock} onClick={backtoConvo}>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowBackIosOutlinedIcon" style={{width: '30px', height: '18px'}}><path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path></svg>
            <p style={{fontSize: '17px', color: 'rgb(84, 84, 84)'}}>Back to the conversation</p>
          </div>
        </div>
      </span>}


    </div>

  

    <div className={styles.inputspace}>
        <input type="text" placeholder="Please type your request" className={styles.chatInput}  value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <div className={styles.replyBoxIcon} onClick={handleSendMessage}>
          <button className={styles.replyBoxIconButton} disabled="" data-selector="SEND_BUTTON" title="Send" aria-label="Send" style={{backgroundColor: '#7d8085', color: 'rgb(255, 255, 255)', border: 'none', borderRadius: '50px', padding: '2px 6px'}}>
            <span style={{alignItems: 'center', display: 'flex', padding: '6px 3px'}}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </span>
          </button>
        </div>
    </div>

    </div>

    </>
  )
}

export default ChatBot