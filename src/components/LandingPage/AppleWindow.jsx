import React from 'react';
import './appleWindow.css'

function AppleWindow(props) {
    return (
        <div>

            <div className="appleInner">
                <div className='redBall'></div>
                <div className='yellowBall'></div>
                <div className='greenBall'></div>
            </div>
            <div className='appleOuter'>
            </div>
        </div>
    );
}

export default AppleWindow;