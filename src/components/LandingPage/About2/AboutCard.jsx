import React from 'react';
import styles from './aboutCard.module.css'


function AboutCard(props) {
    return (
        <div className={styles.aboutCard}>
            <div className={styles.iconCard} style={{ backgroundColor: props.backColor }}>
            <props.icon className={styles.aboutCard__icon}  />
            </div>
            <h3 className={styles.aboutCard__heading}>{props.heading}</h3>
            <p className={styles.aboutCard__para}>{props.paragraph}</p>
        </div>
    );
}

export default AboutCard;