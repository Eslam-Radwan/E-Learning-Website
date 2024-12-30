import React from 'react';
import Footer from '../MainFooter/Footer';
import Header from '../MainHeader/Header';
import styles from './checkout.module.css'
import CheckoutCard from './CheckoutCard/CheckoutCard';
import SummaryCard from './SummaryCard/SummaryCard';
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