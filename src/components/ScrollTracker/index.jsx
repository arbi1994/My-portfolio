import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
// Styles
import * as styles from './styles.module.scss';

const ScrollTracker = () => {
  return (
    <div className={styles.scrollTrackerContainer}>
      <button 
        aria-label="scroll to home" 
        title="home" 
        id="box-1" 
        className={styles.box} 
        onClick={() => scrollTo('#home')}
      />
      <button 
        aria-label="scroll to projects" 
        title="projects" 
        id="box-2" 
        className={styles.box} 
        onClick={() => scrollTo('#projects')} 
      />
      <button 
        aria-label="scroll to about" 
        title="about" 
        id="box-3" 
        className={styles.box} 
        onClick={() => scrollTo('#about')} 
      />
      <button 
        aria-label="scroll to contact" 
        title="contact" 
        id="box-4" 
        className={styles.box} 
        onClick={() => scrollTo('#contact')} 
      />
    </div>
  )
};

export default ScrollTracker;
