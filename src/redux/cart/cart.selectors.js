import { createSelector } from "reselect";

//input select
const selectCart = (state) => state.cart;

// output select
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
);
