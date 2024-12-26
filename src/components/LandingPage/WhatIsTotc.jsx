import React from 'react';
import './whatIsTotc.css'
import WhatCard from './WhatCard';
function WhatIsTotc(props) {
    return (
        <div>
            <div className="container whatSec">
                <h2>What is <span className='diffColor'>TOTC?</span></h2>
                <p>TOTC is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br />
                    due dates; grade results and provide students with feedback all in one place.</p>
                <div className='whatCards'>
                    <WhatCard
                        class='instructor'
                        heading='FOR INSTRUCTORS'
                        buttonName='Start a Class Today'
                    />
                    <WhatCard
                        class='student'
                        heading='FOR STUDENTS'
                        buttonName='Enter Access Code'
                    />
                </div>
            </div>
        </div>
    );
}

export default WhatIsTotc;