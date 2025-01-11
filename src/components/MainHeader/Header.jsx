import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className={styles.header}>
      <img src='images/icon.png' />
      <div className={styles.wrap}>
        <ul>
          <li><Link className={styles.link} to='/landing'>Home</Link></li>
          <li><Link className={styles.link} to='/courses'>Courses</Link></li>
          <li><Link className={styles.link} to='/blog'>Blog</Link></li>
          <li><Link className={styles.link} to='/membership'>MemberShip</Link></li>
        </ul>
        <div className={styles.account}>
          <img src='images/account-image.png' />
          <span>Lina</span>
        </div>
      </div>
    </div>
  )
}
