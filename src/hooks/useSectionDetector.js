import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const useSectionDetector = () => {
  const { inView, ref } = useInView({
    rootMargin: '-50px',
  })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if(inView) setActive(true)
  }, [inView])

  return [ref, active]
}

export default useSectionDetector