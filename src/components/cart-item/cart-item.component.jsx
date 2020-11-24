import React from "react";

//import "./cart-item.styles.scss";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

function CartItem({ item: { imageUrl, name, price, quantity } }) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
