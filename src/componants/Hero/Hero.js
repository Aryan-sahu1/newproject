import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <>
      <div className='hero container'>
        <div className="hero-text">
          <h1>We Ensure better Education for a better World </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sequi dicta modi recusandae voluptatibus dignissimos cum quisquam. Perferendis quaerat possimus ducimus temporibus neque corporis voluptatum error voluptatem doloribus, quos voluptas.</p>
          <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      </div>
    </>
  )
}

export default Hero
