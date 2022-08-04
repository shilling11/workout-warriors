import React from 'react';
import './Header.css';
import '../App.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <>
    <div className="header-container">
        <Navbar/>
        <div className="header-words">
        <h1 className="header-workout">
            WORKOUT
        </h1>
        <h1 className="header-warriors">
            WARRIORS
        </h1>
        <p className="header-subtitle">
            THE HOME OF GAINS.
        </p>
        <Link to='/products' className="call-to-action">
            SHOP NOW
        </Link>
        </div>
    </div>
    </>
  )
}

export default Header