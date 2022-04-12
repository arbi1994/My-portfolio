import React from 'react'
//styles
import * as styles from './styles.module.scss'

const Paragraph = () => {
  return (
    <p className={styles.paragraph}>
      Hi everyone, I am a frontend developer who loves to create stuff for the web. I’ve first approached to programming in 2019 by attending a programming course for people with no experience.    
      <br/>Once finished in 2020, I had a grasp of programming languages like java, c#, and some SQL, but I still felt there was something missing. I didn’t really know what path to follow, what really motivates me keep learning. 
      <br/>Covid hits and the first of many lockdowns comes, so with plenty of time in my hands, I did a lot of research until my doubts and uncertainties vanished. I found web development the way to go. 
      <br/>Even though I did some web development using frameworks like .Net and jQuery, I felt I wanted to start from the bottom and learn the basics of Html and Css. After a few tutorials and mini projects done, I finally restarted to program some functionalities using this time Javascript, which I found the most used language in the web. 
      <br/>After building a few projects using just vanilla JS, I really felt I needed to have a better file structure, and a compiler that optimizes all my html, css, and js files, so I opted for React, a frontend JS library.
      <br/>At the beginning it was a bit confusing to grasp, but after few days I felt my workflow was improved and with its component-based structure, it was easier to build and maintain the UI. 
      <br/>Since then, I never stop using it for my projects. I just kept learning and diving more into it. 
      <br/>My next goal is to learn some backend to implement in my projects, so that I can build full stack applications.  
    </p>
  )
}

export default Paragraph