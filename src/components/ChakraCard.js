import React from 'react'
import './ChakraCard.css'

const ChakraCard = ({image, data, logo}) => {
  return (
    <div className='chakra-card'>
        <div className='chakra-card-image'>
            <img src={image} />
            <div className='chakra-card-image-logo'>
                <img src={logo}/>
            </div>
        </div>
        <div className='chakra-card-data'>{data}</div>
    </div>
  )
}

export default ChakraCard