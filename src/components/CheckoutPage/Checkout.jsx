import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './checkout.module.css'
import CheckoutCard from './CheckoutCard';
import SummaryCard from './SummaryCard';
import Education from '../CourseDetailPage/Education/Education';
function Checkout(props) {
    return (
        <div className={styles.checkout}>

            <Header />
            <div className={styles.checkout__container}>
                <CheckoutCard />
                <SummaryCard />
            </div>
            < Education/>
            <Footer />
        </div>
    );
}

export default Checkout;