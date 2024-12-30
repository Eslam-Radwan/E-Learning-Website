import React from 'react';
import WhatCard from './WhatCard';
import ClassRoom from './ClassRoom';
import styles from './whatIsTotc.module.css'

function WhatIsTotc(props) {
    return (
        <div>
            <div className={`${styles.container} ${styles.whatSec}`}>
                <h2>What is <span className={styles.diffColor}>TOTC?</span></h2>
                <p>TOTC is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br />
                    due dates; grade results and provide students with feedback all in one place.</p>
                <div className={styles.whatCards}>
                    <WhatCard
                        class='instructor'
                        heading='FOR INSTRUCTORS'
                        buttonName='Start a Class Today'
                    />
                    <WhatCard
                        class='student'
                        heading='FOR STUDENTS'
                        buttonName='Enter Access Code'
                    />
                </div>
                <ClassRoom/>
            </div>
        </div>
    );
}

export default WhatIsTotc;