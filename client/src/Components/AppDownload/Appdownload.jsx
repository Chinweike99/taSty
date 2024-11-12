import React from 'react'
import styles from './Appdownload.module.css'
import { assets } from '../../assets/assts'

const Appdownload = () => {
  return (
    <div className={styles.appDownload} id='appDownload'>
        <p>Download <span>taS😋ty</span> app for better experience</p>
        <div className={styles.platforms}>
          <img src={assets.appstore} alt="appstore" />
          <img src={assets.googlestore} alt="googlestore" />
        </div>
    </div>
  )
}

export default Appdownload