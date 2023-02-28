import React from 'react'
import { Link } from 'react-router-dom'
import { gamesData } from '../games-data/games-data'

import styles from '../styles/Games.module.scss'

export default function Games() {
  return (
    <>
     <div>
      <Link to="/">Home</Link>
      </div>
      <div className={styles.container}>
        {gamesData.map((game, i) => {
          return (
            <div key={i} className={styles.gameContainer}>
              <Link to={game.path}>
                <img className={styles.image} src={game.image} alt={game.name} />
              </Link>
              <p className={styles.name}>{game.name}</p>
            </div>
          )
        })}
      </div>
    
        
    </>
  )
}