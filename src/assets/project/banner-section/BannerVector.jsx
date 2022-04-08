import React from 'react'
import { motion } from "framer-motion"

const linePathvariant = {
  hidden: {
    visibility: 'hidden',
    pathLength: 0,
  },
  visible: {
    visibility: 'visible',
    pathLength: 1,
    transition: {
      duration: 0.5,
      type: "linear",
      delay: 1,   
    }
  }
}

const arrowPathVariant = {
  hidden: {
    visibility: 'hidden',
    pathLength: 0,
  },
  visible: {
    visibility: 'visible',
    pathLength: 1,
    transition: {
      duration: 0.5,
      type: "linear",
      delay: 1.5,   
    }
  }
}

const BannerVector = () => {
  return (
    <motion.svg  
      width="284" 
      height="227" 
      viewBox="0 0 284 227" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden" 
      animate="visible"
    >
      <motion.path 
        d="M2 224.993C26.1739 155.331 115.617 16.0059 280 16.0059" 
        stroke="#F2F2F2" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        variants={linePathvariant}
      />
      <motion.path 
        d="M268.5 2L282.5 16L268.5 30" 
        stroke="#F2F2F2" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        variants={arrowPathVariant}
      />
    </motion.svg>
  )
}

export default BannerVector