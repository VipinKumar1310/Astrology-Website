import './App.css';
import Astrologers from './components/Astrologers';
import Main from './components/Main.js';
import Testimonial from './components/Testimonial';
import Chakra from './components/Chakra'
import UserReview from './components/UserReview';
import Footer from './Footer';
import React, { Component }  from 'react';

function App() {
  return (
    <>
    <Main/>
    <Testimonial/>
    <Astrologers/>
    <Chakra/>
    <UserReview/>
    <Footer/>
    </>
  )
}

export default App;
