import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from 'react-slick'
import './productSlider.css'
import bgImage from '../../../assets/img/Oils.jpg'



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
        <div className = "add-pad-1 bg-kurinjini-flower">
          <Slider {...settings}>
          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Body Care</h2>
          
                <div className="excerpt">
                  <p><span>Our organic body care products aid in skin hydration and vibrancy for a natural, clean glow. </span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      
            
                            
          <div>
              <img className = "sliderProduct" src = "./assets/img/Cream_1.jpg"/>
          </div>
          <div>
              <img className = "sliderProduct" src = "./assets/img/Cream_1.jpg"/>
          </div>
          <div>
              <img className = "sliderProduct" src = "./assets/img/Cream_1.jpg"/>
          </div>
          <div>
              <img className = "sliderProduct" src = "./assets/img/Cream_1.jpg"/>
          </div>
            
            
          </Slider>
        </div>
      );
}

function lContentStyle(){
  return {backgroundImage: `url(${bgImage})`}
}


export default ProductSlick;