import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";


class PayByCreditCard extends Component {
	instance;

	state = {
		clientToken: null
	};

	async componentDidMount() {
		// Get a client token for authorization from your server
		const clientToken = await axios("http://127.0.0.1:8000/payment/process");

		this.setState({
			clientToken: clientToken.data.customer_id
		});
	}

	async buy() {
		// Send the nonce to server
		const { nonce } = await this.instance.requestPaymentMethod();
		await axios
			.post("http://127.0.0.1:8000/payment/process", {
			payment_method_nonce: nonce
		});
	}

	render(){
		if (!this.state.clientToken) {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<div>
					<DropIn
						options={{ authorization: this.state.clientToken }}
						onInstance={instance => (this.instance = instance)}
					/>
					<button onClick={this.buy.bind(this)}>Buy</button>
				</div>
			);
		}
	}
}

export default PayByCreditCard
