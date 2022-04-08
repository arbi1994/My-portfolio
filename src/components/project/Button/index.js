import React from 'react'
import { useSpring, animated } from 'react-spring';
//styles
import * as styles from './styles.module.scss'

const Button = () => {
  const btnStyle = useSpring({
    to: { opacity: 1, },
    from: { opacity: 0, },
    delay: 1200,
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