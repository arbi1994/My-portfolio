import React from 'react'
//styles
import * as styles from './styles.module.scss'
//images
import BannerText from '../../../assets/project/banner-section/BannerText'
//components
import BannerVector from '../../../assets/project/banner-section/BannerVector'
import Button from '../Button/index'
//hooks
import useSectionDetector from  '../../../hooks/useSectionDetector'

const Banner = () => {
  const [ref, active] = useSectionDetector()

  return (
    <section ref={ref} className={styles.banner}>
      <div className={styles.wrapper}>
        <h1>Let's work</h1>
        {active 
          ? <div className={styles.innerWrapper}>
            <BannerText />
            <div className={styles.vector}>
              <BannerVector />
            </div>
          </div> 
          : null}
        {active ? <Button /> : null }
      </div>
    </section>
  )
}

export default Banner