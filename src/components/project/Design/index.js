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

const Design = ({ 
  typography, 
  colors, 
  pages, 
}) => {
  const title = "Design"

  const width = useWindowSize()

  return (
    <section className={styles.design}>
      <HeaderTitle title={title} />
      <main>
        <Container typography={typography} />
        <Container colors={colors} />
        <Container pages={pages} />
      </main>
      <div className={styles.blob}>
        <img alt="blob" src={width < 768 ? blobMobile : blob} />
      </div>
    </section>
  )
}

export default Design