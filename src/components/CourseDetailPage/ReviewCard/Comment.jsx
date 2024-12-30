import React from 'react';
import styles from './comment.module.css';

function Comment({ comment }) {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__container}>

                <div className={styles.comment__upperSec}>
                    <img src={comment.imageSource} alt="" />
                    <h3>{comment.commenterName}</h3>
                    <p>{comment.rating}</p>
                </div>
                <div className={styles.comment__lowerSec}>
                    <p>{comment.description}</p>
                </div>
                
            </div>
        </div>
    );
}

export default Comment;