import React, { useState, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
// Styles
import * as styles from '../styles.module.scss';

const HomeBlob = () => {
  const [active, setActive] = useState(false)

  const { path } = useSpring({
    // config: { duration: 2000 },
    path: active ? 1 : 0,
    config: config.wobbly,
    delay: 100
  })

  useEffect(() => {
    setActive(true)
  }, [])

  return (
    <div className={styles.blob}>
      <svg  
        // className={styles.homeBlob}
        viewBox="0 0 1920 1080" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path 
          d={path.to({
            output: [
              "M0.99707 0H1921C1921 0 1673 55.5 1379 222.5C789.586 557.299 1171.21 736.972 547.459 1032.4C296 1151.5 0.99707 1080.14 0.99707 1080.14V0Z",
              "M0 0H1754.76C2106.63 75.6806 1875.71 604.808 1259.62 675C954.38 709.776 755.606 524.86 473.083 635.449C228.975 731.001 0 1080 0 1080V0Z",
            ]
          })}
          fill="url(#paint0_linear_16_59)"
        />
        <defs>
          <linearGradient 
            id="paint0_linear_16_59" 
            x1="960" 
            y1="0" 
            x2="960" 
            y2="1080" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#945AC8"/>
            <stop offset="1" stopColor="#E23434"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default HomeBlob;