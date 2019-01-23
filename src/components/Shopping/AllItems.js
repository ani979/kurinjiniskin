import facecream from '../../assets/img/FaceCare/faceCare.jpg'
import allProducts from './ProductConstants'
import React from 'react'
import ImageItem from './ImageItem'
import roseSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_small.jpg'
import roseBigCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_big.jpg'
import orangeSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_small.jpg'
import orangeBigCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_big.jpg'


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
        imagePath : <ImageItem smallImageOne = {roseSmallCream} bigImageOne={roseBigCream}
                    smallImageTwo = {orangeSmallCream} bigImageTwo={orangeBigCream}></ImageItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: "Moisturizing Creams",
    },
    {
        
        title:<h3>Immortal</h3>,
        type:<h6><b>Anti-ageing</b></h6>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageItem smallImageOne = {roseSmallCream} bigImageOne={roseBigCream}
                    smallImageTwo = {orangeSmallCream} bigImageTwo={orangeBigCream}></ImageItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: allProducts.specialNeeds,
    },
    {
        
        title:<h3>Pacific</h3>,
        type:<h6><b>Sensitive Skin</b></h6>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageItem smallImageOne = {roseSmallCream} bigImageOne={roseBigCream}
                    smallImageTwo = {orangeSmallCream} bigImageTwo={orangeBigCream}></ImageItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: allProducts.specialNeeds,
    },
    {
        
        title:<h3>Fluffy</h3>,
        type:<h6><b>Especially For Kids</b></h6>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageItem smallImageOne = {roseSmallCream} bigImageOne={roseBigCream}
                    smallImageTwo = {orangeSmallCream} bigImageTwo={orangeBigCream}></ImageItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: allProducts.specialNeeds,
    },
    {
        
        title:<h3>Anti-ageing Creams</h3>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageItem smallImageOne = {roseSmallCream} bigImageOne={roseBigCream}
                    smallImageTwo = {orangeSmallCream} bigImageTwo={orangeBigCream}></ImageItem>,
        SuitableFor:"These are very mild creams, suitable for all kinds of skin",
        quantity : <p><b> Quantity:</b> 60 ml</p>,
        flavours : <p><b> Available in flavours:</b>Cherry Blossom, Winter Bloom, Orange, Rose Petals</p>,
        ingredients : <p><b> Ingredients:</b>Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax</p>,
        parent: allProducts.specialNeeds,
    },
    
    {
        
        title:"Chocolate flavor lipblam",
        desc : "Lip Blowing",
        imagePath : facecream,
        goodFor : "goodFor",
        quantity : "60 ml",
        flavours : "Cherry Blossom, Orange",
        ingredients : "Argan, Moringa",
        parent: allProducts.lipBalmParent,
    },
    {
        
        title:"Chocolate vanilla soap",
        desc : "Soap",
        imagePath : facecream,
        goodFor : "goodFor",
        quantity : "60 ml",
        flavours : "Cherry Blossom, Orange",
        ingredients : "Argan, Moringa",
        parent: "Soaps",
    },
]

export default allItems