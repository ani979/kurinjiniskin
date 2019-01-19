import React from 'react'
import './WhyKurinjini.css'
import oils from  '../../../assets/img/Oils.jpg'

function WhyKurinjini() {
    return <div className = "center add-pad-3 bg-beige-20 header">
            <span className = "mainheader"> Why Kurinjini</span>
            <p style={{textAlign:"center"}}>Kurinjini skin care is built on the idea of 
            providing naturally made skin care products to everyone including kids and elders. 
            With consistent experimentation and continuous improvements our products are both affordable on skin and also purse. 
            </p>
            <img src = {oils} className="oil-image"/>
           </div>

}

export default WhyKurinjini