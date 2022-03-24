import React from 'react'
//styles
import * as styles from './styles.module.scss'
//components
import HeaderTitle from '../HeaderTitle/index'
import Container from '../Container/index'
//hooks 
import useWindowSize from '../../../hooks/useWindowSize'

const Development = ({ 
  technologies, 
  constraints, 
  summary  
}) => {
  const width = useWindowSize()
  const title = `${width <= 425 ? 'Dev' : 'Dev < />'}`

  return (
    <section className={styles.development}>
      <HeaderTitle title={title} />
      <main>
        <Container technologies={technologies} />
        <Container constraints={constraints} />
        <Container summary={summary} />
      </main>
    </section>
  )
}

export default Development