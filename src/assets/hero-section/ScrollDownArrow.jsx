import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion"

const pathVariants = {
  hidden: {
    visibility: 'hidden',
    pathLength: 0,
  },
  visible: {
    visibility: 'visible',
    pathLength: 1,
    transition: {
      duration: 1,
      type: "linear",
      delay: 1.5
    }
  }
}

const ScrollDownArrow = () => {
  return (
    <motion.svg 
      width="658" 
      height="646" 
      viewBox="0 0 658 646" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden" 
      animate="visible"
    >
    <motion.path 
      d="M341.5 3.5C341.5 3.5 126.149 52.7992 222.971 79.2052C319.793 105.611 654.169 124.493 654.168 177.997C654.168 231.5 3.9987 206.564 4 271.634C4.0013 336.703 509.705 358.757 509.705 398.331C509.705 437.905 238.04 419.385 238.04 466.916C238.04 514.447 420.616 491.541 420.616 514.914C420.616 538.287 339 537.478 339 562.898C339 588.318 339 600.5 339 600.5H383.362L339 641.975L288.723 600.5H327.874" 
      stroke="#2F2E41" 
      strokeWidth="6.34826" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      variants={pathVariants}
    />
    </motion.svg>    
  )
};

export default ScrollDownArrow;
