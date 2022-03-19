import React from 'react'
import * as styles from './styles.module.scss'
// Components
import HomeBlob from '../../../assets/hero-section/HomeBlob'

const Header = ({ children }) => {
  return (
    <header id="home" className={styles.header}>
      { children }
      <HomeBlob />
    </header>
  )
}

export default Header