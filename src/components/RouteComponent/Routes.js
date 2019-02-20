import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../../App'
import HowToOrder from '../Order/HowToOrder'
import Shop from '../Shopping/Shop'
import FAQ from '../FAQPage/FAQ'
import Recycling from '../RecyclingPage/Recycling'
import Gifting from '../GiftingIdeas/Gifting'
import AboutUs from '../aboutus/AboutUs'

function Routes() {
    return (
        <Router >
            <div>
                <Route exact path="/" component={App} />
                <Route path="/howtoorder" component={HowToOrder} />
                <Route path="/shop" component={Shop} />
                <Route path="/faqs" component={FAQ} />
                <Route path="/recycling" component={Recycling} />
                <Route path="/gifting" component={Gifting} />
                {/* <Route path="/aboutus" component={AboutUs} /> */}
            </div>
        </Router>);
}

export default Routes