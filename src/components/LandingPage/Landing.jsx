import React from 'react';
import Header from './Header';
import About1 from './About1';
import About2 from './About2';
import WhatIsTotc from './WhatISTotc';
import OurFeatures from './OurFeatures';
import Testimonial from './Testimonial/Test';
import News from './News/News';
import Footer from '../footer/Footer';
import './landing.css'

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