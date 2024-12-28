import React from 'react'
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuClock } from "react-icons/lu";
import './styles.css'
export default function GenericSection({ sectionName = "Mareting Articles" , background = "white"}) {
    return (
        <div className='generic-section' style={{ backgroundColor: background }}>
            <div className='top'>
                <h2>{sectionName}</h2>
                <a>see all</a>
            </div>
            <div className='course-list'>
                <div className='course'>
                    <img src='/images/little-girl.png' />
                    <div className='design'>
                        <div>
                            <HiOutlineSquares2X2 />
                            <span>Design</span>
                        </div>
                        <div>
                            <LuClock />
                            <span>3 Month</span>
                        </div>
                    </div>
                    <h2>AWS Certified solutions Architect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                    <div className='bot'>
                        <div className='account'>
                            <img src='/images/account-image.png' />
                            <span>Lina</span>
                        </div>
                        <div className='price'>
                            <span className='discount'>$100</span>
                            <span>$80</span>
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img src='/images/blog-list4.png' />
                    <div className='design'>
                        <div>
                            <HiOutlineSquares2X2 />
                            <span>Design</span>
                        </div>
                        <div>
                            <LuClock />
                            <span>3 Month</span>
                        </div>
                    </div>
                    <h2>AWS Certified solutions Architect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                    <div className='bot'>
                        <div className='account'>
                            <img src='/images/account-image.png' />
                            <span>Lina</span>
                        </div>
                        <div className='price'>
                            <span className='discount'>$100</span>
                            <span>$80</span>
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img src='/images/summary.png' />
                    <div className='design'>
                        <div>
                            <HiOutlineSquares2X2 />
                            <span>Design</span>
                        </div>
                        <div>
                            <LuClock />
                            <span>3 Month</span>
                        </div>
                    </div>
                    <h2>AWS Certified solutions Architect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                    <div className='bot'>
                        <div className='account'>
                            <img src='/images/account-image.png' />
                            <span>Lina</span>
                        </div>
                        <div className='price'>
                            <span className='discount'>$100</span>
                            <span>$80</span>
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <img src='/images/cat.png' />
                    <div className='design'>
                        <div>
                            <HiOutlineSquares2X2 />
                            <span>Design</span>
                        </div>
                        <div>
                            <LuClock />
                            <span>3 Month</span>
                        </div>
                    </div>
                    <h2>AWS Certified solutions Architect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                    <div className='bot'>
                        <div className='account'>
                            <img src='/images/account-image.png' />
                            <span>Lina</span>
                        </div>
                        <div className='price'>
                            <span className='discount'>$100</span>
                            <span>$80</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
