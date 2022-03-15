import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
// Styles
import * as styles from './styles.module.scss';

const ScrollTracker = () => {
  return (
    <div className={styles.container}>
      <button aria-label="scroll to home" id="box-1" className={styles.box} onClick={() => scrollTo('#home')}></button>
      <button aria-label="scroll to projects" id="box-2" className={styles.box} onClick={() => scrollTo('#projects')}></button>
      <button aria-label="scroll to about" id="box-3" className={styles.box} onClick={() => scrollTo('#about')}></button>
      <button aria-label="scroll to contact" id="box-4" className={styles.box} onClick={() => scrollTo('#contact')}></button>
    </div>
  )
};

export default ScrollTracker;
