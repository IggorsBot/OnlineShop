import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import connect from "react-redux/lib/connect/connect";
import store from './../../store'
import cart from './../../actions/cart'


class Header extends Component {
    state ={
      price: 0,
      items: 0,
    };

    componentDidMount(){
        cart().then()
    }

    render(){
        store.subscribe(() => this.setState(()=>{
            return {
                price: store.getState().price,
                items: store.getState().items
            }
        }));

        const emptyCart = <div>Cart</div>;
        const Cart = <div>Cart: {this.state.items} items $ {this.state.price}</div>;

        return (
          <Fragment>
              <header>
                  <div className="container">
                      <div className="row">

                          <div className="col-md-5 col-12 text-left">
                            <Link to="/shop"><h2 className="my-md-3 site-title text-white">Online Store</h2></Link>
                          </div>


                          <div className="col-md-5 col-12 text-right">
                            <p className="my-md-4 header-links">
                                <a href="#" className="px-2">Sign In</a>
                                <a href="#" className="px-1">Create an Account</a>
                            </p>
                          </div>


                          <div className="col-md-2 col-12">
                              <div className="my-md-3 text-white">
                                <div className="row">

                                  <div className="border rounded-circle mx-2 search-icon">
                                    <i className="fas fa-search p-2"></i>
                                  </div>

                                  <div className="border rounded-circle mx-2 basket-icon">
                                    <Link to="/shop/cart"><i className="fas fa-shopping-basket p-2"></i></Link>
                                  </div>

                                  <div className="">
                                    {this.state.items}
                                  </div>

                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                </header>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Header)
