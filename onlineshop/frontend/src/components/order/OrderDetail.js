import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import OrderForm from './OrderForm'
import YourOrder from './YourOrder'
import OrderResult from "./OrderResult";


class OrderIndex extends Component {

    render(){
        return(
            <Fragment>
                <div className="row justify-content-around">
                    <div className="col-4">
                        <OrderForm/>
                    </div>
                    <div className="col-4">
                        <YourOrder/>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default OrderIndex
