import React from 'react'
import TopBar from '../FirstPage/TopBar'
import Header from '../FirstPage/Header'
import Collapsible from 'react-collapsible';
import '../Shopping/Shop.css'
import allquestions from './AllQuestions'

function FAQ() {

    var allQandA = [];
    allquestions.map((one)=> {
        return allQandA.push(<Collapsible trigger={one.header}>
        <p className = "inside-para"> {one.content}</p></Collapsible>)
    })
    return  (<div>
                <TopBar></TopBar>
                <Header></Header>
                <div className = "col-md-12">
                <h1 className="center" > Some questions you may have been thinking of: </h1>
                {allQandA}
                </div>
            </div>)
}

export default FAQ