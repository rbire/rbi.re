import React from 'react'
import Slider from 'react-slick'

import ImageOne from './images/c1.png'
import ImageTwo from './images/c2.png'
import ImageThree from './images/c3.png'
import ImageFour from './images/c4.png'

const ClientsSlider = () => {
  const settings = {
    className: 'clients-slider',
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    draggable: true,
    focusOnSelect: false,
    speed: 700,
    autoplaySpeed: 4000,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 2,
    fade: false,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '0',
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      <div className="item">
        <div>
          <img src={ImageOne} alt="" />
        </div>
      </div>
      <div className="item">
        <div>
          <img src={ImageTwo} alt="" />
        </div>
      </div>
      <div className="item">
        <div>
          <img src={ImageThree} alt="" />
        </div>
      </div>
      <div className="item">
        <div>
          <img src={ImageFour} alt="" />
        </div>
      </div>
    </Slider>
  )
}

export default ClientsSlider
