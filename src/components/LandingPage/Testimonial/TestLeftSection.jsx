import React from 'react';
import './testLeftSection.css'

function TestLeftSection(props) {
    return (
        <div className='testLeftSec'>

            <div className="testLeftSec__container">
                <h3>Testimonial</h3>
                <h4>What They Say?</h4>
                <p>TOTC has got more than 100k positive ratings from our users around the world. </p>
                <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                <p>Are you too? Please give your assessment</p>
                <button>write your assessment</button>
            </div>
        </div>
    );
}

export default TestLeftSection;