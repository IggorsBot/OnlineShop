import store from '../store'
import axios from 'axios'

const cart = () => {

    return axios
        .get('http://127.0.0.1:8000/api/cart/add/')
        .then(result => {
            let total_price = 0;
            let items = 0;
            Object.values(result.data.cart.cart).filter((item)=>{
                total_price += item.price * item.quantity;
                items++
            });
            store.dispatch({
                type:'ADD_ITEM_ON_CART',
                payload: {price: total_price, items: items}
            })

    })

};

export default cart
