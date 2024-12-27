import React from 'react';
import TestLeftSection from './TestLeftSection';
import TestRightSection from './TestRightSection';
import './test.css'

function Test(props) {
    return (
        <div className='test'>
            <div className="test__container">
                <TestLeftSection />
                <TestRightSection />
            </div>
        </div>
    );
}

export default Test;