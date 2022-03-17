import React from "react"
import { graphql } from "gatsby"
// Styles
import * as styles from './styles.module.scss'
// Components
import Hero from '../components/project/Hero/index'

const Project = ({ data }) => {
  const { 
    title, 
    subtitle, 
    introduction,
    featureImage
  } = data.mdx.frontmatter

  return (
    <div className={styles.layout}>
      <Hero 
        title={title} 
        subtitle={subtitle} 
        introduction={introduction}
        featureImage={featureImage}
      />
    </div>
  )
}

export default Project

export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      rawBody
      frontmatter {
        title
        subtitle
        introduction
        featureImage {
          childImageSharp {
            gatsbyImageData(quality: 100, webpOptions: {quality: 100})
          }
        }
      }
    }
  }
`