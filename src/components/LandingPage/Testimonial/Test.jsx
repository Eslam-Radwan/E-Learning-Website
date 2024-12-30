import React from 'react';
import TestLeftSection from './TestLeftSection';
import TestRightSection from './TestRightSection';
import styles from './test.module.css'


function Test(props) {
    return (
        <div className={styles.test}>
            <div className={styles.test__container}>
                <TestLeftSection />
                <TestRightSection />
            </div>
        </div>
    );
}

export default Test;