import React from 'react'
import * as styles from './styles.module.scss'
// Components
import ScrollTracker from "../../ScrollTracker/index";
import Header from '../Header/index'
import Navbar from '../Navbar/index'
import Footer from '../Footer/index'

const layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <ScrollTracker />
      <Header>
        <Navbar />
      </Header>
      <main id="home">{children}</main>
      <Footer />
    </div>
  )
}

export default layout