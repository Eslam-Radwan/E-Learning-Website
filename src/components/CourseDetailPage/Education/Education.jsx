import React from 'react';
import EducationCard from './EducationCard';
import styles from './educationPage.module.css'
function Education(props) {
    return (
        <div className={styles.education}>
                <h2 className={styles.education__heading}>Top Education offers and deals are listed here</h2>
            <div className={styles.education__container}>
                <EducationCard />
                <EducationCard />
                <EducationCard />
            </div>
        </div>
    );
}

export default Education;