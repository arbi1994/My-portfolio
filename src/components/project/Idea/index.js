import React from 'react'
// styles
import * as styles from './styles.module.scss'
// images
import blob from '../../../assets/project/idea-section/blob.svg'
import guy from '../../../assets/project/idea-section/idea-guy.svg'
// components
import HeaderTitle from '../HeaderTitle/index'
//hooks
import useSectionDetector from '../../../hooks/useSectionDetector'

const Idea = ({ idea }) => {
  const title = "Idea"
  const [ref, active] = useSectionDetector()

  return (
    <section ref={ref} className={styles.idea}>
      <HeaderTitle title={title} active={active} />
      <main>
        <div className={styles.paragraph}>
          <p>{idea}</p>
        </div>
        <div className={styles.image}><img alt="guy" src={guy} /></div>
      </main>
      <div className={styles.blob}><img alt="blob" src={blob} /></div>
    </section>
  )
}

export default Idea