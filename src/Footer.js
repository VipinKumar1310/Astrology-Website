import React from 'react'
import './Footer.css'
import gurujilogo from './assets/gurujilogo.png'
import facebook from './assets/facebook.png'
import twitter from './assets/twitter.png'
import youtube from './assets/youtube.png'
import razorpay from './assets/razorpay.png'
import paytm from './assets/paytm.png'
import stripe from './assets/stripe.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={gurujilogo}/>
            <p>About Guruji s2 to 3 lines what guruji do and how 
            it works About Guruji s2 to 3 lines what 
            guruji do and how it works</p>
            <div className='footer-social-icons'>
                <div className='footer-social-icons-facebook'><img src={facebook}/></div>
                <div className='footer-social-icons-facebook'><img src={twitter}/></div>
                <div className='footer-social-icons-facebook'><img src={youtube}/></div>
            </div>
            <div className='footer-brands'>
             <h2>Trusted & Seals</h2>
            <div className='footer-brands-icon'>
              <div className='footer-brands-logo'><img src={razorpay}/></div>
                <div className='footer-brands-logo'><img src={paytm}/></div>
                <div className='footer-brands-logo'><img src={stripe}/></div>
                </div>
                </div>
        </div>
        <div className='footer-about'>
          <div className='footer-about-details'>
            <h2>Company</h2>
            <p>Home</p>
            <p>Privacy Policy</p>
            <p>T & C</p>
            <p>Varied Payment</p>
          </div>
          <div className='footer-about-details'>
          <h2>Support</h2>
            <p>Home</p>
            <p>Privacy Policy</p>
            <p>T & C</p>
            <p>Varied Payment</p>
          </div>
          <div className='footer-about-details'>
          <h2>Collaborate</h2>
            <p>Clever Tap</p>
            <p>Exotel</p>
            <p>Facebook</p>
            {/* <p>Quora</p> */}
            <p>Google</p>
            <p>Youtube</p>
          </div>
          <div className='footer-about-details'>
          <h2>Important Link</h2>
            <p>Tarot Reader</p>
            <p>Palmistry</p>
            <p>Geomology</p>
            <p>Vastu</p>
            <p>Numerology</p>
          </div>
        </div>
        <div className='footer-form'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Mail ID'/>
          <input type='text' placeholder='Write Query'/>
          <button>SUBMIT</button>
        </div>
    </div>
  )
}

export default Footer