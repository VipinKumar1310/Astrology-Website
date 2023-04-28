import React from 'react'
import './Astrologers.css'
import astrologersbase from '../assets/astrologersbase.png'
import headerstar from '../assets/headerstar.png'
import AstrologerCard from './AstrologerCard'
import astrologer1 from '../assets/astrologer1.png'
import astrologer2 from '../assets/astrologer2.png'
import astrologer3 from '../assets/astrologer3.png'
import astrologer4 from '../assets/astrologer4.png'
import astrologer5 from '../assets/astrologer5.png'
import astrologer6 from '../assets/astrologer6.png'
import astrologer7 from '../assets/astrologer7.png'
import astrologer8 from '../assets/astrologer8.png'
import astrologer9 from '../assets/astrologer9.png'

const astrologerList = [
  {
    image: astrologer1,
  },
  {
    image:astrologer2,
  },
  {
    image:astrologer3,
  },
  {
    image:astrologer4,
  },
  {
    image:astrologer5,
  },
  {
    image:astrologer6,
  },
  {
    image:astrologer7,
  },
  {
    image:astrologer8,
  },
  {
    image:astrologer9,
  },
]

const Astrologers = () => {
  return (
    <div className='astrologers'>
      <div className='astrologers-column'>
        <div className='astrologers-column-header'>
          <img src={headerstar} />
          <h2>Premium Astrologers</h2>
          <img src={headerstar} />
        </div>

        <div className='astrologers-grid'>
          {astrologerList.map((astrologer) => (
            <div key={astrologer.image} className='astrologer-cell'>
              <AstrologerCard {...astrologer} />
            </div>
          ))}
        </div>
        <div className='astrologers-background'></div>
      </div>
      <div className='astrologers-base'>
        <img src={astrologersbase} />
      </div>
    </div>
  )
}


export default Astrologers