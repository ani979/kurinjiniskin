import React from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/img/image1.jpg'
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function MainCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows:true
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <img className = "sliderImg" src = {image1}/>
            </div>
            <div>
              <img className = "sliderImg" src = {image2}/>
            </div>
            <div>
              <img className = "sliderImg" src = {image3}/>
            </div>
            
            
          </Slider>
        </div>
      );

}

export default MainCarousel