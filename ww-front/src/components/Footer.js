import React from 'react';
import '../App.css';
import './Footer.css';


function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-words">
            <h3 className="newsletter">
                JOIN OUR NEWSLETTER
            </h3>
            <p className="caption">
                Subscribe to get exclusive offers and updates every week
            </p>
        </div>
        <form className="footer-subscription" action='/post' method='POST'>
            <input type="email" placeholder='Enter your email' className="email-input" name='email' />
            <input type='submit' className="subscribe-btn" value='SUBSCRIBE' />
        </form>
        <div className="footer-logos">
            <a href='https://www.facebook.com' target="_blank">
            <img src="/images/image-13.png" alt="" className="logo" />
            </a>
            <a href='https://www.instagram.com' target="_blank">
            <img src="/images/image-14.png" alt="" className="logo" />
            </a>
            <a href='https://www.twitter.com' target="_blank">
            <img src="/images/image-15.png" alt="" className="logo" />
            </a>
        </div>
        <div className="footer-legal">
            <p className="terms">Terms of Use</p>
            <p className="privacy">Privacy Policy</p>
        </div>
        <div className="copyright">
            <p>©2022 Workout Warriors</p>
        </div>
    </div>
  )
}

export default Footer