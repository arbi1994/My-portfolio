import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.scss'
// images
import blob from '../../../assets/project/hero-section/blob.svg'

const Hero = ({ 
  title, 
  subtitle, 
  introduction, 
  featureImage
}) => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </header>
      <main className={styles.main}>
        <p>{introduction}</p>
      </main>
      <span className={styles.heroTop}></span>
      <GatsbyImage
        alt={title}
        image={featureImage.childImageSharp.gatsbyImageData} 
        className={styles.bgImage}
      />
      <span className={styles.heroBottom}></span>
      <div className={styles.blob}><img alt="blob" src={blob} /></div>
    </section>
  )
}

export default Hero