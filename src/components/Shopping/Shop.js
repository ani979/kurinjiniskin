import React from 'react'
import Collapsible from 'react-collapsible';
import './Shop.css'
import Item from './Item'
import TopBar from '../FirstPage/TopBar';
import Header from '../FirstPage/Header'

import allItems from './AllItems'

function Shop() {
    //const itemMainCategories = allItems.keys();
    var arrayOfitems = getNestedChildren(allItems, "parent");
    //console.log("array of items ", arrayOfitems)
    const allItemsData = parseItems(arrayOfitems)
    
    return (
    <div>
        <TopBar></TopBar>
        <Header></Header>
        <h2 className="center shopping-header" > Our Products </h2>
        <p className="inside-para"> Click to collapse and view the products</p>
        {allItemsData}
    </div>);
}
function parseItems(arrayOfitems) {
    var collapsibleArray = [];
    arrayOfitems.forEach(function(eachItem) {
        //console.log("here");
        if(eachItem.children) {
            //console.log("eachItem", eachItem);
            collapsibleArray.push(<Collapsible trigger={eachItem.childId}>
            {parseItems(eachItem.children)}
            </Collapsible>)
        } else {
            //console.log("eachItem child", eachItem);
            
            return collapsibleArray.push(<Item deliveryTimeline = {eachItem.deliveryTimeline} precaution={eachItem.precaution} howtouse = {eachItem.howtouse} price = {eachItem.price} title={eachItem.title} type={eachItem.type} imagePath={eachItem.imagePath} desc={eachItem.desc} goodFor={eachItem.goodFor} quantity={eachItem.quantity} flavours={eachItem.flavours} ingredients={eachItem.ingredients}></Item>);
            
        }
        
    })
    //console.log("collapsibleArray" , collapsibleArray);
    return collapsibleArray;
    // return arrayOfitems.map(eachItem => 
    //         //{
    //             // if(eachItem.length > 0) {
    //             //     parseItems(eachItem) 
    //             // } else {
    //                 <Collapsible trigger={eachItem.childId}>
    //                     <Item title={eachItem.title} imagePath={eachItem.imagePath} desc={eachItem.desc} goodFor={eachItem.goodFor} quantity={eachItem.quantity} flavours={eachItem.flavours} ingredients={eachItem.ingredients}></Item>
    //                 </Collapsible>
    //            // }
    //        // }
    //     );
}

function getNestedChildren(arr, parent) {
    var out = []
    for(var i in arr) {
        if(arr[i].parent == parent) {
            var children = getNestedChildren(arr, arr[i].childId)

            if(children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }
    return out
}

export default Shop