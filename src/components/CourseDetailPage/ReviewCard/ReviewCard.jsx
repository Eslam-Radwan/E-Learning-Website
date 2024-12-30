import React from 'react';
import Comment from './Comment';
import { FaStar } from "react-icons/fa";
import styles from './reviewCard.module.css'


function ReviewCard({card}) {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCard__container}>
                <div className={styles.reviewCard__upperSec}>
                    <h3 className={styles.reviewCard__upperSec__heading}>{card.review} out of {card.reviewOut}</h3>
                    <br />
                    <div className={styles.reviewCard__upperSec__stars}>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>
                </div>
                <div className={styles.reviewCard__lowerSec}>
                    {
                        card.comments.map((comment) => { return <Comment key={comment.id} comment={comment} /> })
                    }
                </div>

                
                     
            </div>
        </div>
    );
}

export default ReviewCard;