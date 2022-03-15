import React from 'react'
import { StaticQuery, graphql } from "gatsby"
// Styles
import * as styles from './styles.module.scss'
// Components
import Thumbnail from '../Thumbnail/index'
import BackgroundImages from '../BackgroundImages/BackgroundImages'
import Paragraph from '../Paragraph/index'
import Contacts from '../Contacts/index'
// hooks
import useSectionIdentifier from '../../hooks/useSectionIdentifier';

const Section = () => {
  const projectRef = useSectionIdentifier(document.getElementById('box-2'))
  const aboutRef = useSectionIdentifier(document.getElementById('box-3'))
  const contactRef = useSectionIdentifier(document.getElementById('box-4'))

  function setRefValue(section){
    if(section === 'projects') return projectRef
    if(section === 'about') return aboutRef
    if(section === 'contact') return contactRef
  }

  return (
    <StaticQuery
      query={graphql`
        query getSectionDataAndGetThumbnailData {
          section: allMdx(
            filter: {frontmatter: {section: {ne: null}}}
            sort: {fields: frontmatter___order, order: ASC}
          ) {
            edges {
              node {
                frontmatter {
                  section
                  title
                  images {
                    alt
                    src {
                      childImageSharp {
                        gatsbyImageData(placeholder: NONE, quality: 100)
                      }
                    }
                  }
                }
                id
              }
            }
          }
          thumbnail: allMdx(
            filter: {frontmatter: {element: {eq: "thumbnail"}}}
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  subtitle
                  slug
                  featureImage {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  links {
                    url
                    label
                  }
                } 
              }
            }
          }
          contacts: allMdx(filter: {frontmatter: {section: {eq: "contact"}}}) {
            edges {
              node {
                id
                frontmatter {
                  subtitle
                  links {
                    contact
                    cta
                    label
                    url
                  }
                }
              }
            }
          }
        }
      `}

      render={({ section, thumbnail, contacts }) => (
        section.edges.map(edge => {
          return (
            <section 
              key={edge.node.id}
              id={edge.node.frontmatter.section} 
              className={styles.section}
              ref={setRefValue(edge.node.frontmatter.section)}
            >
              <div className={styles.wrapper}>
                <div className={styles.heading}>
                  <h1>{edge.node.frontmatter.title}</h1>
                </div>
                <main className={styles.content}>
                  {edge.node.frontmatter.section === "projects" ? <Thumbnail data={thumbnail} /> 
                    : edge.node.frontmatter.section === "about" ? <Paragraph />
                    : edge.node.frontmatter.section === "contact" ? <Contacts data={contacts.edges[0].node.frontmatter} />
                    : null
                  }
                </main>
                <div className={styles.background}>
                  <BackgroundImages 
                    data={edge.node.frontmatter.section} 
                    imagesData={edge.node.frontmatter.images}
                  />
                </div>
              </div>
            </section>
          )
        })
      )}
    />
  )
}

export default Section