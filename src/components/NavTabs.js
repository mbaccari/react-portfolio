import React from 'react';

import resume from '../assets/resume.PDF'

function NavTabs({ currentPage, handlePageChange }) {
    return (

        <header className=" container navbar navbar-dark bg-dark d-flex align-items-center justify-content-center text-center min-vw-100 text-light">

            <a className=" navbar-brand display-4 text-secondary" id="name" href="">
                Marshall Baccari
            </a>

            <ul className="navbar-nav list-group-horizontal col" style={{justifyContent: "space-around"}}>

                {/* About me */}
                <li className="nav-item col-md-3 col-xs-3">
                    <a
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>

                {/* Portfolio */}
                <li className="nav-item col-md-3 col-xs-3">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>

                {/* Resume */}
                <li className="nav-item col-md-3 col-xs-3">
                    <a className='nav-link' key={ "resume" } href={ resume } target='_blank'>
                        Resume
                    </a>
                </li>

                {/* Contact */}
                <li className="nav-item col-md-3 col-xs-3">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>

        </header>
    );
}

export default NavTabs;
