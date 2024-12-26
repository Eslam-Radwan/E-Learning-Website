import React, { useState } from 'react'
import './styles.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { FaCircleCheck } from "react-icons/fa6";
import Coaching from '../coaching/Coaching';
import { IoIosArrowDown } from "react-icons/io";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function MemberShip() {
  const [opened, setOpened] = useState(Array.from({ length: 5 }, (_, i) => false))


  function handleClick(index){
    const key = index
    console.log(key);
    
    setOpened((prevOpened)=>{
      const newarr = [...prevOpened];
    newarr[index] = !newarr[index];
    return newarr;
    })
    console.log(opened);
  }

  
  function accordion() {
    return (
      <ul>
        {opened.map((_, index) => {
          return (
            <li>
              <div className='item'>
                <div className='name'>
                  <div className='circle'></div>
                  <h3>Lorem ipsum dolor sit amet</h3>
                </div>
                <IoIosArrowDown onClick={()=>handleClick(index)} />
              </div>
              {opened[index] && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>}
            </li>
          )
        })}
      </ul>
    )
  }


  return (
    <div className='membership'>
      <Header />
      <div className='pricing'>
        <h1>Affordable pricing</h1>
        <div className='plans'>
          <div className='plan'>
            <div>
              <p>Like a pussy</p>
              <h1>Free<span>/FOREVER</span></h1>
              <ul>
                <li><FaCircleCheck /><span>Components-driven system</span></li>
                <li><FaCircleCheck /><span>Sales-boosting landing pages</span></li>
                <li><FaCircleCheck /><span>Awesome Feather icons pack</span></li>
              </ul>
            </div>
            <button>Try for free</button>
          </div>
          <div className='plan best'>
            <div>
              <div className='offer'>
                <p>Individual</p>
                <span>BEST!</span>
              </div>
              <h1>$24<span>/MONTHS</span></h1>
              <ul>
                <li><FaCircleCheck /><span>Components-driven system</span></li>
                <li><FaCircleCheck /><span>Sales-boosting landing pages</span></li>
                <li><FaCircleCheck /><span>Awesome Feather icons pack</span></li>
                <li><FaCircleCheck /><span>Themed into 3 different styles</span></li>
                <li><FaCircleCheck /><span>Will help to learn Figma</span></li>
              </ul>
            </div>
            <button>Regular License</button>
          </div>
          <div className='plan'>
            <div>
              <p>Corporate</p>
              <h1>$12<span>/EDITOR</span></h1>
              <ul>
                <li><FaCircleCheck /><span>Components-driven system</span></li>
                <li><FaCircleCheck /><span>Sales-boosting landing pages</span></li>
                <li><FaCircleCheck /><span>Awesome Feather icons pack</span></li>
                <li><FaCircleCheck /><span>Themed into 3 different styles</span></li>
              </ul>
            </div>
            <button>Extended License</button>
          </div>
        </div>
      </div>
      <Coaching />
      <div className='accordion'>
        <h2>Online coaching lessons for remote learning.</h2>
          {
            accordion()
          }
      </div>
      <div className='reviews'>
        <div className='container'>
          <h2>What our students have to say</h2>
          <div className='boxes'>
            <div className='box'>
              <div className='image'>
                <img src='/images/account-image.png'/>
              </div>
              <h3>Bulkin Simons</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
            </div>
            <div className='box'>
              <div className='image'>
                <img src='/images/account-image.png'/>
              </div>
              <h3>Bulkin Simons</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
            </div>
            <div className='box'>
              <div className='image'>
                <img src='/images/account-image.png'/>
              </div>
              <h3>Bulkin Simons</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
            </div>
            <div className='box'>
              <div className='image'>
                <img src='/images/account-image.png'/>
              </div>
              <h3>Bulkin Simons</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
            </div>
          </div>
          <div className='app'>
            <h2>APP is available for free</h2>
            <div className='buttons'>
              <button className='android'><FaAndroid/>Android APP</button>
              <button className='apple'><FaApple/>IOS APP</button>
            </div>
          </div>
        </div>
      </div>
      <div className='apply'>
        <div className='boxes'>
          <div className='box'>
            <img src='/images/summary.png'/>
            <h3>Become a teacher</h3>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <button>Apply a Teacher</button>
          </div>
          <div className='box'>
            <img src='/images/summary.png'/>
            <h3>Become a teacher</h3>
            <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
            <button>Apply a Teacher</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
