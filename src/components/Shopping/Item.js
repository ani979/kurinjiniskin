import React from 'react'
import './Item.css'

function Item(props) {
if(!props.title) return(<div></div>);
    return (<div> 
                <div className = "col-md-12">
                    <div className = "col-md-3 col-sm-12 col-lg-3">
                        {props.imagePath}
                    </div>
                    <div className = "col-md-3 col-sm-12 col-lg-3">
                        {props.title}
                        {props.type}
                    </div>
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        {props.desc}
                        {props.goodFor}
                    </div>
                </div>
                <div className = "col-md-12">
                    <div className = "col-md-2 col-sm-12 col-lg-2">
                        {props.quantity}
                    </div>
                    <div className = "col-md-4 col-sm-12 col-lg-4">
                        {props.flavours}
                    </div>
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        {props.ingredients}
                    </div>
                </div>
                <div className = "col-md-12">
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                     {props.price}
                    </div> 
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                    {props.howtouse}
                    </div>
                </div>
                <div className = "col-md-12">
                <hr></hr>
                </div>
            </div>)
}

export default Item