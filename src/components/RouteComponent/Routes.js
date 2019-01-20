import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from '../../App'
import HowToOrder from '../Order/HowToOrder'
import Shop from '../Shopping/Shop'

function Routes() {
    return (
        <Router >
            <div>
                <Route exact path="/" component={App} />
                <Route path="/howtoorder" component={HowToOrder} />
                <Route path="/shop" component={Shop} />
            </div>
        </Router>);
}

export default Routes