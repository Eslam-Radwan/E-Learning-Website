import React from 'react';
import './whatCard.css'

function WhatCard(props) {
    return (
        <div className={`${props.class} whatCard`}>
            <div className='blackCover'>
                <h3>{props.heading}</h3>
                <button>{props.buttonName}</button>
            </div>
        </div>
    );
}

export default WhatCard;