import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import OrderResult from "./OrderResult";
import OrderForm from './OrderForm'
import YourOrder from './YourOrder'
import OrderDetail from './OrderDetail'
import PayByCreditCard from "./PayByCreditCard";

class OrderIndex extends Component {

    render(){
        return(
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/shop/order" component={OrderDetail}/>
                        <Route exact path="/shop/order/result" component={OrderResult}/>
                        <Route exact patt="/shop/order/card" component={PayByCreditCard}/>

                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}
export default OrderIndex
