import {createStore} from "redux";
import reducer from "./reducers/cart"

const store = createStore(reducer);

export default store;
