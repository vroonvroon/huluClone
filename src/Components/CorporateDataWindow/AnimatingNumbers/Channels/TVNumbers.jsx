import React, { useState, useEffect } from 'react';
import styles from '../Channels/Channels.module.css';
import livechannels from '/src/assets/images/livechannels.jpg';

const Channels = () => {
  const [TV, setTV] = useState(false);
  const [TVCount, setTVCount] = useState(0);
  const [episode, setEpisode] = useState(false);
  const [episodeCount, setEpisodeCount] = useState(0);

  const TVArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const episodesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let TVrollUpAnimation = {
    animation: `rollUp 1.2s ease-out forwards`,
    transition: '1.2s ease-out',
    transform: TV ? 'translateY(-70%)' : 'translateY(100%)',
    opacity: TV ? 1 : 0,
  };

  let EpisodesrollUpAnimation = {
    animation: `rollUp 1.2s ease-out forwards`,
    transition: '1.2s ease-out',
    transform: episode ? 'translateY(-70%)' : 'translateY(100%)',
    opacity: episode ? 1 : 0,
  };

  useEffect(() => {
    let TVId;
    let EpisodesId;

    TVId = setInterval(() => {
      setTVCount((prevCount) => {
        if (prevCount < 9) {
          return prevCount + 1;
        } else {
          clearInterval(TVId);
          setTV(true);
          return prevCount;
        }
      });
    }, 100);

    EpisodesId = setInterval(() => {
      setEpisodeCount((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1;
        } else {
          clearInterval(EpisodesId);
          setEpisode(true);
          return prevCount;
        }
      });
    }, 150);

    return () => {
      clearInterval(TVId);
      clearInterval(EpisodesId);
    };
  }, []);

  return (
    <div className={styles.liveChannels}>
      <img src={livechannels} alt="" className={styles.boxesImg} />
      <div className={styles.counterInfo}>
        <div className={styles.numbersOnly}>
          <div className={styles.TVShizz} style={TVrollUpAnimation}>
            {TVArray.map((item, index) => (
              <p key={index} className={styles.thirdLine}>{item}</p>
            ))}
          </div>

          <div className={styles.EpisodeShizz} style={EpisodesrollUpAnimation}>
            {episodesArray.map((item, index) => (
              <p key={index} className={styles.thirdLine}>{item}</p>
            ))}
          </div>

          <span>+</span>
        </div>
        <p>Live channels</p>
      </div>
    </div>
  );
};

export default Channels;