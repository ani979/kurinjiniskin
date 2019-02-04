import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from 'react-slick'

import productsData from './ProductSlickCons';
import EachProduct from './EachProduct'





function ProductSlick() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        cssEase:"appear",
        arrows:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
      const productSliderData = productsData.map(product => <EachProduct name = {product.name} key={product.name} desc = {product.desc} imagePath = {product.classname}/>);
      return (
        <div className = "add-pad-1 bg-kurinjini-flower">
          <Slider {...settings}>
          {productSliderData}
          </Slider>
        </div>    
      )    
}




export default ProductSlick;