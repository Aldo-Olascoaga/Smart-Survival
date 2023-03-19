import React from 'react';
import NavbarPages from '../../components/NavbarPages/NavbarPages';
import Footer from '../../components/Footer/Footer';
import './HelpPage.css';


const HelpPage = () => {
    return (
        <body >
            <div className='help-page'>
                <NavbarPages />
                <Footer />
            </div>
        </body>
    )
}

export default HelpPage;