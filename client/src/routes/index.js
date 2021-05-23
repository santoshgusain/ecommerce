// import "./App.css";
import React from "react";
import Home from "screens/Home";
import ProductDetails from "screens/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchedProducts from "screens/SearchedProduct";
import Header  from "component/Header";
import Footer  from "component/Footer";
import Cart from "screens/Cart";
import ManageAddress from "screens/ManageAddress";



function Routes() {
  return (
    <Router>
            <Header/>

      <Switch>
        <Route exact path="/cart">
          <Cart />
        </Route>
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
        <Route exact path="/change-address">
          <ManageAddress />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default Routes;
