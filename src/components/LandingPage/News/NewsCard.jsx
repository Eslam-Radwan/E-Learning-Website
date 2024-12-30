import React from 'react';
import styles from './newsCard.module.css'

function NewsCard(props) {
    return (
        <div className={`${styles.newsCard} ${styles.props.className}`}>
            <div className={styles.newsCard__container}>
                <div className={styles.newsCard__container__leftSec}>
                <img src={props.img} alt="" />
                <p>{props.category}</p>
                </div>
                <div className={styles.newsCard__container__rightSec}>
                <h3>{props.title}</h3>
                <p>{props.para}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;