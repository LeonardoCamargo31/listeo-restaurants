import React from 'react'
import {Router, Route, browserHistory } from 'react-router'

import App from '../main/app';
import User from '../user/user';
import Login from '../login/login';
import Restaurant from '../restaurant/restaurant';
import Product from '../product/product';
import Category from '../category/category';

export default props => (
    <Router history={browserHistory}>
        <Route path="/" component={Login}/>
        <Route path="/index" component={App}>
            <Route path="/restaurant" component={Restaurant}/>
            <Route path="/product" component={Product}/>
            <Route path="/category" component={Category}/>
        </Route>
    </Router>
)