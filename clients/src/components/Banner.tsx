import React from 'react'

import styles from '../styles/Banner.module.scss'

const backgroundVideo = require('../media/background.mp4')

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <h3>Applications by Brayden.</h3>
      </div>
      <div className={styles.banner}>
      <video aria-label='background-video' autoPlay muted loop className={styles.backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      </div>
    </div>
  )
}
