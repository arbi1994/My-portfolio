import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
// style
import * as styles from './styles.module.scss'
import { TiArrowBackOutline } from 'react-icons/Ti'

const BackButton = () => {
  return (
    <div className={styles.button}>
      <AniLink 
        fade
        to="/" 
        duration={0.35} 
      >
        <TiArrowBackOutline /> Back
      </AniLink>
    </div>
  )
}

export default BackButton