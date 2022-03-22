import React from 'react'
// styles
import * as styles from './styles.module.scss'
// components
import HeaderTitle from '../HeaderTitle/index'

const Design = () => {
  const title = "Design"

  return (
    <section className={styles.design}>
      <HeaderTitle title={title} />
      <main></main>
    </section>
  )
}

export default Design