import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop/hats" component={HatsPage}></Route>
        <Route path="/" component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
