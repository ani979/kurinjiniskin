import React from 'react'

import Collapsible from 'react-collapsible';
import '../Shopping/Shop.css'
import allquestions from './AllQuestions'
import './FAQ.css'

function FAQ() {

    var allQandA = [];
    allquestions.map((one)=> {
        return allQandA.push(<Collapsible className = "collapsible-header" trigger={one.header}>
        <p className = "answer-style"> {one.content}</p></Collapsible>)
    })
    return  (<div>

                <div className = "col-md-12">
                <h2 className="center shopping-header" > Some questions you may have been thinking of: </h2>
                {allQandA}
                </div>
            </div>)
}

export default FAQ