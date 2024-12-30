import React from 'react';
import styles from './whatCard.module.css'

function WhatCard(props) {
    return (
        <div className={`${styles.props.class} ${styles.whatCard}`}>
            <div className={styles.blackCover}>
                <h3>{props.heading}</h3>
                <button>{props.buttonName}</button>
            </div>
        </div>
    );
}

export default WhatCard;