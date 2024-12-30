import React from 'react';
import { FaPlay } from "react-icons/fa6";

import styles from './whatIsTotc.module.css'
function ClassRoom(props) {
    return (
        <div className={styles.classRoom}>
            <div className={styles.classRoom__leftSec}>
                <h3>Everything you can do in a physical classroom, <span className={styles.diffColor}> you can do with TOTC</span></h3>
                <p>TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <a href="">Learn More</a>
            </div>
            <div className={styles.classRoom__playButton}>
                <div className={styles.classRoom__background}>
                    <FaPlay />
                </div>
            </div>
        </div>
    );
}

export default ClassRoom;