import React from 'react';
import styles from './about1.module.css'

function About1(props) {
    return (
        <div>
            <div className={`${styles.container} ${styles.aboutSec}`}>
                <div className={styles.aboutSec__heading}>
                    <h2>Our Success</h2>
                    <p>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.</p>
                </div>
                <div className={styles.about__cards}>
                    <div>
                        <h3>15K+</h3>
                        <p>Students</p>
                    </div>
                    <div>
                        <h3>75%</h3>
                        <p>Total success</p>
                    </div>
                    <div>
                        <h3>35</h3>
                        <p>main questions</p>
                    </div>
                    <div>
                        <h3>26</h3>
                        <p>Chief experts</p>
                    </div>
                    <div>
                        <h3>16</h3>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About1;