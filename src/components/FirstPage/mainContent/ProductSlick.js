import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from 'react-slick'
import './productSlider.css'
import product1 from '../../../assets/img/FootScrubber.jpg'
import product2 from '../../../assets/img/Cream_1.jpg'
import product3 from '../../../assets/img/Cream_2.jpg'
import product4 from '../../../assets/img/lipbalm.jpg'

function ProductSlick() {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2000,
        cssEase: "linear",
        arrows:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div>
          <Slider {...settings}>
          <div>
              <img className = "sliderProduct" src = {product1}/>
          </div>
          <div>
              <img className = "sliderProduct" src = {product2}/>
          </div>
          <div>
              <img className = "sliderProduct" src = {product3}/>
          </div>
          <div>
              <img className = "sliderProduct" src = {product4}/>
          </div>
            
            
          </Slider>
        </div>
      );
}


export default ProductSlick;