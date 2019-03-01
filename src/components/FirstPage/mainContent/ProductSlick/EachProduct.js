import React from 'react'
import './productSlider.css'

function EachProduct(props) {
    return (
    <div>
      <div className="card card--image card--link">

        {/* <a href="https://store.nutiva.com/collections/body-care" target="" tabindex="0"> */}

          <div className="image">
            <div className={`overlay bg-image ${props.imagePath}`} ></div>
          </div>

        {/* </a> */}
      </div>  
      <div className="content">

        <div>

          <h2 className="titl">{props.name}</h2>
    
          <div className="excerpt">
            <span>{props.desc}</span>
          </div>  
        </div>
      </div>
      <a href="/shop" className="cta cta--line">Shop Now</a>
    </div>   )   
}


export default EachProduct