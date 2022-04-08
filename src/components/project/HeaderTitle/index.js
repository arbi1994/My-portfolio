import React, { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
// styles
import * as styles from './styles.module.scss'
// hooks
import useWindowSize from '../../../hooks/useWindowSize'

const Header = ({ title, active }) => {
  const [width] = useWindowSize()
  const [titleLength, setTitleLenght] = useState(null)
  const [titlePos, setTitlePos] = useState(null)
  const ref = useRef()

  // header animation
  const fadeStyle = useSpring({
    to: { opacity: active ? 1 : 0, y: 0 },
    from: { opacity: 0, y: 10 },
    delay: 500,
  })

  const headerStyle = {
    textAlign: titlePos
  }

  const titleStyle = {
    left: title !== "Design" ? 0 : null,
    right: title === "Design" ? 0 : null,
  }

  const hrStyle = {
    right: title === "Design" ? 0 : null,
    left: title !== "Design" ? 0 : null,
    width: `calc(${active ? titleLength : 0}px)`,
    transition: "width 0.35s ease 0.1s"
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
        <animated.h1 
          ref={ref}
          style={fadeStyle}
        >{title}</animated.h1>
      </div>
      <hr style={hrStyle} />
    </header>
  )
}

export default Header