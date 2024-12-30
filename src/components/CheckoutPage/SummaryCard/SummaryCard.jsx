import React from 'react';
import styles from './summaryCard.module.css'
function SummaryCard(props) {
    return (
        <div className={styles.summaryCard}>
            <h2>Summary</h2>
            <div className={styles.summaryCard__card}>
                <img src="images/confident-teacher-explaining-lesson.png" alt="" />
                <div>
                    <h3>adipising elit, sed do eiusmod tempor</h3>
                    <p>Lorem ipsum dollar...</p>
                    <h3>$24.69</h3>
                </div>
            </div>
            <div className={styles.summaryCard__card}>
                <img src="images/confident-teacher-explaining-lesson.png" alt="" />
                <div>
                    <h3>adipising elit, sed do eiusmod tempor</h3>
                    <p>Lorem ipsum dollar...</p>
                    <h3>$24.69</h3>
                </div>
            </div>
            <div className={styles.summaryCard__lowerSec}>

                <div>
                <h3>subtotal</h3>
                <h3>$51.66</h3>
                </div>
                <div>

                <h3>Copoun Discount</h3>
                <h3>0 %</h3>
                </div>
                <div>
                <h3>TAX </h3>
                <h3>5</h3>
                </div>
                <div>
                <h3>TOTAL</h3>
                <h3>$56.38</h3>
                </div>
            </div>
        </div>
    );
}

export default SummaryCard;