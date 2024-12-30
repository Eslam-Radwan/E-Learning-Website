import React from 'react';
import Header from './Header/Header';
import About1 from './About1/About1';
import About2 from './About2/About2';
import WhatIsTotc from './WhatISTotc/WhatISTotc';
import OurFeatures from './OurFeatures/OurFeatures';
import Testimonial from './Testimonial/Test';
import News from './News/News';
import Footer from '../footer/Footer';
import './landing.module.css'
import styles from './landing.module.css'


function Landing(props) {
    return (
        <main>
            <Header/>
            <About1/>
            <About2/>
            <WhatIsTotc/>
            <OurFeatures />
            <Testimonial/>
            <News/>
            <Footer />

        </main>
    );
}

export default Landing;