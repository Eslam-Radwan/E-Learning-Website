import React from 'react';
import './ourFeatures.css'
import AppleWindow from './AppleWindow';
function OurFeatures(props) {
    return (
        <div className='features'>
            <div className="features__container">
                <div className="features__heading">
                    <h2>Our <span className='features__cards--diffColor'>Feature</span></h2>
                    <p>This very extraordinary feature, can make learning activities more efficient</p>
                </div>
                <div className="features__cards">
                    <div className="feature1">
                        <div className="feature1__leftSec">
                            <AppleWindow />
                            <button>Present</button>
                            <button>Call</button>
                            <img src="images/userInterface1.png" alt="" />
                            <img src="images/userInterface2.png" alt="" />
                            <img src="images/userInterface3.png" alt="" />
                            <img src="images/userInterface4.png" alt="" />
                            <img src="images/userInterface5.png" alt="" />
                        </div>
                        <div className="feature1__rightSec">
                            <article>
                                <h3> A <span className='features__cards--diffColor'>user interface</span> designed for the classroom</h3>
                                <ul>
                                    <li>Teachers don't get lost in the grid view and have a dedicated Podium space.</li>
                                    <li>TA's and presenters can be moved to the front of the class.</li>
                                    <li>Teachers can easily see all students and class data at one time.</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                    <div className="feature2">
                        <div className="feature2__leftSec">
                            <article>
                                <h3><span className='features__cards--diffColor'>Tools</span> For Teachers And Learners</h3>
                                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                                    Teachers can handout assignments in real-time for students to complete and submit.</p>
                            </article>
                        </div>
                        <div className="feature2__rightSec">
                            <img src="images/lovely-teenage-girl.png" alt="" />
                        </div>
                    </div>
                    <div className="feature3">
                        <div className="feature3__leftSec">
                            <div className='feature3__leftSec__card'>
                                <h2>True or false? This play takes place in Italy</h2>
                                <img src="images/quiz.png" alt="" />
                            </div>
                        </div>
                        <div className="feature3__rightSec">
                            <article>
                                <h3>Assessments, <span className='features__cards--diffColor'>Quizzes</span>, Tests</h3>
                                <p>Easily launch live assignments, quizzes, and tests.
                                    Student results are automatically entered in the online gradebook.</p>
                            </article>
                        </div>
                    </div>
                    <div className="feature4">
                        <div className="feature4__leftSec">
                            <article>
                                <h3><span className='features__cards--diffColor'>Class Management</span> Tools for Educators</h3>
                                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
                            </article>
                        </div>
                        <div className="feature4__rightSec">
                            <div className="board">
                                <div className="blue"></div>
                                <div className="cyan"></div>
                                <div className="red"></div>
                                <div className="green"></div>
                                <img src="images/userInterface2.png" alt="" />
                                <img src="images/userInterface3.png" alt="" />
                                <img src="images/userInterface4.png" alt="" />
                                <img src="images/userInterface5.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="feature5">
                        <div className="feature5__leftSec">
                            <AppleWindow />
                            <img src="images/userInterface1.png" alt="" />
                            <img src="images/userInterface5.png" alt="" />
                            <button>End Discussion</button>
                        </div>
                        <div className="feature5__rightSec">
                            <article>
                                <h3>One-on-One <span className='features__cards--diffColor'>Discussions</span></h3>
                                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurFeatures;