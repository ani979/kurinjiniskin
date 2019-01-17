import React from 'react'
import './WhyKurinjini.css'
import oils from  '../../../assets/img/Oils.jpg'

function WhyKurinjini() {
    return <div className = "center add-pad-3 bg-beige-20 header">
            <span className = "mainheader"> Why Kurinjini</span>
            <p style={{textAlign:"center"}}>Kurinjini skin care is built on the idea of 
            preparing skin products at home without adding outside chemicals. 
            Our products are made up of essential oils that are extracted from nature. 
            </p>
            <img src = {oils} className="oil-image"/>
           </div>

}

export default WhyKurinjini