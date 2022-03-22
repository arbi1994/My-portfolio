import React, { useState, useEffect } from 'react'
// styles
import * as styles from './styles.module.scss'
// images
import blob from '../../../assets/project/idea-section/blob.svg'
import guy from '../../../assets/project/idea-section/idea-guy.svg'
// components
import HeaderTitle from '../HeaderTitle/index'

const Idea = () => {
  const title = "Idea"

  return (
    <section className={styles.idea}>
      <HeaderTitle title={title} />
      <main>
        <div className={styles.paragraph}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! </p>
        </div>
        <div className={styles.image}><img alt="guy" src={guy} /></div>
      </main>
      <div className={styles.blob}><img alt="blob" src={blob} /></div>
    </section>
  )
}

export default Idea