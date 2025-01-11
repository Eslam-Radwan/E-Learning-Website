import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.head}>
            <img src="/images/icon2.png" alt="logo" />
            <h3>Virtual Class for Zoom</h3>
        </div>
        <h2>Subscribe to get our Newsletter</h2>
        <div className={styles.email}>
            <input type='email' placeholder='Your Email'></input>
            <button>Subscribe</button>
        </div>
        <div className={styles.links}>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
        <p>© 2021 Class Technologies Inc. </p>
    </div>
  )
}
