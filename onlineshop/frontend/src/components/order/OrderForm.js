import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

class OrderForm extends Component{
    state = {
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        postal_code: "",
        city: "",
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    createOrder(){
        axios
            .post('http://127.0.0.1:8000/api/cart/order', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                address: this.state.address,
                postal_code: this.state.postal_code,
                city: this.state.city,
            });
    }


    render(){
        const {first_name, last_name, email, address, postal_code, city} = this.state;
        return(
            <div>
                <form>
                    <legend>Checkout</legend>
                        <p>First name:</p>
                        <p>
                        <input
                            type="text"
                            name="first_name"
                            onChange={this.onChange}
                            value={first_name}>
                        </input>
                        </p>
                        <p>Last name:</p>
                        <p>
                        <input
                            type="text"
                            name="last_name"
                            onChange={this.onChange}
                            value={last_name}>
                        </input>
                        </p>
                        <p>Email:</p>
                        <p>
                        <input
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            value={email}>
                        </input>
                        </p>
                        <p>Address:</p>
                        <p>
                        <input
                            type="text"
                            name="address"
                            onChange={this.onChange}
                            value={address}>
                        </input>
                        </p>
                        <p>Postal code:</p>
                        <p>
                        <input
                            type="text"
                            name="postal_code"
                            onChange={this.onChange}
                            value={postal_code}>
                        </input>
                        </p>
                        <p>City:</p>
                        <p>
                        <input
                            type="text"
                            name="city"
                            onChange={this.onChange}
                            value={city}>
                        </input>
                        </p>
                        <Link to="/shop/order/card" onClick={()=>this.createOrder()}><button>Оформить заказ</button></Link>
                </form>
            </div>
        )
    }
}

export default OrderForm
