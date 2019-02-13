import React from 'react'
import './Item.css'

function Item(props) {
if(!props.title) return(<div></div>);
    return (<div> 
                {/* <div className = "col-md-12"> */}
                <div className = "col-12">
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        {props.imagePath}
                    </div>
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        <div className = "col-12">
                            {props.title}
                            {props.type}
                        </div>
                        <div className = "col-12">
                            {props.desc}
                            {props.goodFor}
                        </div>
                        
                    </div>
                </div>    
                    
                {/* </div> */}
                {/* <div className = "col-md-12"> */}
                <div className = "col-md-12 col-sm-12 col-lg-12">
                        {props.video}
                </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                        {props.quantity}
                    </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                        {props.flavours}
                    </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                        {props.ingredients}
                    </div>
                {/* </div> */}
                {/* <div className = "col-md-12"> */}
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                     {props.price}
                    </div> 
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                    {props.howtouse}
                    </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                    {props.precaution}
                    </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                    {props.deliveryTimeline}
                    </div>
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                     <p><b>Order here:</b> <a href = "/howtoorder" target="__blank" >Order</a></p>
                    </div> 
                {/* </div> */}
                <div className = "col-md-12">
                <hr></hr>
                </div>
            </div>)
}

export default Item