import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import { IconContext } from "react-icons";
// Styles
import * as styles from './styles.module.scss';
// icons
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Thumbnail = ({ data }) => {
  function setIcon (icon) {
    if(icon === "Creation") return <RiCompassDiscoverLine />
    if(icon === "Code") return <BsGithub />

    return <CgWebsite />
  }

  return (
    <>
      {data.edges.map(edge => {
        return (
          <div key={edge.node.id} className={styles.thumbnail}>
           <div className={styles.thumbnailOuter}>
            <div className={styles.thumbnailInner}>
              <GatsbyImage 
                alt={edge.node.frontmatter.title} 
                image={edge.node.frontmatter.featureImage.childImageSharp.gatsbyImageData} 
              />
              <div className={styles.thumbnailWrapper}>
                <div className={styles.thumbnailTitle}>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <h5>{edge.node.frontmatter.subtitle}</h5>
                </div>
                <div className={styles.thumbnailLinks}>
                  {edge.node.frontmatter.links.map(link => {
                    return (
                      <IconContext.Provider 
                        key={link.label} 
                        value={{color: 'white', className: styles.icon}}
                      >
                        <li>
                          {link.label === "Creation" 
                            ? <Link to={link.url}>
                                <h6>{link.label}</h6>
                                {setIcon(link.label)}
                              </Link> 
                            : <a
                                href={link.url}
                                target='_blank'
                                rel='nofollow noopener noreferrer'
                              >
                                <h6>{link.label}</h6>
                                {setIcon(link.label)}
                            </a>
                          }
                        </li>
                      </IconContext.Provider>
                    )
                  })}
                </div>
              </div>
            </div>
            </div>
          </div>
        )})
      }
    </>
  )
};

export default Thumbnail;
