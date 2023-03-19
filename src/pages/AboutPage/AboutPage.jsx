import React from 'react';
import "./AboutPage.css";
import NavbarPages from '../../components/NavbarPages/NavbarPages';
import Footer from '../../components/Footer/Footer';

const AboutPage = () => {
    return (
        <body>
            <div className='about-page'>
                <NavbarPages />
                <Footer />
                <div className='about-aulify'>

                </div>
            </div>
        </body>
    )
}

export default AboutPage;