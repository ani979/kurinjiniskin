import React from 'react'
import '../Shopping/Item.css'

function Gift(props) {
if(!props.title) return(<div></div>);
    return (<div className="Collapsible Collapsible__contentInner"> 
                {/* <div className = "col-md-12"> */}
                <div className = "col-12">
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        {props.imagePath}
                    </div>
                    <div className = "col-md-6 col-sm-12 col-lg-6">
                        <div className = "col-12">
                            {props.title}
                            {props.name}
                        </div>
                        <div className = "col-12">
                            {props.desc}
                        </div>
                    </div>
                </div>    
                    
                {/* </div> */}
                {/* <div className = "col-md-12"> */}
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                        {props.consistsOf}
                    </div>
                    
                {/* </div> */}
                {/* <div className = "col-md-12"> */}
                    <div className = "col-md-12 col-sm-12 col-lg-12">
                     {props.price}
                    </div> 
                    
                    <div className = "col-md-12 col-sm-12 col-lg-12 ">
                     <p><b>Order here:</b> <a href = "/howtoorder" target="__blank" >Order</a></p>
                    </div> 
                {/* </div> */}
                <div className = "col-md-12">
                <hr></hr>
                </div>
            </div>)
}

export default Gift