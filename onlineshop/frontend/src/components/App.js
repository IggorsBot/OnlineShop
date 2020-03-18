
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom'
import {Route} from 'react-router'
import Provider from "react-redux/lib/components/Provider";
import store from "../store";

import Header from './layout/Header'
import Menu from './layout/Menu'
import IndexPage from './IndexPage'
import OrderIndex from "./order/OrderIndex";
import OrderResult from "./order/OrderResult"
import CartDetail from "./CartDetail"
import BooksList from "./BooksList"
import BookDetail from "./BookDetail"
import Footer from "./footer/IndexFooter"
import ShippingMoneySupport from "./footer/ShippingMoneySupport"


class App extends Component {

    render() {
        return (
          <h1>React App</h1>
            // <Provider store={store}>
            //     <Fragment>
            //         <BrowserRouter>
            //             <Header/>
            //             <Menu/>
            //
            //             <div className="main">
            //                 <Switch>
            //                     <Route exact path="/shop/cart" component={CartDetail}/>
            //                     <Route exact path="/shop" component={IndexPage}/>
            //                     <Route exact path="/shop/order" component={OrderIndex}/>
            //                     <Route exact path="/shop/category/books/detail/:id" component={BookDetail}/>
            //
            //                     <Route exact path="/shop/category/books" component={BooksList}/>
            //                 </Switch>
            //             </div>
            //             <ShippingMoneySupport/>
            //             <Footer/>
            //         </BrowserRouter>
            //     </Fragment>
            // </Provider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
