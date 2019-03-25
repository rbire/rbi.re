import React from 'react'
import Slider from './slider'
import HeroSvg from './hero-img.svg'

const Hero = () => (
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
          <label>Advancing Blockchain in Real Estate </label>
          <h1>The Real Estate Blockchain Initiative</h1>
          <a class="btn-blue" href="#">
            Learn More
          </a>
        </div>
        <div class="col-12 col-md-7">
          <img src={HeroSvg} alt="" />
        </div>
        <Slider />
      </div>
    </div>
  </section>
)

export default Hero
