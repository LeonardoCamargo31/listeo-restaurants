import React from 'react'
import {Router, Route, browserHistory ,IndexRoute } from 'react-router'

//import App from '../main/app';
import AuthOrApp from './authOrApp'

import User from '../user/user';
import Restaurant from '../restaurant/restaurant';
import Product from '../product/product';
import Category from '../category/category';

export default props => (
    <Router history={browserHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={AuthOrApp}/>
            <Route path="/restaurant" component={Restaurant}/>
            <Route path="/product" component={Product}/>
            <Route path="/category" component={Category}/>
            <Route path="/user" component={User}/>
        </Route>
    </Router>
)