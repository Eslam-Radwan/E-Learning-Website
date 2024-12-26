import React from 'react';
import Header from './Header';
import About1 from './About1';
import About2 from './About2';
import WhatIsTotc from './WhatISTotc';
function Landing(props) {
    return (
        <main>
            <Header/>
            <About1/>
            <About2/>
            <WhatIsTotc/>
        </main>
    );
}

export default Landing;