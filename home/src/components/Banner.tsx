import React from 'react'

import styles from '../styles/Banner.module.scss'

const backgroundVideo = require('../media/background.mp4')

export default function Banner() {
  return (
    <nav className={styles.banner}>
      <video autoPlay muted loop className="nav-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </nav>
  )
}
