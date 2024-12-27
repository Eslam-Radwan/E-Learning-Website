import React from 'react';
import './testRightSection.css'

function TestRightSection(props) {
    return (
        <div className='testRightSec'>
            <div className="testRightSec__container">
                <img src="/images/smiling-woman-with-afro-posing-pink-sweater.png" alt="" />
                <div className='card'>
                    <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                    <h5 className='author'>Gloria Rose</h5>
                </div>
            </div>
        </div>
    );
}

export default TestRightSection;