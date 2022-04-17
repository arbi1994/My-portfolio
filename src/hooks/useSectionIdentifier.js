import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Styles
import * as styles from './styles.module.scss';
//hooks
import useWindowSize from './useWindowSize';

const useSectionIdentifier = (el) => {
  const [width, height] = useWindowSize()
  const [rootMargin, setRootMargin] = useState(height)

  useEffect(() => {
    setRootMargin(height/2 - 0.9)
  }, [height])

  const { inView, ref } = useInView({
    rootMargin: `-${rootMargin}px`,
  });

  function detectSection(){
    if(el !== null && typeof el !== 'undefined'){
      inView ? el.classList.add(styles.fill) : el.classList.remove(styles.fill)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', detectSection())

    return () => window.removeEventListener('scroll', detectSection())
  }, [inView])

  return ref
};

export default useSectionIdentifier;
