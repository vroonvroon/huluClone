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
         <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ActionPanel_IconMore__ToveF mui-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MoreHorizIcon"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" style={{fill: 'white', width: '24px', height: '24px'}}></path>
         </svg>
         <div className={option ? styles.moreOptionActive : styles.moreOptionHide}>
            <p>Turn radio notification off</p>
            <p>End chat</p>
            <p>Start a new chat</p>
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
    {/* <div className={styles.chatbotName}>
      <p style={{color: 'rgb(99, 110, 133)', marginRight: '10px', fontSize: '13px', fontWeight: '400'}}>HuluBot</p>
      <p style={{fontSize: '9px', fontWeight: '700', padding: '0px 5px', backgroundColor:'rgb(4, 4, 5)', color: 'white', borderRadius:' 3px'}}>BOT</p>
    </div> */}


  
    <div className={styles.chatbotMessages}>
        {botMessages.map((message, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', width: '260px', fontSize: '14px', marginInline: 'auto', marginBottom: '8px'}}>
            <div style={{padding: '5px 10px', backgroundColor: '#f5f6f7', borderRadius: 'px' }}>
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
      
    </div>

    

    {/* <div class={styles.options}>
      <div className={styles.settings}>
         <svg style={{margin:'0px 14px 0px 10px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgba(0, 0, 0, 0.7)" className="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
         </svg>
         <p style={{fontSize: '17px', color:'rgba(0, 0, 0, 0.6)', fontWeight: '500'}}>Settings</p>
      </div>
      <div className={styles.agent}>
         <svg style={{margin: '0px 14px 0px 10px'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(0, 0, 0, 0.7)" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
          <p style={{fontSize: '17px', color:'rgba(0, 0, 0, 0.6)', fontWeight: '500'}}>Contact an agent</p>
      </div>
      <div className={styles.end}>
         <svg style={{margin: '0px 14px 0px 10px'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(0, 0, 0, 0.7)" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
          <p style={{fontSize: '17px', color:'rgba(0, 0, 0, 0.6)', fontWeight: '500'}}>End chat</p>
      </div>
    </div> */}
  

    <div className={styles.inputspace}>
        {/* <svg style={{padding: '14px 8px 14px 8px', flexGrow:' 1'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(0, 0, 0, 0.6)" class="three-dots" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg> */}
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