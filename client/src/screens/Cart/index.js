import React, { Component } from 'react';
import CartItem from "component/cartItem";
// import CheckOutBox from "component/checkOutBox";

export default class Cart extends Component {
    render() {
        return (
            <>
            <div className="container" >
            This is an cart and here are all your cart item
                <div style={{display:"flex"}}   >

                    <div style={{flex:5}}>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div style={{backgroundColor:"grey",flex:3}}>
                        {/* <CheckOutBox/> */}
                        heere im
                    </div>

                </div>
            </div>
            </>
        )
    }
}
