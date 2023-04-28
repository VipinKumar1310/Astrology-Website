import React from 'react'
import './Main.css'
import mainbackground from '../assets/mainbackground.png'
import gurujilogo from '../assets/gurujilogo.png'
import userlogin from '../assets/userlogin.png'
import privateconfidential from '../assets/privateconfidential.png'
import refund from '../assets/refund.png'
import verified from '../assets/verified.png'
import securepayment from '../assets/securepayment.png'

const Main = () => {
    return (
        <div className="main">
         <img className='main-image' src={mainbackground} />
         <div className="nav">
           <div className="nav-logo"><img src={gurujilogo}/></div>
            <div className="nav-component">
            <a >Home</a>
            <a>Call with Astrologer</a>
            <a>Live(Coming Soon)</a>    
          </div>
          <div className="nav-user">
              <img src={userlogin}/>
            </div>
         </div>
         <div className="main-content">
           <div className="main-content-heading">
            <h1>"Astrology for Clarity"</h1>
            <p>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Therophy</p>
           </div>
           <button>Consult Now</button>
         </div>
         <div className="main-footer">
          <div>
            <img src={refund}/>
            <h3>100% Refund if Unsatisfied</h3>
          </div>
          <div>
          <img src={privateconfidential}/>
          <h3>Private & Confidential</h3>
          </div>
          <div>
          <img src={verified}/>
          <h3>Verified Astrologer</h3>
          </div>
          <div>
          <img src={securepayment}/>
          <h3>Secure Payment</h3>
          </div>
         </div>
        </div>
      );
    
}

export default Main