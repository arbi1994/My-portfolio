import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { useSpring, animated } from 'react-spring';
// Styles
import * as styles from './styles.module.scss'
// Components
import ScrollDownArrow from '../../../assets/hero-section/ScrollDownArrow'
// hooks
import useSectionIdentifier from '../../../hooks/useSectionIdentifier';

const Hero = () => {
  const heroRef = useSectionIdentifier(
    typeof document !== 'undefined' ? document.getElementById('box-1') : null
  )

  const headerTwoStyle = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -100 },
    delay: 500,
  })

  const headerFourStyle = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    delay: 1000,
  })

  const headerFiveStyle = useSpring({
    to: { opacity: 1, y: 20 },
    from: { opacity: 0, y: 0 },
    delay: 2500,
  })

  return (
    <StaticQuery
      query={graphql`
        query HeroSectionQuery {
          mdx(frontmatter: {section: {eq: "hero"}}) {
            frontmatter {
              subtitle
              title
            }
          }
        }
      `}

      render={data => (
        <section 
          id="home" 
          className={styles.hero}
          ref={heroRef}
        >
          <div className={styles.heroWrapper}>
            <div>
              <animated.h2 style={headerTwoStyle}>{data.mdx.frontmatter.title}</animated.h2>
              <animated.h4 style={headerFourStyle}>{data.mdx.frontmatter.subtitle}</animated.h4>
            </div>
            <div className={styles.imgContainer}>
              <ScrollDownArrow />
            </div>
            <div style={{minHeight: '5em', width: '100%', textAlign: 'center'}}>
              <animated.h5 style={headerFiveStyle}>scroll down</animated.h5>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default Hero