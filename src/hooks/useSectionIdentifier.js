import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Styles
import * as styles from '../Components/ScrollTracker/styles.module.scss';

const useSectionIdentifier = (el) => {
  const { inView, ref } = useInView({
    rootMargin: '-300px'
  });

  function detectSection(){
    if(el !== null){
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
