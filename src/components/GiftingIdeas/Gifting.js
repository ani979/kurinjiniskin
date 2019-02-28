import React from 'react'
import '../Shopping/Shop.css'
import allItems from './AllGifts'
import Gift from './Gift'

function Gifting() {
    return (
        <div>
           
        
            <div className = "col-md-12">
                <h2 className="center shopping-header" > Make someone feel special  </h2>
                {allItems.map((eachItem) => <Gift title={eachItem.title} imagePath={eachItem.imagePath} desc={eachItem.desc} name={eachItem.name} consistsOf={eachItem.consistsOf} price={eachItem.price}></Gift>)}
            </div>
        </div>         
    )
}

export default Gifting