import React from 'react'
import './styles.css'
export default function Header() {
  return (
    <div className='header'>
        <img src='/images/icon.png'/>
        <div className='wrap'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>About Us</a></li>
        </ul>
        <div className='account'>
            <img src='/images/account-image.png'/>
            <span>Lina</span>
        </div>
        </div>
    </div>
  )
}
