import React from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/img/Main/Image1.jpg'
import image2 from '../../assets/img/Main/Image2.jpg'
import image3 from '../../assets/img/Main/Image3.jpg'
import image4 from '../../assets/img/Main/Image4.jpg'
import image5 from '../../assets/img/Main/Image5.jpg'
import './Main-Carousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MainCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1700,
        autoplaySpeed: 4000,
        arrows:true,
        className: 'slides'
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img className = "sliderImg" src = {image4}/>
            </div>
            <div>
              <img className = "sliderImg" src = {image1}/>
            </div>
            <div>
              <img className = "sliderImg" src = {image3}/>
            </div>
            <div>
              <img className = "sliderImg" src = {image5}/>
            </div>
            
            
          </Slider>
        </div>
      );

}

export default MainCarousel