import React, { Component } from "react";
import CartItem from "component/cartItem";
import CheckOutCart from "component/CheckOutCart";
import DefaultAddress from "component/Address/DefaultAddress";

export default class Cart extends Component {
  render() {
    return (
      <div className="container-fluid px-5 py-3">
        <div style={{ display: "flex" }}>
          <div style={{ flex: 5, backgroundColor: "white" }} className="mr-4">
            <h2
              className="mt-3 pb-3 mb-0 pl-3"
              style={{ borderBottom: "1px solid #f5f5f5" }}
            >
              Shopping Cart
            </h2>
            <CartItem />
            <CartItem />
          </div>
          <div style={{ backgroundColor: "grey", flex: 3 }}>
            <CheckOutCart />
            <DefaultAddress />
          </div>
        </div>
      </div>
    );
  }
}
