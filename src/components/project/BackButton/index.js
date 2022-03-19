import React from 'react'
import { Link } from 'gatsby'
// style
import * as styles from './styles.module.scss'
import { TiArrowBackOutline } from 'react-icons/Ti'

const BackButton = () => {
  return (
    <div className={styles.button}>
      <Link to="/">
        <TiArrowBackOutline /> Back
      </Link>
    </div>
  )
}

export default BackButton