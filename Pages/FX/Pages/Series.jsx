import React from 'react'
import styles from '../AmericanHorrorStories/Delicate.module.css';
import FXCORNER from '../../../src/assets/images/fxcorner.webp';

const Series = () => {
  return (
    <div style={{margin: '60px', height: '300px'}}>
      <div style = {{display: 'block', marginInline: '10px'}}>
          <div className={styles.seriesimgContainer}>
            <img className={styles.thumbnail} src='/src/assets/images/ForDelicate/americanhorrorstories.webp' alt="" />
            <img className={styles.fxlogo} src={FXCORNER} alt="" />
            <svg width="60px" height="60px" viewBox="0 0 60 60" className={styles.cubuttondetail}><circle fill-opacity="0.2" cx="30" cy="30" r="29" stroke="#FFFFFF" stroke-width="1.5"></circle><g transform="translate(16.071429, 17.142857)" fill-rule="nonzero" fill="#FFFFFF"><path d="M21.9263541,11.4642855 L0,11.4642855 L0,13.6071427 L21.9420593,13.6071427 L13.0824461,22.1982827 L14.5976749,23.6675955 L26.069575,12.5433287 L14.5976749,1.41906191 L13.0824461,2.8883747 L21.9263541,11.4642855 Z"></path></g></svg>
            <span className={styles.backdrop}></span>
          </div>
          <p className={styles.moretitle}>American Horror Stories</p>
          <p className={styles.moregenre}>TVMA • Drama, Horror • TV Series...</p>
      </div>
    </div>
      )
}

export default Series