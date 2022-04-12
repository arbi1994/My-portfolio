import React from 'react'
import { useSpring, animated } from 'react-spring';
//styles
import * as styles from './styles.module.scss'
//hooks
import useWindowSize from '../../../hooks/useWindowSize'

const Button = () => {
  const [width, height] = useWindowSize()

  const btnStyle = useSpring({
    to: { opacity: 1, scale: 1, transform: width <= 425 ? 'translateX(-50%)' : 'none' },
    from: { opacity: 0, scale: 0.8, transform: width <= 425 ? 'translateX(-50%)' : 'none' },
    delay: width <= 425 ? 300 : 1200,
  })

  return (
    <animated.a 
      href="mailto:arbi.1994@hotmail.com"
      rel="noopener noreferrer nofollow" 
      className={styles.emailBtn}
      style={btnStyle}
    >Email me</animated.a>
  )
}

export default Button