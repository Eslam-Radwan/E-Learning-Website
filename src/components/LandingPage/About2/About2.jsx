import React from 'react';
import { FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import AboutCard from './AboutCard';
import styles from './about2.module.css'

function About2(props) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.about2}>
                    <div>
                        <h1>ALL-In-One <span className={styles.diffColor}> Cloud Software </span></h1>
                        <p>TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.</p>
                    </div>
                    <div className={styles.about2__cards}>
                        <   AboutCard 
                            icon={FaFileAlt}
                            backColor="#5B72EE"
                            heading= 'Online Biling, Invoicing, & contracts'
                            paragraph= "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
                        />
                        <AboutCard
                            icon={FaCalendarAlt}
                            backColor= "#00CBB8"
                            heading= 'Easy Scheduling & Attendance Tracking'
                            paragraph= "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
                        />
                        <AboutCard
                            icon={MdOutlineGroups}
                            backColor="#29B9E7"
                            heading= 'Customer Tracking'
                            paragraph= "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About2;