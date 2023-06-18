
import chair from '../../../assets/images/doc.jpg';
import care1 from '../../../assets/images/care1.jpg';
import care6 from '../../../assets/images/care6.jpg';
import care4 from '../../../assets/images/care4.jpg';
import care5 from '../../../assets/images/care5.jpg';

import banner from '../../../assets/images/bg.png';
// import React, { useState, useEffect } from 'react';
import './banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
//    const [theme, setTheme] = useState (localStorage.getItem('theme') || 'light'
//     );;
  
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };
//  useEffect(() => {
//    localStorage.setItem('theme', theme);
//       document.body.className = theme;
//     }, [theme]);
    return (
      <section  style={ { background : `url( ${banner})`}}>
<div>
<div className="hero mt-32">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <img src={chair} className="w-1/2 rounded-lg shadow-2xl" /> */}
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img style={{
      height:300
    }} src={care4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  style={{
      height:300
    }} src={care1} className='w-full' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    < img  style={{
      height:300
    }} src={care5} className='w-full' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img  style={{
      height:300
    }} src={care6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    <div>
      <h1 className="text-5xl font-bold">YOUR NEW SMILE STARTED <br />HERE</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <Link to='/appointment'>
     <button style={{border:0}} className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
     </Link>
    {/* <div  className={`App ${theme}`}>
    <button onClick={toggleTheme} className="btn btn-primary bg-gradient-to-r from-success to-accent">mode</button>
    </div> */}
    </div>
  </div>
</div>
</div>
</section>
    )
}
export default  Banner;
