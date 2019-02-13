import facecream from '../../assets/img/FaceCare/faceCare.jpg'
import allProducts from './ProductConstants'
import React from 'react'
import ImageItem from './ImageItem'
import ImageSlickItem from './ImageSlickItem'
import roseSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_small.jpg'
import roseBigCream from '../../assets/img/FaceCare/MoisturizingCreams/rose_big.jpg'
import orangeSmallCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_small.jpg'
import orangeBigCream from '../../assets/img/FaceCare/MoisturizingCreams/orange_big.jpg'
import immortalOne from '../../assets/img/FaceCare/SpecialNeeds/Immortal_one.jpg'
import immortalTwo from '../../assets/img/FaceCare/SpecialNeeds/Immortal_two.jpg'
import immortalThree from '../../assets/img/FaceCare/SpecialNeeds/Immortal_three.jpg'
import pacificBigCream from '../../assets/img/FaceCare/SpecialNeeds/pacific_big.jpg'
import pacificSmallCream from '../../assets/img/FaceCare/SpecialNeeds/pacific_small.jpg'
import fluffyCreamTwo from '../../assets/img/FaceCare/SpecialNeeds/fluffy_one.jpg'
import fluffyCreamOne from '../../assets/img/FaceCare/SpecialNeeds/fluffy_two.jpg'
import lipbalmSmallOne from '../../assets/img/LipCare/lipbalm1_small.jpg'
import lipbalmBigOne from '../../assets/img/LipCare/lipbalm1_big.jpg'
import lipbalmSmallTwo from '../../assets/img/LipCare/lipbalm2_small.jpg'
import lipbalmBigTwo from '../../assets/img/LipCare/lipbalm2_big.jpg'
import lipbalmSmallThree from '../../assets/img/LipCare/lipbalm3_small.jpg'
import lipbalmBigThree from '../../assets/img/LipCare/lipbalm3_big.jpg'
import lipScrubSmallOne from '../../assets/img/LipCare/lipScrub4_small.jpg'
import sparkleBigOne from '../../assets/img/Oils/Serums/sparkle_big.jpg'
import sparkleBigTwo from '../../assets/img/Oils/Serums/sparkleTwo_big.jpg'
import moonStone from '../../assets/img/Oils/Serums/moonstone_big.jpg'
import hairOne from '../../assets/img/Oils/hairandface/hair_one.jpg'
import faceOil from '../../assets/img/Oils/hairandface/faceOil_One.jpg'
import footScrubOne from '../../assets/img/FootCare/footScrub1.jpg'
import loofahOne from '../../assets/img/Soaps/loofah_one.jpg'
import loofahTwo from '../../assets/img/Soaps/loofah_two.jpg'
import mildScrubberOne from '../../assets/img/Soaps/mildScrubber_one.jpg'
import casterOne from '../../assets/img/Soaps/castersugar_scrubber_one.jpg'
import casterTwo from '../../assets/img/Soaps/castersugar_scrubber_two.jpg'
import vanillaChocOne from '../../assets/img/Soaps/vanilla_choc_1.jpg'
import vanillaChocTwo from '../../assets/img/Soaps/vanilla_choc_2.jpg'
import HeadingAndText from './HeadingAndText'
import sheaCashmereOne from '../../assets/img/Soaps/shea_cashmere_1.jpg'
import basilThymeOne from '../../assets/img/Soaps/basil_thyme_1.jpg'
import flh_one from '../../assets/img/FaceCare/MoisturizingCreams/frenchLavender_1.jpg'
import flh_two from '../../assets/img/FaceCare/MoisturizingCreams/frenchLavender_2.jpg'
import rose_common from '../../assets/img/rosewater/common.jpg'
import rose_mist from '../../assets/img/rosewater/rose_mist.jpg'
import rose_arka from '../../assets/img/rosewater/rose_arka.jpg'

const allItems = [
    {
        childId: allProducts.faceCare,
        parent: "parent"
    },
    {
        childId: allProducts.lipBalmParent,
        parent: "parent"
    },
    {
        childId: allProducts.footCare,
        parent: "parent"
    },
    {
        childId: allProducts.soaps,
        parent: "parent"
    },
    {
        childId: allProducts.hydrosols,
        parent: "parent"
    },
    {
        childId: allProducts.hairCare,
        parent: "parent"
    },
    {
        childId: allProducts.scrubbers,
        parent: allProducts.soaps
    },
    {
        childId: allProducts.normalSoaps,
        parent: allProducts.soaps
    },
    {
        childId: "Body Butter",
        parent: "parent"
    },
    {
        childId: allProducts.oilsAndSerums,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.moisturizingCreams,
        parent: allProducts.faceCare
    },
    
    {
        childId: allProducts.kidsFriendly,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.sensitiveSkin,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.specialNeeds,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.antiageing,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.serums,
        parent: allProducts.faceCare
    },
    {
        childId: allProducts.oils,
        parent: allProducts.hairCare
    },
    {
        
        title:<h3>{allProducts.moisturizingCreams}</h3>,
        desc : <p>Daily moisturizing is vital for a healthy skin.
         Leaving skin without a moisturizer means compromising the protective skin barrier.
         Kurinjini brings to you a Shea, Mango butter based moisturizer that also has the anti-oxidant properties brought by Vitamin-E.
         Along with these, we have also added Jojoba and Sweet Almond oils provide that extra nourishment to the skin.
         We also take customized orders for your specific requirement on fragrance.</p>,
        imagePath : <ImageSlickItem count = {4} smallImage0 = {flh_two} bigImage0={roseBigCream}
                    smallImage1 = {roseSmallCream} bigImage1={orangeBigCream} smallImage2={orangeSmallCream} smallImage3={flh_one}></ImageSlickItem>,
        goodFor:<HeadingAndText header={allProducts.suitableFor} text = "These are very mild creams, suitable for all kinds of skin"></HeadingAndText>,
        quantity : <HeadingAndText header = {allProducts.quantity} text ="60 ml"></HeadingAndText>,
        flavours : <HeadingAndText header = {allProducts.availableinFlavours} text = "French Lavender Honey Cherry Blossom, Winter Bloom, Orange, Rose Petals"></HeadingAndText>,
        ingredients : <HeadingAndText header = {allProducts.quantity} text ="Jojoba, Sweet Almond, Vitamin-E,
        Mango butter, Tea Tree, Rosemary,
        Coconut, Virgin Olive, Beeswax"></HeadingAndText>,
        parent: allProducts.moisturizingCreams,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.250/-"></HeadingAndText>,
        precaution:<HeadingAndText header = {allProducts.precaution} text = "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"></HeadingAndText>
    },
    {
        
        title:<h3>Immortal</h3>,
        type:<h6><b>Anti-ageing</b></h6>,
        desc : <p>An anti-ageing cream that also helps fighting hyperpigmentation. 
            It has ingredients that are considered to be anti-wrinkle, skin tightening agent, reducing dark spots and blemishes. 
            It is high in Vitamin-A and Vitamin-E oil that prevents formation of free radicals that are scientifically proven to be the reason of pre-mature ageing.</p>,
        imagePath : <ImageSlickItem count = {3} smallImage0 = {immortalOne} 
        smallImage1 = {immortalTwo} smallImage2={immortalThree}></ImageSlickItem>,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text = "Suitable for wrinked skin"></HeadingAndText>,
        quantity : <HeadingAndText header = {allProducts.quantity} text ="60 ml"></HeadingAndText>,
        ingredients : <HeadingAndText header ={allProducts.ingredients} text = "Frankincense, Geranium, Avocado, Moringa, Argan, Jojoba, Grapeseed, Tea Tree, Rosemary, Hemp, Cucumber seed,  Coconut, beeswax, Sweet Almond,  Vitamin-E, Mango and African Shea butter, Apricot oil"></HeadingAndText>,
        parent: allProducts.antiageing,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.300"></HeadingAndText>,
        precaution:<HeadingAndText header = {allProducts.precaution} text = "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"></HeadingAndText>
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
        quantity : <HeadingAndText header = {allProducts.quantity} text ="60 ml"></HeadingAndText>,
        ingredients : <HeadingAndText header = {allProducts.ingredients} text="Rosemary, Tea tree,  Safflower, 
        Lemon,  Hemp, Cucumber seed, 
        Argan, Virgin Coconut, Sweet Almond, 
        Vitamin-E, Frankincense, Geranium, 
        Moringa, Argan, Jojoba, Grapeseed, 
        beeswax, Mango and African Shea butter, 
        Apricot oil"></HeadingAndText>,
        parent: allProducts.sensitiveSkin,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text ="Sensitive skin that is acne prone"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.300"></HeadingAndText>,
        precaution:<HeadingAndText header = {allProducts.precaution} text = "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"></HeadingAndText>
    },
    {
        
        title:<h3>Fluffy</h3>,
        type:<h6><b>Especially For Kids</b></h6>,
        desc : <p>Very mild cream with combination of kids skin friendly oil like Jojoba, Argan and Almond. The essential oils fight infection and promote healing thus providing parents some relaxation in caring for their child.</p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {fluffyCreamOne} smallImage1={fluffyCreamTwo}></ImageSlickItem>,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text = "Excellent for Kids"></HeadingAndText>,
        quantity : <HeadingAndText header = {allProducts.quantity} text ="60 ml"></HeadingAndText>,
        ingredients : <HeadingAndText header = {allProducts.ingredients} text="Jojoba, Vitamin-E, Sweet Almond, Argan, Avocado, Virgin Coconut, Virgin Olive, Cocoa Butter"></HeadingAndText>,
        parent: allProducts.kidsFriendly,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.300"></HeadingAndText>,
        precaution:<HeadingAndText header = {allProducts.precaution} text = "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"></HeadingAndText>
    },
    {
        
        title:<h3>{allProducts.lipbalm}</h3>,
        desc : <p> Lip balms are made of cocoa butter which is a natural, meltable oil extracted from the cocoa bean. Cocoa butter is great for naturally healing dry, sensitive skin. it has a mild fragrance, a smooth texture and is ultra-hydrating. Unrefined beeswax, consisting of naturally produced vitamins makes it healthier and prevents from further dryness and chapping of the lips</p>,
        imagePath : <ImageSlickItem count = {3} smallImage0 = {lipbalmSmallOne} bigImage0={lipbalmBigOne}
        smallImage1 = {lipbalmSmallTwo} bigImage1={lipbalmBigTwo} smallImage2 = {lipbalmSmallThree} bigImage2={lipbalmBigThree}></ImageSlickItem>,
        quantity : <HeadingAndText header={allProducts.quantity} text = "5gm"></HeadingAndText>,
        flavours : <HeadingAndText header= {allProducts.availableinFlavours} text="Chocolate, Strawberry, Spearmint, Vanilla & Orange - Available in round and stick containers"></HeadingAndText>,
        ingredients :<HeadingAndText header= {allProducts.ingredients} text = "Unrefined Beeswax and Cocoa Butter, Jojoba, Sweet Almonds, Vitamin-E, Avocado"></HeadingAndText>,
        parent: allProducts.lipBalmParent,
        price: <HeadingAndText header = {allProducts.price} text = "Rs. 100"></HeadingAndText>
    },
    {
        
        title:<h3>{allProducts.lipScrubs}</h3>,
        desc : <p> Sugar-based exfoliator that peels off dry and flaky skin from your lips along with providing the needed hydration and nourishment</p>,
        imagePath : <ImageItem smallImageOne={lipScrubSmallOne}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="5gm"></HeadingAndText>,
        flavours : <HeadingAndText header = {allProducts.availableinFlavours} text = "Chocolate, Orange(essential oil) - Available in round containers"></HeadingAndText>,
        howtouse : <HeadingAndText header = {allProducts.howToUse} text = "Rub gently on the lips and after some continuous rounds of rubbing, wipe off with towel or rinse with water"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "It has a sweet sugary flavour through caster sugar blended with raw unbleached beeswax and Cocoa butter. The nourishing oils used are Sweet Almond, Jojoba and Vitamin-E"></HeadingAndText>,
        parent: allProducts.lipBalmParent,
        price: <HeadingAndText header = {allProducts.price} text = "Rs. 100"></HeadingAndText>
    },
    {
        
        title:<h3>Sparkle</h3>,
        type: <h6><b>{allProducts.faceSerum}</b></h6>,
        desc : <p> As the name suggests, it's a silicone free skin brightening overnight serum that absorbs quickly in the skin and gives a radiating effect over a period of time. Pores are tiny openings in the skin that release oil and sweat. When pores are clogged, it can result in blackheads or acne. This serum aims to unclog the pores. It also has Helichrysum essential oil that helps smooth both skin tone and texture, reduces the appearance of fine lines, and its emollient properties help keep skin hydrated. Helichrysum is also known to be beneficial for treating sunburns. Along with it is also added few drops of Mysore Sandalwood oil that acts as an antiseptic and anti-inflammatory agent too apart from being a brightening agent. Also added is Rosehip that tightens the pores and brightens your skin. Mixed with other essentials and carrier oils, this brightening skin serum is good for all kinds of skin.</p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {sparkleBigOne} bigImage0={sparkleBigOne}
        smallImage1 = {sparkleBigTwo} bigImage1={sparkleBigTwo}></ImageSlickItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="20 ml"></HeadingAndText>,
        howtouse : <HeadingAndText header = {allProducts.howToUse} text = "It's a night application cream. Take a small quantity on your finger tip and apply gently after a face wash on your face."></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Sandalwood, Helichrysum, Rosehip, Frakincense, Vitamin-E, Jojoba, Sweet Almond, Hemp, Avocado, Moringa and Alove"></HeadingAndText>,
        parent: allProducts.oilsAndSerums,
        goodFor: <HeadingAndText header = {allProducts.suitableFor} text = "All kinds of skin. 16 years and plus only"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.350/-"></HeadingAndText>
    },
    {
        
        title:<h3>Moonstone</h3>,
        type: <h6><b>{allProducts.darkCirclesRemoval}</b></h6>,
        desc : <p> Moonstone is an under eye serum, an attempt from us to come up with something that can reduce the dark circles. Apart from some of the ingredients already present in “Sparkle”, there is also cucumber seed and carrot seed oil that reduces stress and tiredness from the eyes, keeping it cool. With its high content of vitamin C, beta-carotene and manganese, cucumber oil can stimulate collagen production, too. Collagen is the protein that provides the structure of your skin. It helps boosting your body’s natural collagen synthesis without having to rely on chemicals and synthetic ingredients. Carrot seed essential oil, a skin lightening agent, improves moisture retention, reduce the look of tired skin, and help nourish dry areas. Another essential added is Lavender, that helps enhance blood circulation and a natural healer along with reducing stress and anxiety. All these added with carrier oils forms this natural healer <b>Moonstone</b></p>,
        imagePath : <ImageItem smallImageOne = {moonStone} bigImageOne={moonStone}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="20 ml"></HeadingAndText>,
        howtouse : <HeadingAndText header = {allProducts.howToUse} text = "It's a night application cream. Take a small quantity on your finger tip and massage gently under your eyes so that it improves blood circulation."></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Sandalwood, Helichrysum, Geranium, Lavender, Carrot seed, Cucumber seed, Rosehip, Vitamin-E, Hemp, Jojoba, Sweet Almond and Alove"></HeadingAndText>,
        parent: allProducts.oilsAndSerums,
        goodFor: <HeadingAndText header = {allProducts.suitableFor} text = "All kinds of skin. 16 years and plus only"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.350/-"></HeadingAndText>
    },
    
    {
        
        title:<h3>Renaissance</h3>,
        type: <h6><b>{allProducts.nightOil}</b></h6>,
        desc : <p> Extra-hydrating night application oil that has quick absorption quality. Its a combination of oils and essential oils having properties of skin brightening, removal of hyper-pigmentation, even removing blemishes. The basic component is Vitamin-E oil and along with carrier oils as Sweet Almond oil</p>,
        imagePath : <ImageItem smallImageOne = {faceOil} bigImageOne={faceOil}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="10 ml"></HeadingAndText>,
        howtouse : <HeadingAndText header = {allProducts.howToUse} text= "Apply after a face wash during night before going to bed."></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Saffron, Argan, Moringa, Tea Tree, Geranium, Rosemary, Jojoba, Grapeseed, Cucumber seed, Hemp, Avocado, Frankincense, Lemon Grass, Coconut"></HeadingAndText>,
        parent: allProducts.oilsAndSerums,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.200/-"></HeadingAndText>     
    },
    {
        
        title:<h3>Resurgence</h3>,
        type: <h6><b>{allProducts.hairOil}</b></h6>,
        desc : <p> Our hair is just as sensitive as our skin. The basic substance of hair is keratin, a strong protein. When we lose our hair as each one comes to the end, a new hair should grow in its place. This should happen instantaneously but because of our lifestyle and synthetic chemicals that we apply with shampoo or conditioners, the time between a hair getting lost and new one coming up can extend so that our hair begins to thin. “Resurgence” is an intense hair treatment oil. It consists of Argan, Grapeseed essential oils that consists of Vitamin-E, a natural anti-oxidant that nourishes dry damaged hair, repairs and rejuvenates, thereby protecting it and giving it the needed shine. Hemp oil is a great oil for scalp and helps grow hair faster, thicker and longer. Avocado oil present acts as a carrier oil stimulating the blood flow and unclog blocked follicles.</p>,
        imagePath : <ImageItem smallImageOne = {hairOne} ></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="10 ml"></HeadingAndText>,
        howtouse : <HeadingAndText header = {allProducts.howToUse} text= "Apply on your hair and scalp with any career oil"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Argan, Moringa, Rosemary, Grapeseed, Cucumber seed, Jojoba, Hemp, Frankincense, Lemon Grass, Coconut, Avocado"></HeadingAndText>,
        parent: allProducts.oils,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.200/-"></HeadingAndText>  
                    
    },
    {
        
        title:<h3>Loofah based</h3>,
        desc : <p> Loofahs are made from the dried fruit of a tropical plant called Loofah. Loofah is strong and suitable for hard heels. 
            Available with addition of some essential oils or fragrance that are proven to be not only beneficial on your skin but also your life. They have properties to reducing stress, anxiety, bringing calmness and soothing on skin too.</p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {loofahOne} 
        smallImage1 = {loofahTwo}></ImageSlickItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="100gm"></HeadingAndText>,
        flavours : <HeadingAndText header = {allProducts.availableinFlavours} text = "Ylang-Ylang, Basil, Lavender, Orange, Fruit Medley, Mango Mandarian, Rosewood, Chamomile"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "It has a sweet sugary flavour through caster sugar blended with raw unbleached beeswax and Cocoa butter. The nourishing oils used are Sweet Almond, Jojoba and Vitamin-E"></HeadingAndText>,
        parent: allProducts.scrubbers,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.100/-"></HeadingAndText>       
    },
    {
        
        title:<h3>Caster Sugar based</h3>,
        desc : <p> A soap that removes dry skin from your feet making it smooth and clean. Currently in two variants, caster sugar is fine-grained sugar that helps to maintain moisture in the skin and makes a gentle scrub, removing dead cells to brighten, smooth and moisturise the skin.
            Available with addition of some essential oils or fragrance that are proven to be not only beneficial on your skin but also your life. They have properties to reducing stress, anxiety, bringing calmness and soothing on skin too.
        </p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {casterOne} 
        smallImage1 = {casterTwo}></ImageSlickItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="~80gm"></HeadingAndText>,
        flavours : <HeadingAndText header = {allProducts.availableinFlavours} text = "Ylang-Ylang, Basil, Lavender, Orange, Fruit Medley, Mango Mandarian, Rosewood, Chamomile"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Caster sugar blended with Vitamin-E and Sweet Almond. Essential oils are added depending on flavour"></HeadingAndText>,
        parent: allProducts.scrubbers,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.70/-"></HeadingAndText>      
    },
    {
        
        title:<h3>Mild scrubbers</h3>,
        desc : <p> Mild scrubbers that gently exfoliate the dead skin. These scrubbers are required for gentle body scrubbing and along with these provide skin nourishment too. </p>,
        imagePath : <ImageItem smallImageOne = {mildScrubberOne}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="100gm"></HeadingAndText>,
        flavours : <HeadingAndText header = {allProducts.availableinFlavours} text = "Oatmeal, Chia seeds, Flax seeds, Poppy seeds"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Coconute, Glycerine and dpeneding on the flavour the respective ingredient is added"></HeadingAndText>,
        parent: allProducts.scrubbers,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.100/-"></HeadingAndText>   
    },
    {  
        title:<h3>Vanilla Chocolate</h3>,
        desc : <p>"mmmmm" is the first expression you greet this soap with. Imagine starting your day with such a scent every morning under a shower. Shea butter acts as that necessary moisturizing agent your skin needs every day. Good for kids and everyone else out there who just love smell of a chocolate.</p>,
        imagePath : <ImageItem smallImageOne = {vanillaChocTwo}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="75-80gm"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Coconut, Shea Butter, Glycerine, Cocoa powder, Warm Vanilla fragrance"></HeadingAndText>,
        parent: allProducts.normalSoaps,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text = "For everyone, but especially for Kids as they would love the smell of chocolate in their bath"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.80/-"></HeadingAndText>,    
        deliveryTimeline:  <HeadingAndText header = {allProducts.delivery} text = " a day "></HeadingAndText> 
    },
    {  
        title:<h3>Shea Cashmere soap</h3>,
        desc : <p>A fragrance balanced perfectly between sweet, warm and comforting. A rich buttery opening note combined with warm coconut leaves a fascinating scent. A soft moisturising soaping bar made with Shea Butter, Coconut oil base, Cashmere & Cherry blossom fragrance.</p>,
        imagePath : <ImageItem smallImageOne = {sheaCashmereOne}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="approx. 100gm"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Shea Butter, Coconut oil, Cashmere & Cherry blossom fragrance"></HeadingAndText>,
        parent: allProducts.normalSoaps,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text = "Suitable for all kinds of skin"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.100/-"></HeadingAndText>,    
        deliveryTimeline:  <HeadingAndText header = {allProducts.delivery} text = " a day "></HeadingAndText>
    },
    {  
        title:<h3>Basil and Thyme soap</h3>,
        desc : <p>A slightly sweet and spicy aromatic soap that consists in it Basil Essential oil which is found to be stimulating, promoting mental clarity and alertness. Thyme provides a herbal culinary note along with acting as something that is anti-bacterial, anti-septic. Found to be useful to manage body odour naturally. Extremely effective for an energising bath during the daytime hours.</p>,
        imagePath : <ImageItem smallImageOne = {basilThymeOne}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="75-80gm"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Thyme leaves, Basil Essentials, Coconut oil"></HeadingAndText>,
        parent: allProducts.normalSoaps,
        goodFor:<HeadingAndText header = {allProducts.suitableFor} text = "Suitable for all kinds of skin"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.80/-"></HeadingAndText>,      
        deliveryTimeline:  <HeadingAndText header = {allProducts.delivery} text = " a day "></HeadingAndText>
    }
    // 
    ,
    {
        
        title:<h3>Silk Route</h3>,
        type: <h6><b>{allProducts.footHealer}</b></h6>,
        desc : <p> One of the most common foot issues found in most of us is the issue of “cracked heels”. And, do we pay attention to it! 
            I think its even one of the most neglected skin problem. 
            But it does matter, these skin cracks apart from being painful, can allow bacteria and viruses to enter the body, leading to infection and illness. 
            And, if you are diabetic, it is important to examine your feet frequently for signs of cracks or infection. 
            Foot Healer has Rosemary essentials that saves from any fungal or bacterial infection. Cucumber seed oil being rich in Vitamin-B and Vitamin-C provides hydration to the skin and also is a healer to the dry and cracked skin.</p>,
        imagePath : <ImageItem smallImageOne= {footScrubOne}></ImageItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="40ml"></HeadingAndText>,
        ingredients :<HeadingAndText header = {allProducts.ingredients} text = "Cucumber seed, Rosemary, Hemp, Moringa,  Grapeseed, Shea butter, Vitamin-E, Coconut, Virgin Olive, Beeswax"></HeadingAndText>,
        parent: allProducts.footCare,
        howtouse:<HeadingAndText header = {allProducts.howToUse} text = "Apply on your heels. Put it in the night as absorption in the skin is better in the night"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.200/-"></HeadingAndText>,
        precaution:<HeadingAndText header = {allProducts.precaution} text = "All our moisturizing creams should be kept away from sunlight as it may lose its consistency"></HeadingAndText>
    },
    {
        
        title:<h3>Rose Mist</h3>,
        type: <h6><b>{allProducts.roseHydrosol}</b></h6>,
        desc : 
            <p>
                A few seconds of spritzing, to dress the air or your skin, could change your day. Rose water isn’t new. It has been around for almost 14 centuries, originated in Iran as part of their medical and spiritual practices.
                <br/>
                <br/>
                Rose mist is a powerful beauty potion made by distilling rose-infused water. The product is a collected mist that hydrates the inside while leaving the surface toned and smooth. Being an anti-inflammatory agent and anti-oxidant, it can be used as a natural treatment for your skin related issues. 
                Due to the astringent like properties it possesses, rose mist helps clean pores and tone the skin
                <br/>
                <br/>
                Use in the mornings or evenings or anytime of the day you want to hydrate. Spray on your face with eyes closed. Use the palm to lightly massage into the skin. 
                <br/>
                <br/>
                <ul>
                    <li> Can also use it with coconut oil to remove the make-up. </li>
                    <li> Spray it on your scalp so that it penetrates in transporting nutrients. They make an excellent complement to hair oils, shampoos and conditioners. </li>
                    <li> Spray it for a better, more relaxed sleep.</li>
                </ul>

            </p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {rose_common} 
        smallImage1 = {rose_mist}></ImageSlickItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="50ml"></HeadingAndText>,
        parent: allProducts.hydrosols,
        howtouse:<HeadingAndText header = {allProducts.howToUse} text = "Its a sprayer and hence should be sprayed on your skin or hair wherever you would like to use"></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.100/-"></HeadingAndText>,
        video:<iframe width="80%" height="auto" src="https://www.youtube.com/embed/G9oTLM4qxc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
        
        title:<h3>Rose Arka</h3>,
        type: <h6><b>{allProducts.roseWater}</b></h6>,
        desc : 
            <p>
                Rose Arka or Rose water is a fragrant, rose-colored water having similar qualities as Rose Mist and it can be used to complement face packs or ubtan. 
                <br/>
                <br/>
                Soak cotton pad in Rose arka and dab it all over the face for extra-hydration. The cotton pad can also be chilled in fridge and used on eyes for tired and puffy eyes.
                
            </p>,
        imagePath : <ImageSlickItem count = {2} smallImage0 = {rose_common} 
        smallImage1 = {rose_arka}></ImageSlickItem>,
        quantity : <HeadingAndText header = {allProducts.quantity} text="50ml"></HeadingAndText>,
        parent: allProducts.hydrosols,
        howtouse:<HeadingAndText header = {allProducts.howToUse} text = "Soak cotton pad in Rose arka and dab it all over the face for extra-hydration. The cotton pad can also be chilled in fridge and used on eyes for tired and puffy eyes."></HeadingAndText>,
        price: <HeadingAndText header = {allProducts.price} text = "Rs.80/-"></HeadingAndText>,
        video:<iframe width="80%" height="auto" src="https://www.youtube.com/embed/G9oTLM4qxc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    // ,
    // {
        
    //     title:<h3>Satin</h3>,
    //     desc : <p> Extra-hydrating serum that has quick absorption quality. Its a combination of oils and essential oils having properties of skin brightening, removal of hyper-pigmentation, even removing blemishes. The basic component is Vitamin-E oil and along with carrier oils as Sweet Almond oil</p>,
    //     imagePath : <ImageItem smallImageOne = "Not Available"></ImageItem>,
    //     quantity : <p><b> Quantity:</b> 5mg </p>,
    //     flavours : <p><b> Available in flavours:</b>Chocolate, Orange(essential oil) - Available in round containers</p>,
    //     howtouse : <p><b> How to Use: </b> Rub gently on the lips and after a while wipe off or rinse with water</p>,
    //     ingredients :<p><b> Ingredients:</b>It has a sweet sugary flavour through caster sugar blended with raw unbleached beeswax and Cocoa butter. The nourishing oils used are Sweet Almond, Jojoba and Vitamin-E</p>,
    //     parent: allProducts.bodyButter,
    //     price: <p> <b>Cost:</b> <ul> 
    //                 <li>5gm - Rs. 100/-</li>
    //                 <li>~10gm - 150/-</li>
    //                </ul>
    //            </p>     
    // }
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