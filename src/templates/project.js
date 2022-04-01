import React from "react"
import { graphql } from "gatsby"
// Styles
import * as styles from './styles.module.scss'
// Components
import Hero from '../components/project/Hero/index'
import Idea from '../components/project/Idea/index'
import BackButton from '../components/project/BackButton/index'
import Design from '../components/project/Design/index'
import Development from '../components/project/Development/index'

const Project = ({ data }) => {
  const { 
    title, 
    subtitle, 
    introduction,
    featureImage,
    idea,
    typography,
    colors,
    pages,
    technologies,
    constraints,
    summary
  } = data.mdx.frontmatter
 
  return (
    <div className={styles.projectLayout}>
      <BackButton />
      <Hero 
        title={title} 
        subtitle={subtitle} 
        introduction={introduction}
        featureImage={featureImage}
      />
      <Idea idea={idea}/>
      <Design 
        id={data.mdx.id}
        typography={typography}
        colors={colors}
        pages={pages}
      />
      <Development 
        technologies={technologies} 
        constraints={constraints}
        summary={summary}
      />
      <BackButton />
    </div>
  )
}

export default Project

export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        subtitle
        introduction
        featureImage {
          childImageSharp {
            gatsbyImageData(quality: 100, webpOptions: {quality: 100})
          }
        }
        idea
        typography {
          font
        }
        colors {
          hexCode
        }
        pages {
          page
        }
        technologies {
          name
        }
        constraints
        summary
      }
    }
  }
`