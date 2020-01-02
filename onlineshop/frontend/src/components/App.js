
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'
import {Route} from 'react-router'
import Provider from "react-redux/lib/components/Provider";
import store from "../store";

import Header from './layout/Header'
import Menu from './layout/Menu'
import IndexPage from './IndexPage'
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import OrderIndex from "./order/OrderIndex";
import OrderResult from "./order/OrderResult"
import CartDetail from "./CartDetail"
import IndexBooks from "./books/IndexBooks"
import ElectronicsList from "./electronics/ElectronicsList"
import ProductsList from "./products/ProductsList"


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Header/>
                        <Menu/>
                        <div className="main">
                            <Switch>
                                <Route exact path="/shop/cart" component={CartDetail}/>
                                <Route exact path="/shop" component={IndexPage}/>
                              
                                <Route exact path="/shop/order" component={OrderIndex}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
