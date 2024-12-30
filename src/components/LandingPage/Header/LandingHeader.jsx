import React from 'react';
import { MdEmail, MdBarChart } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import styles from './landingHeader.module.css'
import { Link, useNavigate } from 'react-router-dom';


function Header(props) {
    const navigate = useNavigate();
    function handleClick(e){
        navigate('/')
    }
    return (
        <header className={styles.landing__header}>
            <div className={styles.landing__header__container}>
                <div className={styles.landing__header__navBar}>
                    <img src="/images/icons/logo.png" alt="" />
                    {/* <div className={styles.spacer}></div> */}
                    <ul >
                        <div className={styles.landing__header__links}>
                        <li><Link className={styles.link} to='/landing'>Home</Link></li>
                        <li><Link className={styles.link} to='/courses'>Courses</Link></li>
                        <li><Link className={styles.link} to='/blog'>Blog</Link></li>
                        <li><Link className={styles.link} to='/membership'>MemberShip</Link></li>
                        </div>
                        <li><button className={styles.loginButton} onClick={handleClick}>Login</button></li>
                        <li><button onClick={handleClick}>Sign Up</button></li>
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
                            <div className={`${styles.analysisCard} ${styles.card}`}>
                                <MdBarChart />
                            </div>
                            <div className={`${styles.calenderCard} ${styles.card}`}>
                                <FaCalendarAlt className={`${styles.calenderIcon} ${styles.icon}`} />
                                <section>
                                    <h3>250K</h3>
                                    <p>Assisted Student</p>
                                </section>
                            </div>
                            <div className={`${styles.emailCard} ${styles.card}`}>
                                <MdEmail className={`${styles.emailIcon} ${styles.icon}`} />
                                <div>
                                    <h3>Congratulation</h3>
                                    <p>your admission completed</p>
                                </div>
                            </div>
                            <div className={`${styles.userCard} ${styles.card}`}>
                                <img className={styles.userCard__img} src="images/icons/user.png" alt="" />
                                <div>
                                    <h3>User Experience Class</h3>
                                    <p>Today at 12:00 pm</p>
                                    <button onClick={handleClick}>Join Now</button>
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