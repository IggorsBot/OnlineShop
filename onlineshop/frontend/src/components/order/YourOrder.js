import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './../../store'
import cart from './../../actions/cart'
import connect from "react-redux/lib/connect/connect";


class YourOrder extends Component {

    state = {
        productsOnCart: [],
        total_price: 0
    };

    componentDidMount(){
        cart().then();
        this.getOrderDetail().then();
    }


    getOrderDetail = () => {
        return axios
              .get('http://127.0.0.1:8000/api/cart/add/')
              .then(result =>{
                  this.setState(()=>{
                      return{
                          productsOnCart: Object.values(result.data.cart.cart)
                      }
                  })
              })
    };

    render(){
        const price = store.getState().price;
        return(
            <Fragment>
                <div style={{border: "2px solid black", marginTop: "40px", padding: "10px"}}>
                    <div>Your Order</div>
                    <ul>
                        {this.state.productsOnCart.map((product, index)=>{
                            return (
                                <li key={index}>
                                    {product.quantity}x {product.name} = {product.quantity * product.price}
                                </li>
                            )
                        })}
                    </ul>
                    <div>Total: $ {price}</div>
                </div>
            </Fragment>
        )
    }
}


export default YourOrder
