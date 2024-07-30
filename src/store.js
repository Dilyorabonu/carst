// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import rootReducer

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "user/login",
          "user/isAuthChange",
          "cart/addToCart",
          "cart/updateCartItem",
        ],
        ignoredPaths: ["user.user", "cart.cartItems"],
      },
    }),
});

export default store;
