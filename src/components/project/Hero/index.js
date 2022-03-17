import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './styles.module.scss'

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
        <h2>{subtitle}</h2>
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
    </section>
  )
}

export default Hero