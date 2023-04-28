import React from 'react'
import testimonialchakra from '../assets/testimonialchakra.png'
import headerstar from '../assets/headerstar.png'
import offerbanner from '../assets/offerbanner.png'
import './Testimonial.css'
import testimonial1 from '../assets/testimonial1.png'
import testimonial2 from '../assets/testimonial2.png'
import testimonial3 from '../assets/testimonial3.png'
import testimonial4 from '../assets/testimonial4.png'
import testimonial5 from '../assets/testimonial5.png'
// import astrolger1 from '../assets/astrolger1.png'
import { useState } from 'react'
import Slider from 'react-slick'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5];

const Testimonial = () => {

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  return (
    <div className='testimonial'>
      <div className='testimonial-heading'>
         <img className='testimonial-chakra' src={testimonialchakra}/>
         <div className='testimonial-header'>
            <img src={headerstar}/>
            <h2>User Testimonial</h2>
            <img src={headerstar}/>
         </div>
      </div>

      <div className='testimonial-carousel'></div>
      <div className='testimonial-carousel-container'>
       <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
      </div>

      <div className='offers'>
        <img src={offerbanner} alt='offer-banner' />
     
      </div>
    </div>
  )
}

export default Testimonial