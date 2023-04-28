import React from 'react'
import './Chakra.css'
import headerstar from '../assets/headerstar.png'
import chakraimage from '../assets/chakra.png'
import sunchakra from '../assets/sunchakra.png'
import ChakraCard from './ChakraCard'
import loverelatedproblem from '../assets/loverelatedproblem.png'
import marriageproblem from '../assets/marriageproblem.png'
import jobproblem from '../assets/jobproblem.png'
import educationproblem from '../assets/educationproblem.png'
import luckynumber from '../assets/luckynumber.png'
import rightimage from '../assets/rightimage.png'
import healthcare from '../assets/healthcare.png'
import grahshanti from '../assets/grahshanti.png'
import childbirth from '../assets/childbirth.png'
import husbandwife from '../assets/husbandwife.png'
import moneyproblem from '../assets/moneyproblem.png'
const chakraListLeft= [
    {
      image: loverelatedproblem,
      data: "Love Related Problem"
    },
    {
        image:marriageproblem,
        data: "Marriage Problem"
      },
      {
        image: jobproblem,
        data: "Job/Business Problems"
      },
      {
        image: educationproblem,
        data: "Money Problem"
      },
      {
        image:luckynumber ,
        data: "Lucky Number/ Color"
      },
]
const chakraListRight= [
    {
      image:rightimage,
      data: "Love Related Problem",
      logo:healthcare,
    },
    {
        image:rightimage,
        data: "Marriage Problem",
        logo:grahshanti,
      },
      {
        image:rightimage,
        data: "Job/Business Problems",
        logo:childbirth,
      },
      {
        image:rightimage,
        data: "Money Problem",
        logo:husbandwife,
      },
      {
        image:rightimage,
        data: "Education Problems",
        logo:moneyproblem,
      },
]

const chakra = () => {
  return (
    <div className='chakra-main'>
        <div className='chakra-header'>
        <img src={headerstar}/>
            <h2>Many Problem One Solution</h2>
            <img src={headerstar}/>
        </div>
        <div className='chakra-main-content'>
        <div className='chakra-leftside-data'>
            {
                chakraListLeft.map(card => {
                    return <ChakraCard {...card}/>
                })
            }
        </div>
        <div className='chakra'>
        <img className='chakra-image' src={chakraimage} />
        <img className='sunimage' src={sunchakra} />
        </div>
        <div className='chakra-rightside-data'>
        {
                chakraListRight.map(card => {
                    return <ChakraCard {...card}/>
                })
            }
        </div>
        </div>
        </div>
  )
}

export default chakra