import React from 'react';
import Header from '../MainHeader/Header'
import ReviewCard from './ReviewCard/ReviewCard';
import styles from './courseDetail.module.css'
import ProductCard from './ProductCard/ProductCard';
import GenericSection from '../GenericSection/GenericSection';
import ClassRoom from '../LandingPage/WhatIsTotc/ClassRoom.jsx';
import Footer from '../MainFooter/Footer';
import Education from './Education/Education';
function CourseDetail(props) {

    const product = {
        currPrice:20.89, 
        prevPrice:49.99,
        imageSource: 'images/teacher.png',
        features: [
            'feature1',
            'feature2',
            'feature3',
            'feature4',
            'feature5'
        ]
    };
    const card1 = {
        review: 4,
        reviewOut: 5,
        comments: [
            {
                imageSource: '/images/userInterface1.png',
                commenterName: 'ahmed',
                description:'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
                id:1
            },
            {
                imageSource: '/images/userInterface2.png',
                commenterName: 'ahmed',
                description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
                id:2

            },
            {
                imageSource: '/images/userInterface3.png',
                commenterName: 'ahmed',
                description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
                id:3
            }
        ]
    };

    return (
        <div className={styles.courseDetail}>
            <Header />
            <div className={styles.courseDetail__container}>
                <div className={styles.courseDetail__mainImage}>
                    <img src="/images/teacher.png" alt="" />
                </div>
                <div className={styles.courseDetail__product}>
                <ReviewCard card={card1}/>
                <ProductCard product={product}/>
                </div>
                <GenericSection/>
                <ClassRoom/>
                <Education/>
                <Footer/>
            </div>
        </div>
    );
}

export default CourseDetail;