import React from 'react'
import './AstrologerCard.css'
import livebutton from '../assets/livebutton.png'
import livebottom from '../assets/livebottom.png'
import callicon from '../assets/callicon.png'
import chaticon from '../assets/chaticon.png'
import yellowstar from '../assets/yellowstar.png'

const AstrologerCard = ({image}) => {
  return (
    <div className='astrologer-card'>
      <img className='astrologer-image' src={image}/>
      <div className='card-header'>
          <div className='experience'>10+ Years</div>
        <div className='online-status'>
          <div className='online-status-dot'></div>
          <div className='online-status-text'>Online</div>
      </div>
      </div>
      <div className='card-content'>
        <div className='card-content-left'>
          <div className='card-content-left-rating'><img src={yellowstar}/>
        <h4>4.5</h4></div>
        <h3>Astrologer Ramraj</h3>
        <p>Specialties</p>
        <h4>Love, Business, Life</h4>
        <p>Skills</p>
        <h4>Vedic Astrology, Kundali</h4>
        </div>
        <div className='card-content-right'>
           <div><p>Price</p></div>
          <div className='card-content-right-rate'><h1>₹10</h1><h3>/min</h3></div>
        </div>
      </div>
      <div className='card-base'>
      <div className='live-button'>
        <img src={livebutton}/>
      </div>
      <div className='live-bottom'>
        <div className='live-bottom-image'><img  src={livebottom}/></div>
        <div className='live-contact'>
        <div className='live-call-icon'>
          <img src={chaticon}/>
          <h3>Chat</h3>
          </div>
          <div className='live-call-icon'>
          <img src={callicon}/>
          <h3>Call</h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AstrologerCard