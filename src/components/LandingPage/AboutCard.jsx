import React from 'react';
import './aboutCard.css'


function AboutCard(props) {
    return (
        <div className='aboutCard'>
            <div className="iconCard" style={{ backgroundColor: props.backColor }}>
            <props.icon className='aboutCard__icon'  />
            </div>
            <h3 className='aboutCard__heading'>{props.heading}</h3>
            <p className='aboutCard__para'>{props.paragraph}</p>
        </div>
    );
}

export default AboutCard;