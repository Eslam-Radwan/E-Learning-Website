import React from 'react';
import styles from './testRightSection.module.css'

function TestRightSection(props) {
    return (
        <div className={styles.testRightSec}>
            <div className={styles.testRightSec__container}>
                <img src="images/smiling-woman-with-afro-posing-pink-sweater.png" alt="" />
                <div className={styles.card}>
                    <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                    <h5 className={styles.author}>Gloria Rose</h5>
                </div>
            </div>
        </div>
    );
}

export default TestRightSection;