export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemsToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemsToRemove) => {
  const existingItem = cartItems.find(
    (item) => item.id === cartItemsToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemsToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemsToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
