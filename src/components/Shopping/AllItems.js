import facecream from '../../assets/img/FaceCare/faceCare.jpg'
import allProducts from './ProductConstants'
import React from 'react'
import ImageItem from './ImageItem'
import ImageSlickItem from './ImageSlickItem'
import roseSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_small.jpg'
import roseBigCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_big.jpg'
import orangeSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_small.jpg'
import orangeBigCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_big.jpg'
import immortalBigCream from '../../assets/img/FaceCare/SpecialNeeds/Immortal_big.jpg'
import immortalSmallCream from '../../assets/img/FaceCare/SpecialNeeds/Immortal_small.jpg'
import pacificBigCream from '../../assets/img/FaceCare/SpecialNeeds/pacific_big.jpg'
import pacificSmallCream from '../../assets/img/FaceCare/SpecialNeeds/pacific_small.jpg'
import fluffySmallCream from '../../assets/img/FaceCare/SpecialNeeds/Fluffy_small.jpg'
import fluffyBigCream from '../../assets/img/FaceCare/SpecialNeeds/Fluffy_big.jpg'

const allItems = [
    {
        childId: "Face cream",
        parent: "parent"
    },
    {
        childId: allProducts.lipBalmParent,
        parent: "parent"
    },
    {
        childId: "Foot Care",
        parent: "parent"
    },
    {
        childId: "Soaps",
        parent: "parent"
    },
    {
        childId: "Body Butter",
        parent: "parent"
    },
    {
        childId: "Body Butter",
        parent: "parent"
    },
    {
        childId: "Moisturizing Creams",
        parent: "Face cream"
    },
    {
        childId: allProducts.specialNeeds,
        parent: "Face cream"
    },
    {
        childId: "Anti-ageing Creams",
        parent: "Face cream"
    },

    {
        
        title:<h3>Moisturizing Creams</h3>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {roseSmallCream} bigImage0={roseBigCream}
                    smallImage1 = {orangeSmallCream} bigImage1={orangeBigCream}></ImageSlickItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: "Moisturizing Creams",
        price: <p>Rs.250/-</p>
    },
    {
        
        title:<h3>Immortal</h3>,
        type:<h6><b>Anti-ageing</b></h6>,
        desc : <p>An anti-ageing cream that also helps fighting hyperpigmentation. 
            It has ingredients that are considered to be anti-wrinkle, skin tightening agent, reducing dark spots and blemishes. 
            It is high in Vitamin-A and Vitamin-E oil that prevents formation of free radicals that are scientifically proven to be the reason of pre-mature ageing.</p>,
        imagePath : <ImageItem smallImageOne = {immortalSmallCream} bigImageOne={immortalBigCream}></ImageItem>,
        SuitableFor:"Suitable for wrinked skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        ingredients : <p><b> Ingredients:</b>Frankincense, Geranium, Avocado,
        Moringa, Argan, Jojoba, Grapeseed, 
        Tea Tree, Rosemary, Hemp, Cucumber 
        seed,  Coconut, beeswax, Sweet 
        Almond,  Vitamin-E, Mango and 
        African Shea butter, Apricot oil</p>,
        parent: allProducts.specialNeeds,
        price: <p>Rs.300/-</p>
    },
    {
        
        title:<h3>Pacific</h3>,
        type:<h6><b>Sensitive Skin</b></h6>,
        desc : <p>Pacific has speciality of soothing sensitive skin. 
            It has ingredients like Rosemary, 
            Tea tree and safflower oil that refresh oily skin without causing excess dryness. 
            Tea tree and Rosemary are considered to be a natural antiseptic and has astringent properties. 
            It is effective in lightening scars, soothing pimples apart from being anti-blemish, anti-microbial agents.</p>,
        imagePath : <ImageItem smallImageOne = {pacificSmallCream} bigImageOne={pacificBigCream}></ImageItem>,
        SuitableFor:"For Sensitive skin only",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        ingredients : <p><b> Ingredients:</b>JRosemary, Tea tree,  Safflower, 
        Lemon,  Hemp, Cucumber seed, 
        Argan, Virgin Coconut, Sweet Almond, 
        Vitamin-E, Frankincense, Geranium, 
        Moringa, Argan, Jojoba, Grapeseed, 
        beeswax, Mango and African Shea butter, 
        Apricot oil</p>,
        parent: allProducts.specialNeeds,
        goodFor:<p><b> Suitable for:</b>Acne prone skin</p>,
        price: <p>Rs.300/-</p>
    },
    {
        
        title:<h3>Fluffy</h3>,
        type:<h6><b>Especially For Kids</b></h6>,
        desc : <p>Very mild with combination of kids skin friendly oil like Jojoba, Argan and Almond.</p>,
        imagePath : <ImageItem smallImageOne = {fluffySmallCream} bigImageOne={fluffyBigCream}></ImageItem>,
        SuitableFor:"Excellent for Kids",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Vitamin-E, Sweet Almond,
        Argan, Avocado, Virgin Coconut,
        Virgin Olive, Cocoa Butter</p>,
        parent: allProducts.specialNeeds,
        price: <p>Rs. 300/-</p>
    }
    // ,
    
    
    // {
        
    //     title:"Chocolate flavor lipblam",
    //     desc : "Lip Blowing",
    //     imagePath : facecream,
    //     goodFor : "goodFor",
    //     quantity : "60 ml",
    //     flavours : "Cherry Blossom, Orange",
    //     ingredients : "Argan, Moringa",
    //     parent: allProducts.lipBalmParent,
    // },
    // {
        
    //     title:"Chocolate vanilla soap",
    //     desc : "Soap",
    //     imagePath : facecream,
    //     goodFor : "goodFor",
    //     quantity : "60 ml",
    //     flavours : "Cherry Blossom, Orange",
    //     ingredients : "Argan, Moringa",
    //     parent: "Soaps",
    // },
]

export default allItems