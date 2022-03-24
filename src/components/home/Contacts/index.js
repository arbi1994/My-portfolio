import React from 'react'
import * as styles from './styles.module.scss'
// icons
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Contacts = ({ data }) => {
  const renderedLinks = data.links.map(({
    label,
    contact,
    cta,
    url,
  }) => {
    return (
      <div key={label} className={styles.link}>
        <span className={styles.icon}>
          {
            label === "E-MAIL" ? <MdEmail /> :
            label === "Phone" ? <BsFillTelephoneFill /> :
            label === "Linkedin" ? <FaLinkedinIn /> : null
          }
        </span>
        <div className={styles.content}>
          <h5>{label}</h5>
          <p>{contact}</p>
          <a 
            href={url} 
            rel="noopener noreferrer nofollow" 
            target={label === 'Linkedin' ? "_blank" : null}
          >{cta}</a>
        </div>
      </div>
    )
  })

  return (
    <div className={styles.contacts}>
      <div className={styles.header}>
        <h3>{data.subtitle}</h3>
      </div>
      <div className={styles.contactLinks}>
        <div>
          {renderedLinks}
        </div>
      </div>
    </div>
  )
}

export default Contacts