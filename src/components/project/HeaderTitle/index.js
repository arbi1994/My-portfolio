import React, { useState, useEffect, useRef } from 'react'
// styles
import * as styles from './styles.module.scss'
// hooks
import useWindowSize from '../../../hooks/useWindowSize'

const Header = ({ title }) => {
  const [width] = useWindowSize()
  const [titleLength, setTitleLenght] = useState(null)
  const [titlePos, setTitlePos] = useState(null)
  const ref = useRef()

  const headerStyle = {
    textAlign: titlePos
  }

  const titleStyle = {
    left: title !== "Design" ? 0 : null,
    right: title === "Design" ? 0 : null
  }

  const h1Style = {
    paddingRight: title === "Design" && width > 425 ? "1em" : null,
    paddingLeft: title !== "Design" && width > 425 ? "1em" : null
  }

  const hrStyle = {
    right: title === "Design" ? 0 : null,
    left: title !== "Design" ? 0 : null,
    width: `${titleLength}px`,
  }

  useEffect(() => {
    const titleWidth = ref.current.getBoundingClientRect().width
    setTitleLenght(titleWidth ? titleWidth : null)
    setTitlePos(title === "Design" ? "right" : "left")
  }, [width, title])

  return (
    <header className={styles.header} style={headerStyle}>
      <div 
        className={styles.title}
        style={titleStyle}
      >
        <h1 
          ref={ref}
          style={h1Style}
        >{title}</h1>
      </div>
      <hr style={hrStyle}/>
    </header>
  )
}

export default Header