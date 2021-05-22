import React, { Component } from 'react';
import CartItem from "component/cartItem";
import CheckOutCart from "component/CheckOutCart";
// import CheckOutBox from "component/checkOutBox";

export default class Cart extends Component {
    render() {
        return (
            <>
            <div className="container" >
                <h2 className="my-3">Your Cart</h2>
                <div style={{display:"flex"}}   >

                    <div style={{flex:5}}>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div style={{backgroundColor:"grey",flex:3}}>
                        <CheckOutCart/>
                    </div>

                </div>
            </div>
            </>
        )
    }
}
