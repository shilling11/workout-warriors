import React, { useEffect } from 'react';
import '../App.css';
import './Intro.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Intro() {
    useEffect(() => {
        Aos.init({});
    }, []);
  return (
    <div className="intro-container">
        <div className="img-container" id='image-1' data-aos='fade-up' data-aos-duration='500'>
            <img src="images/image-1.png" alt="" className="intro-image" />
            <p className="img-text">oost performance with our award-winning products</p>
        </div>
        <div className="img-container" id='image-2' data-aos='fade-up' data-aos-duration='1000'>
            <img src="images/image-3.png" alt="" className="intro-image" />
            <p className="img-text">Become a better you, physically and mentally</p>
        </div>
        <div className="img-container" id='image-3' data-aos='fade-up' data-aos-duration='1500'>
            <img src="images/image-2.png" alt="" className="intro-image" />
            <p className="img-text">Gain insight into optimal training with our research-led blogs</p>
        </div>
    </div>
  )
}

export default Intro
