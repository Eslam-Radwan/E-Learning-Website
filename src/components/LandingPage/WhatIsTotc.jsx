import React from 'react';
import './whatIsTotc.css'
import WhatCard from './WhatCard';
import { FaPlay } from "react-icons/fa6";


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
                <div className="classRoom">
                    <div className='classRoom__leftSec'>
                        <h3>Everything you can do in a physical classroom, <span className='diffColor'> you can do with TOTC</span></h3>
                        <p>TOTC's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <a href="">Learn More</a>
                    </div>
                    <div className='classRoom__playButton'>
                        <div className="classRoom__background">
                            <FaPlay />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatIsTotc;