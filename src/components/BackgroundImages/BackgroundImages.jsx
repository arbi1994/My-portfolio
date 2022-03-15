import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import { ParallaxProvider } from 'react-scroll-parallax'
// styles
import * as styles from './styles.module.scss'
// images
import images from '../../data/project-images'
// hooks
import useWindowSize from '../../hooks/useWindowSize'

const BackgroundImages = ({ data, imagesData }) => {
  const width = useWindowSize()

  function rendereBackgroundImages (data) {
    if(data === "projects" && width >= 768) return images.map(image => {
      return (
        <ParallaxProvider key={image.class}>
          <div className={image.class}>
            {image.src}
          </div>
        </ParallaxProvider>
      )
    })

    if(data === "about") return imagesData.map(image => {
      return (
        <GatsbyImage 
          key={image.alt}
          image={image.src.childImageSharp.gatsbyImageData} 
          alt={image.alt}
          className={styles[`${image.alt}`]}
        /> 
      )
    })

    if(data === "contact") return imagesData.map(image => {
      return (
        <GatsbyImage 
          key={image.alt}
          image={image.src.childImageSharp.gatsbyImageData} 
          alt={image.alt}
          className={styles[`${image.alt}`]}
        /> 
      )
    })
  }

  return (
    <>
      {rendereBackgroundImages(data)}
    </>
  )
}

export default BackgroundImages