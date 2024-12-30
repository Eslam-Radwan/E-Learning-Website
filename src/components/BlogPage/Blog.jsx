import React from 'react'
import Header from '../MainHeader/Header'
import styles from './blog.module.css'

import RelatedBlog from '../RelatedBlogPage/RelatedBlog'
import GenericSection from '../GenericSection/GenericSection'
import Footer from '../MainFooter/Footer'
export default function Blog() {
  return (
    <div className={styles.blog}>
      <Header />
      <div className={styles.summary}>
        <div className={styles.content}>
          <p className={styles.author}>By Themadbrains in <span>inspiration</span></p>
          <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
          <p className={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className={styles['start-button']}>start Learning now</button>
        </div>
        <img src='/images/summary.png' />
      </div>
      <div className={styles['blog-list']}>
        <h2>Reading blog list</h2>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <img src='/images/blog-list1.jpeg' />
            <div className={styles['box-label']}>
              <span>UX/UI</span>
            </div>
          </div>
          <div className={styles.box}>
            <img src='/images/blog-list2.png' />
            <div className={styles['box-label']}>
              <span>React</span>
            </div>
          </div>
          <div className={styles.box}>
            <img src='/images/blog-list3.jpeg' />
            <div className={styles['box-label']}>
              <span>PHP</span>
            </div>
          </div>
          <div className={styles.box}>
            <img src='/images/blog-list4.png' />
            <div className={styles['box-label']}>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <RelatedBlog/>
      <GenericSection/>
      <Footer/>
    </div>
  )
}
