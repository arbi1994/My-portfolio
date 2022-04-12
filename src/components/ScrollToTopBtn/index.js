import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
//styles
import * as styles from './styles.module.scss'
//icons
import { IoIosArrowUp } from 'react-icons/io'

const ScrollToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    function handleScrollToTop() {
      window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false)
    }

    window.addEventListener('scroll', handleScrollToTop)

    return () => window.removeEventListener('scroll', handleScrollToTop)
  }, [])

  const handleScrollToTop = () => {
    try{
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }catch(error){
      window.scrollTo(0, 0)
    }
  }

  const transition = useTransition(showBtn, {
    config: { durationL: 150 },
    from: { y: '150px' }, 
    enter: { y: '20px' }, 
    leave: { y: '150px' },
  })
  
  return (
    <div className={styles.box}>
      {transition((style, item) => 
        item 
          ?    
            <animated.button 
              type="button"
              style={style}
              className={styles.scrollToTop}
              onClick={handleScrollToTop}  
              name="scroll to top"
            >
              <IoIosArrowUp />
            </animated.button>
          : null
      )}
    </div>
  )
}

export default ScrollToTopBtn