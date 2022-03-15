import React, { useState } from 'react';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { useTransition, animated } from 'react-spring';
// Styles
import * as styles from './styles.module.scss';
// logo
import logo from '../../images/logo.svg';
// menu icons
import burgerIcon from '../../images/burger-icon.svg';
import closeIcon from '../../images/close-icon.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const links = [
    {
      id: '#projects',
      label: 'Projects',
    },
    {
      id: '#about',
      label: 'About',
    },
    {
      id: '#contact',
      label: 'Contact',
    },
  ]

  // animation
  const transitions = useTransition(links, {
    from: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0 },
    delay: 500,
    trail: 200,
  })

  // desktop render
  const renderedListItems = links.map(({ id, label }) => {
    return (
      <li 
        key={id} 
      > 
        <button onClick={() => scrollTo(id)}>{label}</button>
      </li>
    )
  })

  // mobile render
  const renderedAnimatedListItems = transitions((style, item) =>
    item && (
      <animated.li 
        style={style}
        key={item} 
        onClick={handleClick}
      > 
        <button onClick={() => scrollTo(item.id)}>{item.label}</button>
      </animated.li>
    ))

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <div className={styles.navbarLeft}>
          <Link className={styles.navbarLogo} to='/'>
            <img alt="" src={logo}/>
          </Link>
        </div>
        <div className={toggle ? styles.navbarRight + " " + styles.active : styles.navbarRight}>
          <ul className={toggle ? styles.active : null}>
            {toggle 
              ? renderedAnimatedListItems
              : renderedListItems 
            } 
          </ul>
          <button 
            className={styles.navBtn}
            onClick={handleClick}
          >
            <img alt="" src={toggle ? closeIcon : burgerIcon} />
          </button>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
