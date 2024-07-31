// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialLocalState = () => {
  return (
    JSON.parse(localStorage.getItem("cars")) || {
      cartItems: [],
      totalCars: 0,
      totalPrice: 0,
    }
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialLocalState(),
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id == payload.id);
      console.log(payload);
      if (item) {
        toast.warning("This car already added !");
      } else {
        state.cartItems = [...state.cartItems, payload];
        toast.success("Added !");
      }
      cartSlice.caseReducers.calculateTotoal(state);
    },
    updateCartItem: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id == payload.id);
      item.amount += payload.amount;
      cartSlice.caseReducers.calculateTotoal(state);
      toast.success("Update !");
    },
    removeCartItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      cartSlice.caseReducers.calculateTotoal(state);
      toast.warning("Cart deleted !");
    },
    removeAllCartItems: (state) => {
      state.cartItems = [];
      cartSlice.caseReducers.calculateTotoal(state);
      toast.warning("All items deleted !");
    },
    calculateTotoal: (state) => {
      let allPrice = 0;
      let allProducts = 0;

      state.cartItems.forEach((item) => {
        console.log(item.amount);
        allProducts += item.amount;
        allPrice += item.amount * item.price;
      });

      state.totalCars = allProducts;
      state.totalPrice = allPrice;

      localStorage.setItem("cars", JSON.stringify(state));
    },
  },
});

export const { addToCart, updateCartItem, removeCartItem, removeAllCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;
