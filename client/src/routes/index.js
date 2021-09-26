// import "./App.css";
import React from "react";
import Home from "screens/Home";
import ProductDetails from "screens/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchedProducts from "screens/SearchedProduct";
import Header from "component/Header";
import Footer from "component/Footer";
import Cart from "screens/Cart";
import ManageAddress from "screens/ManageAddress";
import OrderHistory from "screens/OrderHistory";
import LiveOrder from "screens/LiveOrder";
import Login from "screens/Login";
import SignUp from "screens/SignUp";
import SignupEmail from "screens/SignupEmail";
import SignupMobile from "screens/SignupMobile";
import About from "screens/About";
import Contact from "screens/Contact";
import Profile from "screens/Profile";
import Setting from "screens/Setting";

function Routes() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/live-order">
          <LiveOrder />
        </Route>
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
        <Route exact path="/orders">
          <OrderHistory />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signup-email">
          <SignupEmail />
        </Route>
        <Route exact path="/signup-mobile">
          <SignupMobile />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/setting">
          <Setting />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
