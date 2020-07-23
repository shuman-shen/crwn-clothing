import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import Header from "./components/header/header.component.jsx";

import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeRef = useRef(null);

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
  }, []);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

// class App extends Component {
//   state = {
//     currentUser: null,
//   };

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
//       this.setState({ currentUser: user });
//       console.log(user);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/shop" component={ShopPage} />
//           <Route exact path="/signin" component={SignInSignUp} />
//         </Switch>
//       </div>
//     );
//   }
// }

export default App;
