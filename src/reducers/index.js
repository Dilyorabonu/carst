// reducers/index.js
import { combineReducers } from "redux";
import userReducer from "../app/userSlice";
import cartReducer from "../app/cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
