import React, { PropTypes } from 'react'
import './aboutus.css'

function Card(props) {
    return (
        <div class="aboutus-card">
            <div>
                <div class="content">
                    <div>
                        <h2 class="title">{props.title}</h2>
                        <div class="excerpt"><p>{props.excerpt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card