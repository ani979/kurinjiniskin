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
import lipbalmSmallOne from '../../assets/img/LipCare/lipbalm1_small.jpg'
import lipbalmBigOne from '../../assets/img/LipCare/lipbalm1_big.jpg'
import lipbalmSmallTwo from '../../assets/img/LipCare/lipbalm2_small.jpg'
import lipbalmBigTwo from '../../assets/img/LipCare/lipbalm2_big.jpg'
import lipbalmSmallThree from '../../assets/img/LipCare/lipbalm3_small.jpg'
import lipbalmBigThree from '../../assets/img/LipCare/lipbalm3_big.jpg'
import lipScrubSmallOne from '../../assets/img/LipCare/lipScrub1_small.jpg'
import lipScrubBigOne from '../../assets/img/LipCare/lipScrub1_big.jpg'
import lipScrubSmallTwo from '../../assets/img/LipCare/lipScrub2_small.jpg'
import lipScrubBigTwo from '../../assets/img/LipCare/lipScrub2_big.jpg'
import lipScrubSmallThree from '../../assets/img/LipCare/lipScrub3_small.jpg'
import lipScrubBigThree from '../../assets/img/LipCare/lipScrub3_big.jpg'


const allItems = [
    {
        childId: allProducts.faceCreams,
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
        childId: allProducts.moisturizingCreams,
        parent: allProducts.faceCreams
    },
    {
        childId: allProducts.specialNeeds,
        parent: allProducts.faceCreams
    },
    {
        childId: allProducts.antiageing,
        parent: allProducts.faceCreams
    },

    {
        
        title:<h3>{allProducts.moisturizingCreams}</h3>,
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
        parent: allProducts.moisturizingCreams,
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
    },
    {
        
        title:<h3>{allProducts.lipbalm}</h3>,
        desc : <p> Cocoa butter is a natural, meltable oil extracted from the cocoa bean. Cocoa butter is great for naturally healing dry, sensitive skin. it has a mild fragrance, a smooth texture and is ultra-hydrating</p>,
        imagePath : <ImageSlickItem count = {3} smallImage0 = {lipbalmSmallOne} bigImage0={lipbalmBigOne}
        smallImage1 = {lipbalmSmallTwo} bigImage1={lipbalmBigTwo} smallImage2 = {lipbalmSmallThree} bigImage2={lipbalmBigThree}></ImageSlickItem>,
        quantity : <p><b> Quantity:</b> 5mg </p>,
        flavours : <p><b> Available in flavours:</b> Chocolate, Strawberry, Spearmint, Vanilla & Orange - Available in round and stick containers</p>,
        ingredients :<p><b> Ingredients:</b>Unrefined Beeswax and Cocoa Butter, Jojoba, Sweet Almonds, Vitamin-E, Avocado</p>,
        parent: allProducts.lipBalmParent,
        price: <p>Rs. 100/-</p>
    },
    {
        
        title:<h3>{allProducts.lipScrubs}</h3>,
        desc : <p> Sugar-based exfoliator that peels off dry and flaky skin from your lips along with providing the needed hydration and nourishment</p>,
        imagePath : <ImageSlickItem count = {3} smallImage0 = {lipScrubSmallOne} bigImage0={lipScrubBigOne}
        smallImage1 = {lipScrubSmallTwo} bigImage1={lipScrubBigTwo} smallImage2 = {lipScrubSmallThree} bigImage2={lipScrubBigThree}></ImageSlickItem>,
        quantity : <p><b> Quantity:</b> 5mg </p>,
        flavours : <p><b> Available in flavours:</b>Chocolate, Orange(essential oil) - Available in round containers</p>,
        howtouse : <p><b> How to Use: </b> Rub gently on the lips and after a while wipe off or rinse with water</p>,
        ingredients :<p><b> Ingredients:</b>It has a sweet sugary flavour through caster sugar blended with raw unbleached beeswax and Cocoa butter. The nourishing oils used are Sweet Almond, Jojoba and Vitamin-E</p>,
        parent: allProducts.lipBalmParent,
        price: <p> <b>Cost:</b> <ul> 
                    <li>5gm - Rs. 100/-</li>
                    <li>~10gm - 150/-</li>
                   </ul>
               </p>     
    },
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