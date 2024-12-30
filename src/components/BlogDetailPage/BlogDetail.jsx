import React from 'react';
import Header from '../MainHeader/Header';
import Footer from '../MainFooter/Footer';
import styles from './blogDetail.module.css'
import RelatedBlog from '../RelatedBlogPage/RelatedBlog';
function BlogDetail(props) {
    return (
        <div className={styles.blogDetail}>
            <Header/>
            <div className={styles.blogDetail__mainImage}>
                <img src="images/teacher.png" alt="" />
            </div>
            <div className={styles.blogDetail__lowerSec}>
            <h2>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
            <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    TOTC is a platform </p>
            <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <RelatedBlog />
            <Footer />
        </div>
    );
}

export default BlogDetail;