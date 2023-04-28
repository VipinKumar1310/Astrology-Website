
import React, { useState } from 'react'
import './UserReview.css'
import userreviewbase from '../assets/userreviewbase.png'
import headerstar from '../assets/headerstar.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import user3 from '../assets/user3.png'
import user4 from '../assets/user4.png'
import user5 from '../assets/user5.png'
import user6 from '../assets/user6.png'
import user7 from '../assets/user7.png'
import ratings from '../assets/ratings.png'



const userDetails = [
  { name: "Sudhanshu Sharma",
    image: user1,
    review:"Curabitur tempor ac nisl eu porttitor. Pellentesque ut nisl et massa semper scelerisque.lacinia eu odio pharetra, molestie imperdiet nibh. Mauris id orci euismod, convallis justo vel, vestibulum est ",
  },
  {  name: "Jim Kwick",
    image: user2,
    review:"Donec nec ultrices ante. Morbi eleifend nec massa in venenatis. Nullam quis leo metus. Aliquam erat volutpat.lacinia eu odio pharetra, molestie imperdiet nibh. Mauris id orci euismod, convallis justo vel.",
  },
  {  
    name: "Mike Tyson",
    image: user3,
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum magna vel ex eleifend, nec tempor metus lacinia. Etiam dui libero, lacinia eu odio pharetra, molestie imperdiet nibh. Mauris. ",
  },
  {
    name: "Harsh Patel",
    image: user4,
    review:"Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with ",
  },
  {
    name: "Julie",
    image: user5,
    review:"Nulla placerat nunc dui, nec sodales odio pe llentesque et. Nunc eleifend sapien eget purus dignissim fringilla ac ac lorem. lacinia eu odio pharetra, molestie imperdiet nibh. Mauris id orci euismod.",
  },
  {
    name: "Maria",
    image: user6,
    review:"Aenean fringilla nibh lorem, ac iaculis sapien commodo mattis. Aenean eu lacus quis justo cursus volutpat. lacinia eu odio pharetra, molestie imperdiet nibh. Mauris id orci euismod, convallis justo vel.",
  },
  {
    name: "Katherine",
    image: user7,
    review:"Integer malesuada, erat a mollis tincidunt, odio ex efficitur augue, non fermentum turpis dolor vitae neque. lacinia eu odio pharetra, molestie imperdiet nibh. Mauris id orci euismod, convallis justo vel. ",
  },
]

const UserReview = () => {
  const [selectedUser, setSelectedUser] = useState(0)

  const handlePrev = () => {
    setSelectedUser(selectedUser === 0 ? userDetails.length - 1 : selectedUser - 1)
  }

  const handleNext = () => {
    setSelectedUser(selectedUser === userDetails.length - 1 ? 0 : selectedUser + 1)
  }

  return (
    <div className='review'>
    <div className='user-review'>
      
      <div className='user-review-header'>
        <img src={headerstar} />
        <h2>User Review</h2>
        <img src={headerstar} />
      </div>
     
        <div className='user-review-innerblock'>
          <div className='ratings-image'>
            <img src={ratings} />
          </div>
          <div className='user-review-data'>
            <div className='user-review-text'>{userDetails[selectedUser].review}</div>
            <div className='user-review-details'>
              <img src={userDetails[selectedUser].image} />
              <h3>{userDetails[selectedUser].name}</h3>
            </div>
            <div className='user-review-navigation'>
          <button className='prev-button' onClick={handlePrev}><i class="arrow left"></i></button>
          <button className='next-button' onClick={handleNext}><i class="arrow right"></i></button>
        </div>
          </div>
        </div>
  
      <div className='user-review-background'>
          <div className='user-review-background-base'></div>
        </div>
        
    </div>
    <div className='user-review-base'>
    <img src={userreviewbase} />
  </div>
  </div>
  )
}

export default UserReview