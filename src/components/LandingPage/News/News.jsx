import React from 'react';
import NewsCard from './NewsCard';
import styles from './news.module.css'


function News(props) {
    return (
        <div className={styles.news}>
            <div className={styles.news__container}>
                <div className={styles.news__container__header}>
                <h2>Latest News and Resources</h2>
                <p>See the developments that have occurred to TOTC in the world</p>
                </div>
                <div className={styles.news__container__cards}>
                    <NewsCard
                        title='Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand'
                        para='Class Technologies Inc., the company that created Class,...'
                        category='PRESS RELEASE'
                        img='images/New1.png'
                        className='news__container__card1'
                    />
                    <NewsCard
                        title="Zoom's earliest investors are betting millions on a better Zoom for schools"
                        para='Zoom was never created to be a consumer product. Nonetheless, the...'
                        category='NEWS'
                        img='images/New2.png'
                        className='news__container__card2' />
                    <NewsCard
                        title='Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms'
                        para='This year, investors have reaped big financial returns from betting on Zoom...'
                        category='NEWS'
                        img='images/New3.png'
                        className='news__container__card3' />
                    <NewsCard
                        title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
                        para='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
                        category='NEWS'
                        img='images/New4.png'
                        className='news__container__card4' />
                </div>
            </div>

        </div>
    );
}

export default News;