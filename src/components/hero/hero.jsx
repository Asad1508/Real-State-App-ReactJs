import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import './hero.css'
const Hero = () => {
  return (
    <>
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className='orange-circle'/>
            <h1>Discover <br />most suitable <br />property</h1>
          </div>
          <div className="flexColStart hero-des">
            <span className='textsec'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, earum!</span>
            <span className='textsec'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, earum!</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className='button'>Search</button>
          </div>
          <div className="flexCenter stats">
             <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
                </span>
                <span>Premium products</span>
             </div>
             <div className="flexColStart stat">
              <span>
                <CountUp start={1100} end={2300} duration={4} />
                <span>+</span>
                </span>
                <span>Happy customers</span>
             </div>
             <div className="flexColStart stat">
              <span>
                <CountUp end={450} />
                <span>+</span>
                </span>
                <span>award wining</span>
             </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Hero