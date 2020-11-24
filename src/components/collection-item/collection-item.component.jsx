import React from "react";
//import "./collection-item.styles.scss";
//import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-styles.styles';

const CollectionItem = ({ item, addItem }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImage
      className='image'
         imageUrl={item.imageUrl}
      />
      <CollectionFooterContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>${item.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton interted="true" onClick={() => addItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
