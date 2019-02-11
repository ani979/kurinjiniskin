import React from 'react'
import ImageSlickItem from '../Shopping/ImageSlickItem'
import allGifts from './GiftsConstants'
import HeadingAndText from '../Shopping/HeadingAndText'
import valentine_special_one from '../../assets/img/Gifting/valentine_special_one.jpg'
import valentine_special_two from '../../assets/img/Gifting/valentine_special_two.jpg'
import valentine_special_three from '../../assets/img/Gifting/valentine_special_three.jpg'
import valentine_special_four from '../../assets/img/Gifting/valentine_special_four.jpg'
import valentine_special_five from '../../assets/img/Gifting/valentine_special_five.jpg'
import gift_box_one from '../../assets/img/Gifting/Gift_bag_1.jpg'
import gift_box_two from '../../assets/img/Gifting/Gift_bag_2.jpg'
import jute_bag_one from '../../assets/img/Gifting/jute_bag_small_1.jpg'
import jute_bag_two from '../../assets/img/Gifting/jute_bag_big.jpg'
import fluffyCreamOne from '../../assets/img/FaceCare/SpecialNeeds/fluffy_two.jpg'
import vanillaChocTwo from '../../assets/img/Soaps/vanilla_choc_2.jpg'

const allItems = [
    
    {
        
        title:<h3>{allGifts.valentineSpecial}</h3>,
        desc : <p>Not all romantic gestures come in the form of Roses, Lindt, Chardonnay or Solitaire. Some just come in the form of a soft touch and a warm comfort. This romantic season gift a box of care and good health. Our box of nourishment silently and slowly takes care of the skin, keeps it nourished, healthy and glowing while the life moves on.
            <br/>
            <br/>
            <b>A box of nourishing cream, soaps and lip balm, all inclusive for Rs. 550/-</b>.
            <br/>
            Available in pink and purple heart-shaped metal tin boxes and also wonderful paper packs.
            <i>Note:These can be customised as per your request too </i>
        </p>,
        imagePath : <ImageSlickItem count = {4} smallImage0 = {valentine_special_two} 
        smallImage1 = {valentine_special_three} smallImage2={valentine_special_four}smallImage3={valentine_special_five}></ImageSlickItem>,
        consistsOf : <HeadingAndText header = {allGifts.consistsOf} text ="French Lavender Honey, One nourishing bar, One scrubbing bar & one lip balm"></HeadingAndText>,
        price: <HeadingAndText header = {allGifts.price} text = "Rs550/- only"></HeadingAndText>,
    },
    {
        
        title:<h3>{allGifts.birthdayAdults}</h3>,
        desc : <p>Gifting has never been an easy task. When it comes to choosing a right gift we are bludgeoned by ideas and then what we choose finally doesn’t always satisfy us. We want to choose a right one, something that’s experiential, an unforgettable one. 
                We, at <b>Kurinjini</b>, bring you our handmade handpicked gifting options. Be it a birthday gift, an anniversary gift or a wedding gift, we can help you choose a perfect one and deliver it to you in wonderful gift packaging options.
            <br/>
            Available in various paper made boxes.
        </p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {gift_box_one} smallImage1= {gift_box_two}></ImageSlickItem>,
        consistsOf : <HeadingAndText header = {allGifts.consistsOf} text ="Choose between our brightening serum, hair oil, moisturizing creams, soaps & lip balms"></HeadingAndText>,
        price: <HeadingAndText header = {allGifts.price} text = "Available from Rs500 and onwards/- inclusive of gift pacakging"></HeadingAndText>,
    },
    {
        
        title:<h3>{allGifts.birthdayKids}</h3>,
        desc : <p> Pleasing kids is not an easy task. Be it a toy, a nice book or a cute little frock, we don't know what they would like. Hence, our gifts to the kids are through their parents who know what love and care means to a child. Handmade soaps and creams for kids all in a box.
            <br/>
            Available in several colored boxes or even jute bags.
        </p>,
        imagePath : <ImageSlickItem count = {4} smallImage0 = {jute_bag_one} 
        smallImage1 = {jute_bag_two} smallImage2={fluffyCreamOne} smallImage3={vanillaChocTwo}></ImageSlickItem>,
        consistsOf : <HeadingAndText header = {allGifts.consistsOf} text ="Fluffy for kids, One vanilla chocolate soap & one lip balm"></HeadingAndText>,
        price: <HeadingAndText header = {allGifts.price} text = "Rs500/-"></HeadingAndText>,
    },
    {
        
        title:<h3>{allGifts.returnGifts}</h3>,
        desc : <p>Have you noticed that picking up a return gift is more difficult than choosing a birthday gift. Allow us to ease your burden there. Handmade cocholate vanilla soap or a fruit medley bar especially for kids.
            <br/>
            Available in several colored boxes or even jute bags.
        </p>,
        imagePath : <ImageSlickItem count = {3} smallImage0 = {vanillaChocTwo} 
        smallImage1 = {jute_bag_two} smallImage2={jute_bag_one}></ImageSlickItem>,
        consistsOf : <HeadingAndText header = {allGifts.consistsOf} text ="Vanilla Chocolate or Fruit Medley soaps"></HeadingAndText>,
        price: <HeadingAndText header = {allGifts.price} text = "Rs80/- inclusive of gift pacakging for orders 10 and above"></HeadingAndText>,
    },
    {
        
        title:<h3>{allGifts.kittyParty}</h3>,
        desc : <p> It's equally fun and challenging to host a social gathering of friends. You pick a theme, plan fun games, and prepare snacks. Forget something? Yes, gifts! 
            A handmade gift is all you need to make this a fantastic party. A box consisting of scrubbing ot nourishing bar and lip balm or lip scrub can be affordable as well as a worthy choice for the event. 
            <br/>
            Available in several colored boxes or even jute bags.
        </p>,
        imagePath : <ImageSlickItem count = {4} smallImage0 = {gift_box_one} smallImage1 = {jute_bag_one} smallImage2 = {jute_bag_two} smallImage3= {gift_box_two}></ImageSlickItem>,
        consistsOf : <HeadingAndText header = {allGifts.consistsOf} text ="One scrubbing bar and lip balm/lip scrub"></HeadingAndText>,
        price: <HeadingAndText header = {allGifts.price} text = "Rs150/- inclusive of gift pacakging for orders 10 and above"></HeadingAndText>,
    }
]

export default allItems