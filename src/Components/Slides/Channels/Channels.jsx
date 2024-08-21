import React, { useState } from 'react'
import styles from './Channels.module.css'
import { ChannelsData } from './ChannelsData'


const Channels = () => {

  const [data] = useState(ChannelsData);

  return (
    <>
        {data.map((item) => {
            console.log({name} = item.channels);
            return (
                <>   
                <img src={item.channels.name} alt="" className={styles.channelImg}/>
                </>
            )
        })}
    </>    
  )
}

export default Channels