import React from 'react'
// styles
import * as styles from './styles.module.scss'
//images
import blob from '../../../assets/project/design-section/blob.svg'
import blobMobile from '../../../assets/project/design-section/blob-mobile.svg'
// components
import HeaderTitle from '../HeaderTitle/index'
import Container from '../Container/index'
//hooks
import useWindowSize from '../../../hooks/useWindowSize'
import useSectionDetector from '../../../hooks/useSectionDetector'

const Design = ({ 
  id, 
  typography, 
  colors, 
  pages, 
}) => {
  const title = "Design"
  const width = useWindowSize()
  const [ref, active] = useSectionDetector()

  return (
    <section ref={ref} className={styles.design}>
      <HeaderTitle title={title} active={active} />
      <main>
        <Container id={id} typography={typography} />
        <Container id={id} colors={colors} />
        <Container id={id} pages={pages} />
      </main>
      <div className={styles.blob}>
        <img alt="blob" src={width < 768 ? blobMobile : blob} />
      </div>
    </section>
  )
}

export default Design