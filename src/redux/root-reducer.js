//all reducers we write come into the root reducer
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer
   
});