import React, { useEffect, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component.jsx";

import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

function App(props) {
  //const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeRef = useRef(null);
  const { currentUser, setCurrentUser } = props;

  useEffect(() => {
    const userStatus = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await creatUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const newUser = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          setCurrentUser(newUser);
          //console.log(userAuth);
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    unsubscribeRef.current = userStatus;
    return () => {
      const unsubscribe = unsubscribeRef.current;
      unsubscribe();
    };
  }, [setCurrentUser]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
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
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
