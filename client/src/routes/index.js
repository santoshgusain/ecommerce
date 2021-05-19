// import "./App.css";
import React from "react";
import Home from "screens/Home";
import ProductDetails from "screens/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchedProducts from "screens/SearchedProduct";



function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/product">
          <Home />
        </Route>
        <Route exact path="/product/:product_id">
          <ProductDetails />
        </Route>
        <Route exact path="/support">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchedProducts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
