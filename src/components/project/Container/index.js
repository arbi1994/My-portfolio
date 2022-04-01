import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
// styles
import * as styles from './styles.module.scss'
// images
import typographyImg from '../../../assets/project/typography-img.svg'
import palettesImg from '../../../assets/project/palettes-img.svg'
import pagesImg from '../../../assets/project/pages-img.svg'
//hooks
import useWindowSize from '../../../hooks/useWindowSize'

const Container = ({ 
  id,
  typography, 
  colors, 
  pages,
  technologies, 
  constraints, 
  summary 
}) => {
  const width = useWindowSize()
  const size = width <= 425 ? '6x' : '8x'

  function renderIcons (icon) {
    if(icon === "html") return <FontAwesomeIcon icon={faHtml5} size={size} />
    if(icon === "css") return <FontAwesomeIcon icon={faCss3} size={size} />
    if(icon === "js") return <FontAwesomeIcon icon={faJs} size={size} />
    if(icon === "sass") return <FontAwesomeIcon icon={faSass} size={size} />
    if(icon === "react") return <FontAwesomeIcon icon={faReact} size={size} />
  }

  const renderedHeader = () => {
    if (typography) return "Typography"
    if (colors) return "Color palettes"
    if (pages) return "Pages"
    if (technologies) return "Languages and technologies used"
    if (constraints) return "Constraints"
    if (summary) return "Summary"
  }

  const renderedContent = () => {
    if (typography) return typography.map(({font}) => {
      return (
        <li key={`${id + font}`} font={`${id + font}`}>
          <h5 style={{fontFamily: `${font}`}}>abcdefghijk</h5>
          <dl style={{fontFamily: `${font}`}}>{font}</dl>
        </li>
      )
    })

    if (colors) return colors.map(({hexCode}) => {
      return (
        <li key={`${id + hexCode}`}>
          <span style={{background: `#${hexCode}`}}></span>
          <dl>#{hexCode}</dl>
        </li>
      )
    })

    if (pages) return pages.map(({page}) => {
      return (
        <li key={`${id + page}`}>
          <h5>{page !== "home" ? `/${page}` : page}</h5>
        </li>
      )
    })

    if (technologies) return technologies.map(({name}) => {
      return (
        <li key={`${id + name}`} className={styles.icon}>
          {renderIcons(name)}
          <dl>{name}</dl>
        </li>
      )
    })

    if (constraints) return constraints.map(constraint => {
      return (
        <li key={`${id + constraint}`} className={styles.constraintsList}>
          {constraint}
        </li>
      )
    })

    if (summary) return <p>{summary}</p>
  }

  const renderedImages = () => {
    if (typography) return (
      <div className={`${styles.containerImage} ${styles.left}`}>
        <img alt="typography" src={typographyImg} />
      </div>
    )

    if (colors) return (
      <div className={`${styles.containerImage} ${styles.right}`}>
        <img alt="color palettes" src={palettesImg} />
      </div>
    )

    if (pages) return (
      <div className={`${styles.containerImage} ${styles.left}`}>
        <img alt="pages" src={pagesImg} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h4>{renderedHeader()}</h4>
      </div>
      <div className={styles.containerContent}>
        <ul className={constraints ? styles.constraintsWrapper : null}>
         {renderedContent()}
        </ul>
      </div>
      {renderedImages()}
    </div>
  )
}

export default Container