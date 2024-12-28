import React from 'react'
import Header from '../header/Header'
import './styles.css'
import { FaPaintBrush } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import GenericSection from '../generic-section/GenericSection';
import Coaching from '../coaching/Coaching'
import Footer from '../footer/Footer';
export default function Course() {
    return (
        <div className='course'>
            <Header />
            <div className='continue-section'>
                <div className='container'>
                    <div >
                        <div className='continue'>
                            <h2>Welcome back, ready for your next lesson?</h2>
                            <a>view history</a>
                        </div>
                        <div className='courses'>
                            <div className='course'>
                                <img src='/images/summary.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className='account'>
                                    <img src='/images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className='bar'>
                                </div>
                                <span className='lesson'>lesson 5 of 7</span>
                            </div>
                            <div className='course'>
                                <img src='/images/blog-list2.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className='account'>
                                    <img src='/images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className='bar'>
                                </div>
                                <span className='lesson'>lesson 5 of 7</span>
                            </div>
                            <div className='course'>
                                <img src='/images/summary.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className='account'>
                                    <img src='/images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className='bar'>
                                </div>
                                <span className='lesson'>lesson 5 of 7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='category'>
                <div className='container'>
                    <h2>Choice favourite course from top category</h2>
                    <div className='grid'>
                        <div className='box '>
                            <div className='icon green'>
                                <FaPaintBrush/>
                            </div>
                            <h3>Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon purple'>
                                <RiComputerLine/>
                            </div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon blue'>
                                <FaDatabase/>
                            </div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box '>
                            <div className='icon green'>
                                <RiSuitcaseLine/>
                            </div>
                            <h3>Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon orange'>
                                <FaEdit/>
                            </div>
                            <h3>Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon red'>
                                <FaBook/>
                            </div>
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon grey'>
                                <FaFilm/>
                            </div>
                            <h3>Acting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className='box'>
                            <div className='icon green'>
                                <RiSuitcaseLine/>
                            </div>
                            <h3>Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </div>
            </div>
            <GenericSection sectionName="Recomended For You" background="rgba(157, 204, 255, 0.2)"/>
            <GenericSection sectionName="Get choice of your courses" background="white"/>
            <Coaching/>
            <GenericSection sectionName="The course in personal development" background="white"/>
            <GenericSection sectionName="Student are viewing" background="rgba(157, 204, 255, 0.2)"/>
            <Footer/>
        </div>
    )
}
