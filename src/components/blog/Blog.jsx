import React from 'react'
import Header from '../header/Header'
import './styles.css'
import RelatedBlog from '../related blog/RelatedBlog'
import GenericSection from '../generic-section/GenericSection'
import Footer from '../footer/Footer'
export default function Blog() {
  return (
    <div className='blog'>
      <Header />
      <div className='summary'>
        <div className='content'>
          <p className='author'>By Themadbrains in <span>inspiration</span></p>
          <h1>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
          <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          <button className='start-button'>start Learning now</button>
        </div>
        <img src='/images/summary.png' />
      </div>
      <div className='blog-list'>
        <h2>Reading blog list</h2>
        <div className='boxes'>
          <div className='box'>
            <img src='/images/blog-list1.jpeg' />
            <div className='box-label'>
              <span>UX/UI</span>
            </div>
          </div>
          <div className='box'>
            <img src='/images/blog-list2.png' />
            <div className='box-label'>
              <span>React</span>
            </div>
          </div>
          <div className='box'>
            <img src='/images/blog-list3.jpeg' />
            <div className='box-label'>
              <span>PHP</span>
            </div>
          </div>
          <div className='box'>
            <img src='/images/blog-list4.png' />
            <div className='box-label'>
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
