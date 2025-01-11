import React from 'react'
import Header from '../MainHeader/Header'
import styles from './course.module.css';

import { FaPaintBrush } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import GenericSection from '../GenericSection/GenericSection';
import Coaching from '../CoachingSection/Coaching'
import Footer from '../MainFooter/Footer';
export default function Course() {
    return (
        <div className={styles.course}>
            <Header />
            <div className={styles['continue-section']}>
                <div className={styles.container}>
                    <div >
                        <div className={styles.continue}>
                            <h2>Welcome back, ready for your next lesson?</h2>
                            <a>view history</a>
                        </div>
                        <div className={styles.courses}>
                            <div className={styles.course}>
                                <img src='images/summary.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className={styles.account}>
                                    <img src='images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className={styles.bar}>
                                </div>
                                <span className={styles.lesson}>lesson 5 of 7</span>
                            </div>
                            <div className={styles.course}>
                                <img src='images/blog-list2.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className={styles.account}>
                                    <img src='images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className={styles.bar}>
                                </div>
                                <span className={styles.lesson}>lesson 5 of 7</span>
                            </div>
                            <div className={styles.course}>
                                <img src='images/summary.png' />
                                <h3>AWS Certified Solutions Architect</h3>
                                <div className={styles.account}>
                                    <img src='images/account-image.png' />
                                    <span>Lina</span>
                                </div>
                                <div className={styles.bar}>
                                </div>
                                <span className={styles.lesson}>lesson 5 of 7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.container}>
                    <h2>Choice favourite course from top category</h2>
                    <div className={styles.grid}>
                        <div className={styles.box}>
                            <div className={` ${styles.icon} ${styles.green}`}>
                                <FaPaintBrush />
                            </div>
                            <h3>Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.purple}`}>
                                <RiComputerLine />
                            </div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.blue}`}>
                                <FaDatabase />
                            </div>
                            <h3>Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.green}`}>
                                <RiSuitcaseLine />
                            </div>
                            <h3>Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.orange}`}>
                                <FaEdit />
                            </div>
                            <h3>Marketing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.red}`}>
                                <FaBook />
                            </div>
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.grey}`}>
                                <FaFilm />
                            </div>
                            <h3>Acting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                        <div className={styles.box}>
                            <div className={`${styles.icon} ${styles.green}`}>
                                <RiSuitcaseLine />
                            </div>
                            <h3>Business</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                        </div>
                    </div>
                </div>
            </div>
            <GenericSection sectionName="Recomended For You" background="rgba(157, 204, 255, 0.2)" />
            <GenericSection sectionName="Get choice of your courses" background="white" />
            <Coaching />
            <GenericSection sectionName="The course in personal development" background="white" />
            <GenericSection sectionName="Student are viewing" background="rgba(157, 204, 255, 0.2)" />
            <Footer />
        </div>
    )
}
