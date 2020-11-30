import React, { useEffect, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component.jsx";

import {
  auth,
  creatUserProfileDocument,
  //addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";

//import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

function App(props) {
  const unsubscribeRef = useRef(null);
  const { currentUser, setCurrentUser } = props;

  // useEffect(() => {
  // const userStatus = auth.onAuthStateChanged(async (userAuth) => {
  //   if (userAuth) {
  //     const userRef = await creatUserProfileDocument(userAuth);

  //     userRef.onSnapshot((snapShot) => {
  //       const newUser = {
  //         id: snapShot.id,
  //         ...snapShot.data(),
  //       };
  //       setCurrentUser(newUser);
  //       //console.log(userAuth);
  //     });
  //   } else {
  //     setCurrentUser(userAuth);
  //   }
  // addCollectionAndDocuments("collections", collectionArray.map(({title, items})=>({title, items})));
  // });

  //   unsubscribeRef.current = userStatus;
  //   return () => {
  //     const unsubscribe = unsubscribeRef.current;
  //     unsubscribe();
  //   };
  // }, [setCurrentUser]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  //collectionArray: selectCollectionsForPreview(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
