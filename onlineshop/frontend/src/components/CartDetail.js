import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import cart from './../actions/cart'
import {Link} from 'react-router-dom'


class CartDetail extends Component{

    state = {
        productsOnCart: [],
    };

    getCartDetail = () => {
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

    deleteItemFromCart(id_product){
        return axios
              .delete('http://127.0.0.1:8000/api/cart/add/', {data:{id_product: id_product}})
              .then(result =>{
                  this.setState(()=>{
                      return{
                          productsOnCart: Object.values(result.data.cart.cart)
                      }
                  })
              })
    };

    componentDidMount(){
        this.getCartDetail().then();
    }

    getTotalPrice =() => {
        let total_price = 0;
        this.state.productsOnCart.filter((value, index) => {
            total_price +=  value['quantity'] * value['price']
        });
        return total_price
    };



    render(){
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Товар</th>
                        <th scope="col">Название</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Удалить</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Общая стоимость</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.productsOnCart.map((product, index) => {
                        return(
                                <tr key={index}>
                                    <td><img src={`http://localhost:8000/media/${product.image}`} style={{width:'75px', height:'55px'}}/></td>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.deleteItemFromCart(product.id).then(() =>{cart().then()})
                                        }}>
                                            Удалить
                                        </button>
                                    </td>
                                    <td>$ {product.price}</td>
                                    <td>$ {product.quantity * product.price}</td>
                                </tr>
                            )

                    })}
                    <tr className="text-white bg-dark">
                        <th scope="row">Всего</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>$ {this.getTotalPrice()}</td>
                    </tr>
                    </tbody>
                </table>
                <Link to="/shop/order"><button>Оформить заказ</button></Link>
            </div>
        )
    }
}

export default CartDetail
