import React, { useState, useEffect, useRef } from 'react'
// styles
import * as styles from './styles.module.scss'

const Header = ({ title }) => {
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
    paddingRight: title === "Design" ? "1em" : null,
    paddingLeft: title !== "Design" ? "1em" : null
  }

  const hrStyle = {
    right: title === "Design" ? 0 : null,
    left: title !== "Design" ? 0 : null,
    width: `${titleLength}px`,
    borderRadiusTopRight: title !== "Design" ? "5px" : null,
    borderRadiusBottomRight: title !== "Design" ? "5px" : null
  }

  useEffect(() => {
    const titleWidth = ref.current.getBoundingClientRect().width
    setTitleLenght(titleWidth ? titleWidth : null)
    setTitlePos(title === "Design" ? "right" : "left")
  }, [])

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