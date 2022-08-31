import React, { useEffect } from 'react'
import './AboutPage.css'
import '../App.css'
import Navbar from './Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutPage() {
    useEffect(() => {
        Aos.init({})
    }, []);

  return (
    <>
    <Navbar/>
    <div className="about-container">
        <div className="about-header">
            <h2 className="about-title" style={{color: '#e0e0e0'}}>ABOUT</h2>
        </div>
        <div className="about-intro">
        <img src="images/determined.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
    </>
  )
}

export default AboutPage