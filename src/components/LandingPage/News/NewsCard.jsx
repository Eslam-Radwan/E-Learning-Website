import React from 'react';
import './newsCard.css'

function NewsCard(props) {
    return (
        <div className={`newsCard ${props.className}`}>
            <div className='newsCard__container'>
                <div className="newsCard__container__leftSec">
                <img src={props.img} alt="" />
                <p>{props.category}</p>
                </div>
                <div className="newsCard__container__rightSec">
                <h3>{props.title}</h3>
                <p>{props.para}</p>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;