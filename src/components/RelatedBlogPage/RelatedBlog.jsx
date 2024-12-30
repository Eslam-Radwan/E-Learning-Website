import React from 'react'
import { FaEye } from "react-icons/fa";
import './styles.css'
import styles from './relatedBlog.module.css'


export default function RelatedBlog() {
    return (
        <div className={styles.related-blogs}>
            <div className={styles.noname}>
                <h2>Related Blog</h2>
                <a>see all</a>
            </div>
            <div className={styles.blogs}>
                <div className={styles.blog}>
                    <img src='/images/blog.png' />
                    <p>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                    <div className={styles.account}>
                        <img src='/images/account-image.png' />
                        <span>Lina</span>
                    </div>
                    <p className={styles.description}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className={styles.read}>
                        <a href='#'>Read more</a>
                        <div className={styles.views}>
                            <FaEye />
                            <span>251,232</span>
                        </div>
                    </div>
                </div>
                <div className={styles.blog}>
                    <img src='/images/summary.png' />
                    <p>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                    <div className={styles.account}>
                        <img src='/images/account-image.png' />
                        <span>Lina</span>
                    </div>
                    <p className={styles.description}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <div className={styles.read}>
                        <a href='#'>Read more</a>
                        <div className={styles.views}>
                            <FaEye />
                            <span>251,232</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
