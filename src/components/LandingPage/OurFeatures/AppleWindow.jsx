import React from 'react';
import styles from './appleWindow.module.css'

function AppleWindow(props) {
    return (
        <div>
            <div className={styles.appleInner}>
                <div className={styles.redBall}></div>
                <div className={styles.yellowBall}></div>
                <div className={styles.greenBall}></div>
            </div>
            <div className={styles.appleOuter}>
            </div>
        </div>
    );
}

export default AppleWindow;