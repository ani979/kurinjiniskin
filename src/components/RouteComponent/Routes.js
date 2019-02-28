import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Main from '../../Main'
import HowToOrder from '../Order/HowToOrder'
import Shop from '../Shopping/Shop'
import FAQ from '../FAQPage/FAQ'
import Recycling from '../RecyclingPage/Recycling'
import Gifting from '../GiftingIdeas/Gifting'
import AboutUs from '../aboutus/AboutUs'
import { ScrollContext } from 'react-router-scroll-4';
import Layout from '../app'

function Routes() {
    return (
            <Router basename={'/'} >
                <ScrollContext>
                        <Layout>
                            <Switch>
                                 <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main}/>
                                {/* <Route exact path="/" component={Main} /> */}
                                <Route exact path={`${process.env.PUBLIC_URL}/howtoorder`} component={HowToOrder} />
                                <Route exact path={`${process.env.PUBLIC_URL}/shop`} component={Shop} />
                                <Route exact path={`${process.env.PUBLIC_URL}/faqs`} component={FAQ} />
                                <Route exact path={`${process.env.PUBLIC_URL}/recycling`} component={Recycling} />
                                <Route exact path={`${process.env.PUBLIC_URL}/gifting`} component={Gifting} />
                                {/* <Route path="/aboutus" component={AboutUs} /> */}
                            </Switch>
                        </Layout>
                </ScrollContext>                

            </Router>);
}

export default Routes