import React from 'react';
import { MdEmail, MdBarChart } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import styles from './header.module.css'


function Header(props) {
    return (
        <header className={styles.landing__header}>
            <div className={styles.landing__header__container}>
                <div className={styles.landing__header__navBar}>
                    <img src="/images/icons/logo.png" alt="" />
                    <div className={styles.spacer}></div>
                    <ul >
                        <div className={styles.landing__header__links}>
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li><a>Career</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                        </div>
                        <li><button className={styles.loginButton}>Login</button></li>
                        <li><button>Sign Up</button></li>
                    </ul>
                </div>
                <div className={styles.heading}>
                    <div className={styles.leftSec}>
                        <h1> <span className={styles.studying}>Studying</span> Online is now <br /> much easier</h1>
                        <p>TOTC is an interesting platform that will teach you in more an interactive way</p> <br />
                        <button className={`${styles.joinButton} margin-right-10`}>Join for free</button>
                        <button className={`${styles.playButton} margin-right-10`} id='playButton' ><FaPlay /></button>
                        <label htmlFor="playButton">Watch how it works</label>
                    </div>
                    <div className={styles.rightSec}>
                        <img src="/images/lovely-teenage-girl.png" alt="" />
                        <div className={styles.cards}>
                            <div className={`${analysisCard} ${card}`}>
                                <MdBarChart />
                            </div>
                            <div className={`${calenderCard} ${card}`}>
                                <FaCalendarAlt className={`${calenderIcon} ${icon}`} />
                                <section>
                                    <h3>250K</h3>
                                    <p>Assisted Student</p>
                                </section>
                            </div>
                            <div className={`${emailCard} ${card}`}>
                                <MdEmail className={`${emailIcon} ${icon}`} />
                                <div>
                                    <h3>Congratulation</h3>
                                    <p>your admission completed</p>
                                </div>
                            </div>
                            <div className={`${userCard} ${card}`}>
                                <img className={styles.userCard__img} src="images/icons/user.png" alt="" />
                                <div>
                                    <h3>User Experience Class</h3>
                                    <p>Today at 12:00 pm</p>
                                    <button>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;