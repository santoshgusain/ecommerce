import React, { Component } from 'react';
import OrderedItem from "component/OrderedItem";
import Search from "component/SimpleSearch"; 
import NavBar from "component/OrderHistoryNav";

export default class OrderHistory extends Component {
    render() {
        return (
            <div className="container my-1">
              <div className="order-history-title">
                  <h2 >Your Orders</h2>
                  <Search/>
              </div>
              <div className="order-history-title">
                  <NavBar/>
              </div>
             
                 <OrderedItem/>
                 <OrderedItem/>
                 <OrderedItem/>
            </div>
        )
    }
}
