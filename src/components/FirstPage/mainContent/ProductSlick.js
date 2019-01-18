import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from 'react-slick'
import './productSlider.css'
import cream from '../../../assets/img/FaceCare/faceCare.jpg'
import footscrubber from '../../../assets/img/FootCare/footcare.jpg'
import bodycare from '../../../assets/img/BodyCare/bodyCare.jpg'
import soaps from '../../../assets/img/Soaps/soaps.jpg'
import lipbalm from '../../../assets/img/LipCare/lipbalm.jpg'
import oils from '../../../assets/img/Oils/oils.jpg'




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
                  <div className="overlay bg-image-body bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Body Care</h2>
          
                <div className="excerpt">
                  <p><span>Our body care products include products like Fluffy etc.</span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      
            
                            
          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image-face bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Face care</h2>
          
                <div className="excerpt">
                  <p><span>Our facial creams include anti-ageing, anti-ace, anti-pigmentation. Goes under brand names Immortal, Pacific</span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      
          
          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image-lip bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Lip Care</h2>
          
                <div className="excerpt">
                  <p><span>Cocoa butter based lip blams that lasts long </span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      
          
          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image-foot bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Foot Care</h2>
          
                <div className="excerpt">
                  <p><span>Foot scrubs </span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      

          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image-soaps bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Handcrafted soaps</h2>
          
                <div className="excerpt">
                  <p><span>Handcrafted soaps </span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>

          <div>
            <div className="card card--image card--link">

              {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}
    
                <div className="image">
                  <div className="overlay bg-image-oils bg-image" ></div>
                </div>
    
              {/* </a> */}
            </div>  
            <div className="content">

              <div>

                <h2 className="title red">Oils</h2>
          
                <div className="excerpt">
                  <p><span>Hair and face oil </span></p>
                </div>  
              </div>
            </div>
            <span href="https://store.nutiva.com/collections/body-care" className="cta cta--line">Shop Now</span>
          </div>      
            
            
          </Slider>
        </div>
      );
}




export default ProductSlick;