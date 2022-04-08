import React from 'react'
//styles
import * as styles from './styles.module.scss'
//components
import HeaderTitle from '../HeaderTitle/index'
import Container from '../Container/index'
//hooks 
import useWindowSize from '../../../hooks/useWindowSize'
import useSectionDetector from '../../../hooks/useSectionDetector'

const Development = ({ 
  technologies, 
  constraints, 
  summary  
}) => {
  const width = useWindowSize()
  const title = `${width <= 425 ? 'Dev' : 'Dev < />'}`
  const [ref, active] = useSectionDetector()

  return (
    <section ref={ref} className={styles.development}>
      <HeaderTitle title={title} active={active} />
      <main>
        <Container technologies={technologies} />
        <Container constraints={constraints} />
        <Container summary={summary} />
      </main>
    </section>
  )
}

export default Development