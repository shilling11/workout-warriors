import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


function Navbar (){
    return(
        <>
        <nav className="navbar">
                <Link to='/' className='navbar-logo'>
                    <img src='/images/logo.png' alt='' />
                </Link>
                <div className="navbar-container">
            <ul className="navbar-items">
                <li className="navbar-item">
                    <Link to='/products' className='navbar-link'>
                        PRODUCTS
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/about' className='navbar-link'>
                        ABOUT
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/blogs' className='navbar-link'>
                        BLOGS
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to='/contact' className='contact-btn'>
                        CONTACT
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;