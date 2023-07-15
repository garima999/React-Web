import React from 'react';
import Common from './Common';
const img1="https://icon-library.com/images/office-icon-png/office-icon-png-10.jpg";

const About = () => {
    return (
        
           <>
           <Common
            name='Welcome  to about page ' 
           imgsrc={img1} 
           visit="/contact"
            btname="contact now"/>
        </>
    )
}

export default About;