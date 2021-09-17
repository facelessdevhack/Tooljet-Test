import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductPage from '../pages/productPage/ProductPage';
import Login  from '../pages/auth/login';
import Register from '../pages/auth/Register';
import Cart from '../pages/cart/cart';
import Home from '../pages/home/home';


export default function Routes() {
    return (
        <Router >
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/product/:id' component={ProductPage} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}